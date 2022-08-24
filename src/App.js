import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import MediaBuzzs from "./Pages/MediaBuzzs/MediaBuzzs";
import FallDetails from "./Pages/MediaBuzzs/Fall/FallDetails";
import ShowReels from "./Pages/ShowReels/ShowReels";
import MediaBuzzDataUp from "./Pages/Dashboard/MediauzzUploads/MediaBuzzDataUp";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import ShowReelsDataUp from "./Pages/Dashboard/ShowReelsUploads/ShowReelsDataUp";
import EventsDataUp from "./Pages/Dashboard/EventsUploads/EventsDataUp";
import TalentHuntsDataUp from "./Pages/Dashboard/TalentHuntsUploads/TalentHuntsDataUp";
import ResearchDataUp from "./Pages/Dashboard/ResearchUploads/ResearchDataUp";
import ReadingMaterialsDataUp from "./Pages/Dashboard/ReadingMaterialsUploads/ReadingMaterialsDataUp";
import AlumniDataUp from "./Pages/Dashboard/AlumniUploads/AlumniDataUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="media" element={<MediaBuzzs />} />
          <Route path="/fallDetails" element={<FallDetails />} />
          <Route path="/showReel" element={<ShowReels />} />

          {/* Nested Routes */}

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/mediaData" element={<MediaBuzzDataUp />} />
            <Route path="/dashboard/reelsData" element={<ShowReelsDataUp />} />
            <Route path="/dashboard/eventsData" element={<EventsDataUp />} />
            <Route
              path="/dashboard/talentData"
              element={<TalentHuntsDataUp />}
            />
            <Route
              path="/dashboard/researchData"
              element={<ResearchDataUp />}
            />
            <Route
              path="/dashboard/readingData"
              element={<ReadingMaterialsDataUp />}
            />
            <Route path="/dashboard/alumniData" element={<AlumniDataUp />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
