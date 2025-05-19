import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
function App() {
  // ici on met en place des states permetttant de gerer les projets à afficher
  const [projectState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(
      prevState => {
        return {
          ...prevState,
          selectedProjectId: null,
        };
      });
}

function handleCancelAddProject() {
  setProjectsState(
    prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
}


// on récupère les champs destructuré dans projectData ici
function handleAddProject(projectData){
  setProjectsState(prevState => {
    // on créée un nouveau projet
    const newProject= {
      ...projectData,
      id: Math.random(),
    };

    // on concatene l'ancien tableau avec le nouveau projet
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects : [...prevState.projects, newProject],
      };
    }
  )
}

function handleSelectProject(id){
 setProjectsState(prevState => {
  return{
    ...prevState,
    selectedProjectId: id
  };
 })
};

const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

let content = <SelectedProject project={selectedProject} />;
if(projectState.selectedProjectId === null) {
  content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
} else if(projectState.selectedProjectId === undefined) {
  content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
}

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
