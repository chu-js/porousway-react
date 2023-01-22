// Home page

import { useState } from "react";

import ComparisonChart from "../../components/comparison-chart/comparison-chart.component";
import ConditionalBanners from "../../components/conditional-banners/conditional-banners.component";
import SelectReasonBanner from "../../components/select-reason-banner/select-reason-banner.component";

const Home = () => {
  const [reason, setReason] = useState("Aesthetic");
  const handleChange = (event) => {
    setReason(event.target.value);
  };

  return (
    <div>
      <SelectReasonBanner reason={reason} handleChange={handleChange} />
      <ConditionalBanners reason={reason} />
      <ComparisonChart />
    </div>
  );
};

export default Home;
