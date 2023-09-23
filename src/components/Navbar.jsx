import { Link } from "react-router-dom";
 
function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
 
      <Link to="/projects">
        <button>Projects</button>
      </Link>

      <Link to="/projects/add">
        <button>Add New Project</button>
      </Link>
    </nav>
  );
}
 
export default Navbar;