# CrowdCube API Reference

Base URL: `http://localhost:5000`

## Campaign Endpoints

### Get All Campaigns
```
GET /data
Query Params: ?limit=6 (optional)
Response: Array of campaign objects
```

### Get Single Campaign
```
GET /data/:id
Response: Single campaign object
```

### Get User's Campaigns
```
GET /my-campaigns?email={userEmail}
Response: Array of user's campaigns
```

### Add New Campaign
```
POST /add-campaign
Body: {
  image: string,
  title: string,
  type: string,
  description: string,
  minDonation: number,
  deadline: string (ISO date),
  userEmail: string,
  userName: string,
  createdAt: string (ISO date)
}
Response: { status, message, insertedId }
```

### Update Campaign
```
PUT /update-campaign/:id
Body: {
  image: string,
  title: string,
  type: string,
  description: string,
  minDonation: number,
  deadline: string
}
Response: { message, modifiedCount }
```

### Delete Campaign
```
DELETE /delete-campaign/:id
Response: { message, deletedCount }
```

## Donation Endpoints

### Add Donation
```
POST /donations
Body: {
  campaignId: string,
  campaignTitle: string,
  campaignImage: string,
  minDonation: number,
  userEmail: string,
  userName: string,
  donatedAt: string (ISO date)
}
Response: { status, message, insertedId }
```

### Get User's Donations
```
GET /my-donations?email={userEmail}
Response: Array of donation objects
```

## Health Check

### Server Health
```
GET /
Response: { message, status, timestamp }
```

### Database Health
```
GET /health
Response: { 
  status, 
  database, 
  totalCampaigns, 
  totalDonations, 
  timestamp 
}
```

## Campaign Types
- personal issue
- startup
- business
- creative ideas

## Sample Campaign Object
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "image": "https://example.com/image.jpg",
  "title": "Help Build Community Center",
  "type": "personal issue",
  "description": "Full description here...",
  "minDonation": 50,
  "deadline": "2025-12-31",
  "userEmail": "user@example.com",
  "userName": "John Doe",
  "createdAt": "2024-01-15T10:00:00.000Z"
}
```

## Sample Donation Object
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "campaignId": "507f1f77bcf86cd799439011",
  "campaignTitle": "Help Build Community Center",
  "campaignImage": "https://example.com/image.jpg",
  "minDonation": 50,
  "userEmail": "donor@example.com",
  "userName": "Jane Smith",
  "donatedAt": "2024-03-15T10:00:00.000Z"
}
```
