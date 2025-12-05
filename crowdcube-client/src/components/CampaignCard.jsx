import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={campaign.image} alt={campaign.title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{campaign.title}</h2>
        <p className="badge badge-secondary">{campaign.type}</p>
        <p className="text-sm">{campaign.description?.substring(0, 100)}...</p>
        <div className="text-sm">
          <p><strong>Min Donation:</strong> ${campaign.minDonation}</p>
          <p><strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/campaign/${campaign._id}`} className="btn btn-primary btn-sm">See More</Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
