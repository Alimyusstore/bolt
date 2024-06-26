import { Link } from "react-router-dom";
import { pathBolt, pathContact } from "./pathNames";

export default function App() {
  return (
    <>
    
      <Link to="/">Home</Link>
      <Link to={pathBolt}>Bolt</Link>
      <Link to={pathContact}>Contact</Link>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>;
    </>
  );}

