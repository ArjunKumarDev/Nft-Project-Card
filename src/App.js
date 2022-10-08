import ProjectCard from "./components/ProjectCard";
import { ProjectData } from "./ProjectData";
import { ProjectsContainer } from "./components/ProjectCardStyle";
import "./App.css";



function App() {
  return (
    <div className="App">
      <h1>Latest Projects</h1>
      <ProjectsContainer>
        {ProjectData?.map((item) => {
          return <ProjectCard data={item} />;
        })}
      </ProjectsContainer>
    </div>
  );
}

export default App;
