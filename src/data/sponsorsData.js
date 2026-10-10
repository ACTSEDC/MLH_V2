import mlhLogo from '../assets/images/image 6.png';
import githubLogo from '../assets/images/GitHub.png';
import digitalOceanLogo from '../assets/images/DigitalOcean.png';
import awsLogo from '../assets/images/AWS.png';

/**
 * Sponsors Data Configuration
 */
export const SPONSORS_CONFIG = [
  {
    id: 'gold',
    tierLabel: 'GOLD SPONSOR',
    subtitle: 'LEADING THE WAY IN\nOPEN SOURCE',
    sponsors: [
      {
        id: 'mlh',
        name: 'Major League Hacking',
        logo: mlhLogo,
        website: 'https://mlh.io',
        logoHeight: '110px'
      }
    ]
  },
  {
    id: 'silver',
    tierLabel: 'SILVER SPONSOR',
    subtitle: 'SUPPORTING BUILDERS\nGLOBALLY',
    sponsors: [
      {
        id: 'github',
        name: 'GitHub',
        logo: githubLogo,
        website: 'https://github.com',
        logoHeight: '42px'
      },
      {
        id: 'digitalocean',
        name: 'DigitalOcean',
        logo: digitalOceanLogo,
        website: 'https://digitalocean.com',
        logoHeight: '42px'
      },
      {
        id: 'aws',
        name: 'AWS',
        logo: awsLogo,
        website: 'https://aws.amazon.com',
        logoHeight: '42px'
      }
    ]
  },
  {
    id: 'bronze',
    tierLabel: 'BRONZE SPONSOR',
    subtitle: 'ENABLING OPEN\nINNOVATION',
    sponsors: []
  }
];
