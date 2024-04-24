import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FindJobsPage from "./components/pages/find-jobs/FindJobsPage";
import HomePage from "./components/pages/home/HomePage";
import OurTeamPage from "./components/pages/our-team/OurTeamPage";
import AboutUsPage from "./components/pages/about-us/AboutUsPage";
import ContactPage from "./components/pages/contact/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-jobs" element={<FindJobsPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
