
import { Link } from "react-router-dom";
import PageNav from "../componenets/PageNav";
export default function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
      {/* <a href="/Pricing">Pricing</a>  */}
      <Link to="/app">Go to the App</Link>
    </div>
  )
}
