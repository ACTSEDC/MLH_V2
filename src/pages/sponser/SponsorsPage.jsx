import React from 'react';
import { SPONSORS_CONFIG } from '../../data/sponsorsData.js';
import './SponsorsPage.css';

/**
 * SponsorsPage Component
 * Renders the exact neo-brutalist sponsor showcase using semantic list items.
 */
export default function SponsorsPage({ tiers = SPONSORS_CONFIG }) {
  return (
    <section className="sponsors-container">
      <div className="sponsors-wrapper">

        {/* Header Row */}
        <header className="sponsors-header">
          <h1 className="sponsors-heading">BACKED BY BUILDERS.</h1>
          <p className="sponsors-subtitle">
            Grateful to our sponsors supporting Hacktoberfest 2026.
          </p>
          <div className="sponsors-header-accent" aria-hidden="true" />
        </header>

        {/* Sponsor Tier List (ul > li) */}
        <ul className="sponsors-cards-list">
          {tiers.map((tier) => {
            const hasSponsors = tier.sponsors && tier.sponsors.length > 0;
            const isSingleLogo = tier.sponsors?.length === 1;

            return (
              <li
                key={tier.id}
                className={`sponsor-card tier-${tier.id}`}
              >
                {/* Left Column: Tier Info */}
                <div className="sponsor-meta-col">
                  <span className={`sponsor-tier-badge badge-${tier.id}`}>
                    {tier.tierLabel}
                  </span>

                  <div className="sponsor-red-line" />

                  <p className="sponsor-tier-subtitle">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Right Column: Sponsor Logos */}
                <div className={`sponsor-logos-area ${isSingleLogo ? 'centered' : ''}`}>
                  {hasSponsors && tier.sponsors.map((sponsor) => (
                    <SponsorLogoItem key={sponsor.id || sponsor.name} sponsor={sponsor} />
                  ))}
                </div>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}

/**
 * SponsorLogoItem Helper Component
 */
function SponsorLogoItem({ sponsor }) {
  const logoContent = (
    <img
      src={sponsor.logo}
      alt={sponsor.name}
      className="sponsor-logo-img"
      style={{ height: sponsor.logoHeight || '42px' }}
    />
  );

  if (!sponsor.website) {
    return <div className="sponsor-logo-link">{logoContent}</div>;
  }

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className="sponsor-logo-link"
      title={sponsor.name}
    >
      {logoContent}
    </a>
  );
}
