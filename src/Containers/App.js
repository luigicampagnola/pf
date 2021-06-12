import "./App.css";
import HeaderComponent from "../Components/HeaderComponent/HeaderComponent";
import Skills from "../Components/Skills/Skills";
import RenderProject from "../Components/ProjectList/RenderProjectData";
import Footer from "../Components/Footer/Footer";
import { Component } from "react";
import "animate.css";
import "react-animate-on-scroll";
import { ProjectData } from "../Components/ProjectList/ProjectData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Skills />
        <RenderProject ProjectData={ProjectData} />
        <Footer />
      </div>
    );
  }
}

export default App;
