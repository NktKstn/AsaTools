
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog"
import Skag from "./Components/SKAG/Skag";
import AsaPerfomance from "./Components/Blog/Asa-perfomance/AsaPerfomance";
import AmplitudeRetention from "./Components/Blog/amplitude-retention/Amplitude-retention";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


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
          </Routes>
          <Footer/>
      </Router>
</>
  );
}

export default App;
