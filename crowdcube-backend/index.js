require('dotenv').config({ path: '.env.local' });

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Middleware
app.use(express.json());
app.use(cors());

// Global variable to hold the database connection
let db;

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    
    // Get the database reference
    db = client.db('crowdcube');
    
    console.log("✅ You successfully connected to MongoDB!");
    
    // Start the server only after successful database connection
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
    
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}

// ==================== ROUTES ====================

// GET single campaign by ID
app.get('/data/:id', async (req, res) => {
  try {
    const collection = db.collection('campaigns');
    const data = await collection.findOne({ _id: new ObjectId(req.params.id) });
    
    if (!data) {
      return res.status(404).send({ error: 'Campaign not found' });
    }
    
    res.send(data);
  } catch (error) {
    console.error('Error fetching campaign:', error);
    res.status(500).send({ error: 'Failed to fetch campaign' });
  }
});

// POST - Add new campaign
app.post('/add-campaign', async (req, res) => {
  try {
    const collection = db.collection('campaigns');
    const result = await collection.insertOne(req.body);
    res.send({
      status: true,
      message: 'Campaign added successfully',
      insertedId: result.insertedId
    });
  } catch (error) {
    console.error('Error adding campaign:', error);
    res.status(500).send({ error: 'Failed to add campaign' });
  }
});

// GET campaigns with limit
app.get('/data', async (req, res) => {
  try {
    const collection = db.collection('campaigns');
    const limit = parseInt(req.query.limit) || 0;
    const data = await collection.find({}).limit(limit).toArray();
    res.send(data);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).send({ error: 'Failed to fetch campaigns' });
  }
});

// GET user's campaigns
app.get('/my-campaigns', async (req, res) => {
  try {
    const collection = db.collection('campaigns');
    const data = await collection.find({ userEmail: req.query.email }).toArray();
    res.send(data);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).send({ error: 'Failed to fetch campaigns' });
  }
});

// UPDATE campaign
app.put('/update-campaign/:id', async (req, res) => {
  try {
    const collection = db.collection('campaigns');
    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    res.send({
      message: 'Campaign updated successfully',
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    console.error('Error updating campaign:', error);
    res.status(500).send({ error: 'Failed to update campaign' });
  }
});

// DELETE campaign
app.delete('/delete-campaign/:id', async (req, res) => {
  try {
    const collection = db.collection('campaigns');
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    res.send({
      message: 'Campaign deleted successfully',
      deletedCount: result.deletedCount
    });
  } catch (error) {
    console.error('Error deleting campaign:', error);
    res.status(500).send({ error: 'Failed to delete campaign' });
  }
});

// POST - Add donation
app.post('/donations', async (req, res) => {
  try {
    const collection = db.collection('donations');
    const result = await collection.insertOne(req.body);
    res.send({
      status: true,
      message: 'Donation added successfully',
      insertedId: result.insertedId
    });
  } catch (error) {
    console.error('Error adding donation:', error);
    res.status(500).send({ error: 'Failed to add donation' });
  }
});

// GET user's donations
app.get('/my-donations', async (req, res) => {
  try {
    const collection = db.collection('donations');
    const data = await collection.find({ userEmail: req.query.email }).toArray();
    res.send(data);
  } catch (error) {
    console.error('Error fetching donations:', error);
    res.status(500).send({ error: 'Failed to fetch donations' });
  }
});



// Health check
app.get('/', (req, res) => {
  res.send({
    message: 'Crowdcube Backend API is running!',
    status: 'Active',
    timestamp: new Date().toISOString()
  });
});

// Database connection test
app.get('/health', async (req, res) => {
  try {
    const campaignsCollection = db.collection('campaigns');
    const donationsCollection = db.collection('donations');
    const campaignsCount = await campaignsCollection.countDocuments();
    const donationsCount = await donationsCollection.countDocuments();
    
    res.send({
      status: '✅ Healthy',
      database: '✅ Connected',
      totalCampaigns: campaignsCount,
      totalDonations: donationsCount,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).send({
      status: '❌ Unhealthy',
      database: '❌ Disconnected',
      error: error.message
    });
  }
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('🛑 Shutting down server...');
  await client.close();
  console.log('✅ MongoDB connection closed.');
  process.exit(0);
});

// Initialize the application
run().catch(console.dir);