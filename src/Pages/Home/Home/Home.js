import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import About from "../About/About";
import AdmissionHome from "../AdmissionHome/AdmissionHome";
import EventsHome from "../EventsHome/EventsHome";
import MediaBuzzHome from "../MediaBuzzHome/MediaBuzzHome";
import PromoVideoHome from "../PromoVideoHome/PromoVideoHome";
import ShowReelHome from "../ShowReelHome/ShowReelHome";

const Home = () => {
  return (
    <div>
      <About />
      <MediaBuzzHome />
      <ShowReelHome />
      <EventsHome />
      <PromoVideoHome />
      <AdmissionHome />
    </div>
  );
};

export default Home;
