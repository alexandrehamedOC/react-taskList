import Layout from "./components/Layout/Layout";
import Sidebar from "./components/sidebar/Sidebar";
import ProjectForm from "./components/ProjectForm/ProjectForm";

function App() {
  return (
    <div className="flex mx-auto">

      <Sidebar />
      <Layout>
        <ProjectForm />
      </Layout>


    </div>
  );
}

export default App;
