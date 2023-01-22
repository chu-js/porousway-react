// Logic of banner change based on user's reason for visiting the site.

import Banner from "../banner/banner.component";

const ConditionalBanners = ({ reason }) => {
  switch (reason) {
    case "Aesthetic":
      return (
        <div>
          <Banner
            product="Aesthetic"
            tagline="Out to impress."
            url="https://porousway.com/wp-content/uploads/2021/10/Balcony-of-Condo.jpeg"
          />
          <Banner
            product="Flake"
            tagline="A refreshed look."
            url="https://porousway.com/wp-content/uploads/2021/09/balcony-2.jpg"
          />
          <Banner product="Micro-cement" tagline="Stunning." />
          <Banner product="Custom projects" tagline="An edge over others." />
        </div>
      );

    case "Anti-slip":
      return (
        <div>
          <Banner
            product="Anti-slip"
            tagline="Out to impress."
            url="https://www.porousway.com/wp-content/uploads/2021/10/Balcony-of-Relaxing-Condo.jpeg"
          />
          <Banner
            product="Flake"
            tagline="A refreshed look."
            url="https://porousway.com/wp-content/uploads/2021/09/balcony-2.jpg"
          />
          <Banner product="Micro-cement" tagline="Stunning." />
          <Banner product="Custom projects" tagline="An edge over others." />
        </div>
      );

    case "Waterproofing":
      return (
        <div>
          <Banner
            product="Waterproofing"
            tagline="Out to impress."
            url="https://www.porousway.com/wp-content/uploads/2021/10/Balcony-of-Relaxing-Condo.jpeg"
          />
          <Banner
            product="Flake"
            tagline="A refreshed look."
            url="https://porousway.com/wp-content/uploads/2021/09/balcony-2.jpg"
          />
          <Banner product="Micro-cement" tagline="Stunning." />
          <Banner product="Custom projects" tagline="An edge over others." />
        </div>
      );
  }
};

export default ConditionalBanners;
