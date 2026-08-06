import React from 'react'
import { Link  , Outlet} from 'react-router-dom'
import PageNav from '../components/PageNav.jsx'
import AppNav from '../components/AppNav.jsx'
function Homepage() {
  return (
<div>   
   <h1>WorldWise</h1>
<AppNav/>
<PageNav/>
  <Outlet/>
    <Link to="/app">Go to the App</Link>;
    </div>
  )
}

export default Homepage