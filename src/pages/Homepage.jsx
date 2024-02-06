
import { Link } from "react-router-dom";
import PageNav from "../componenets/PageNav";
import AppNav from "../componenets/AppNav";
export default function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>
      {/* <a href="/Pricing">Pricing</a>  */}
      <Link to="/app">Go to the App</Link>
    </div>
  )
}
