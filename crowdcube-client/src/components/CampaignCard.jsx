import { Link } from 'react-router-dom';
import { memo } from 'react';

const CampaignCard = memo(({ campaign }) => {
  const isExpired = new Date(campaign.deadline) < new Date();
  const truncatedDesc = campaign.description?.length > 100 
    ? `${campaign.description.substring(0, 100)}...` 
    : campaign.description;

  return (
    <article className="group relative bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={campaign.image} 
          alt={`${campaign.title} campaign banner`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="badge badge-lg bg-white/90 text-purple-600 border-0 font-semibold">
            {campaign.type}
          </span>
          {isExpired && (
            <span className="badge badge-lg bg-error/90 text-white border-0 font-semibold">
              Expired
            </span>
          )}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold line-clamp-2 min-h-[3.5rem]">{campaign.title}</h2>
        <p className="text-base-content/70 line-clamp-2 min-h-[3rem]">{truncatedDesc}</p>
        <div className="flex items-center justify-between pt-4 border-t border-base-300">
          <div>
            <p className="text-xs text-base-content/60">Min Donation</p>
            <p className="text-xl font-bold text-purple-600">
              ${campaign.minDonation?.toLocaleString() || 0}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-base-content/60">Deadline</p>
            <p className={`text-sm font-semibold ${isExpired ? 'text-error' : ''}`}>
              {new Date(campaign.deadline).toLocaleDateString()}
            </p>
          </div>
        </div>
        <Link 
          to={`/campaign/${campaign._id}`} 
          className="btn btn-primary w-full rounded-xl"
          aria-label={`View details for ${campaign.title}`}
        >
          View Details
        </Link>
      </div>
    </article>
  );
});

CampaignCard.displayName = 'CampaignCard';

export default CampaignCard;
