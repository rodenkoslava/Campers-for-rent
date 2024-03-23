import { useState, useEffect } from "react";
import sprite from "../../assets/sprite.svg";
import { LocationBox, Svg, Title } from "./CurrentLocation.styled";

const CurrentLocation = () => {
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    const getLocationInfo = async () => {
      try {
        const responseIp = await fetch("https://api.ipify.org?format=json");
        const { ip } = await responseIp.json();
        const responseLocation = await fetch(`https://ipapi.co/${ip}/json/`);
        const data = await responseLocation.json();
        setLocationInfo(data);
      } catch (error) {
        console.error("Error getting location information:", error);
      }
    };

    getLocationInfo();
  }, []);

  return (
    <div>
      <Title>Location</Title>
      {locationInfo ? (
        <LocationBox>
          <Svg>
            <use href={sprite + "#icon-location"} />
          </Svg>
          <p>
            {locationInfo.city}, {locationInfo.country_name}
          </p>
        </LocationBox>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default CurrentLocation;
