 
import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
 
import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/HomePage";     // <== IMPORT
import ProjectsList from "./pages/ProjectsList";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import AddProject from "./pages/AddProject";
 
/* 
Objective: Full CRUD with my react application
*/


function App() {
  return (
    <div className="App">
      
     {/* Below: ADD <Navbar>, <Routes> & <Route> */}
      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path='/projects' element={<ProjectsList/>}/>
        <Route path="/projects/:id" element={<ProjectDetailsPage></ProjectDetailsPage>}></Route>
        <Route path="/projects/add" element={<AddProject></AddProject>}></Route>
      </Routes>
      
    </div>
  );
}
 
export default App;