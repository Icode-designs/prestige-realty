import React, { useEffect } from "react";
import { FindusBox } from "@/styles/Findus.styles";
import L from "leaflet";
import { FlexBox, Heading2, SectionWrapper } from "@/styles/Ui.styles";
import "leaflet/dist/leaflet.css";

const Findus = () => {
  useEffect(() => {
    const map = L.map("map", {
      center: [6.4285, 3.4442],
      zoom: 15,
      scrollWheelZoom: false, // disables zoom with mouse scroll
    });

    L.marker([6.4285, 3.4442]).addTo(map);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    return () => {
      map.remove(); // Clean up when component unmounts
    };
  }, []);

  return (
    <SectionWrapper>
      <FlexBox $variant="centered">
        {" "}
        <Heading2>
          <span>Find</span> us
        </Heading2>
      </FlexBox>
      <FindusBox id="map" aria-label="Location Map" role="application" />
    </SectionWrapper>
  );
};

export default Findus;
