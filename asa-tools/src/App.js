
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog"
import Skag from "./Components/SKAG/Skag";
import AsaPerfomance from "./Components/Blog/Asa-perfomance/AsaPerfomance";
import AmplitudeRetention from "./Components/Blog/amplitude-retention/Amplitude-retention";
import AmplitudePaywallConversion from "./Components/Blog/amplitude-paywall-conversion/AmplitudePaywallConversion";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import TermsOfService from "./Components/Footer/Information of site/Terms of Service/TermsOfService";


function App() {
  return (
    <>
      <Router>
          <Header/>
          <Routes>
              <Route path="/" element = {<Main/>}/>
              <Route path="/blog" element = {<Blog/>}/>
              <Route path="/skag" element = {<Skag/>}/>
              <Route path="/blog/asa-perfomance" element = {<AsaPerfomance/>}/>
              <Route path="/blog/amplitude-retention" element = {<AmplitudeRetention/>}/>
              <Route path="/blog/amplitude-paywall-conversion" element = {<AmplitudePaywallConversion/>}/>
              <Route path="/terms-of-service" element = {<TermsOfService/>}/>
          </Routes>
         <Footer/>
      </Router>
    </>
  );
}

export default App;
