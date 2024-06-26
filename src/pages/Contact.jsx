import { Link } from "react-router-dom";
import { pathBolt, pathContact } from "../pathNames";

function Contact(){
    return (
      <>
        <Link to="/">Home</Link>
        <Link to={pathBolt}>Bolt</Link>
        <Link to={pathContact}>Contact</Link>
        <h1 className="font-bold text-4xl"> +2347015237423</h1>

      </>
    );
}
 export default Contact