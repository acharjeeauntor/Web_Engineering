import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
const Landing = () => {
     return (
          <div className="landing">
          <div className="card bg-info landingPage">
                    <div className="card-body landing-body">
          <div className="login">
                    <Link to="/register" className="btn btn-lg btn-secondary mr-2">Sign Up</Link>
                              <Link to="/login" className="btn btn-lg btn-secondary">Sign In</Link>
                              <p>Sign in by Social Media account</p>
                              </div>
                       
  </div>
               </div>
               </div>
     )
}

export default Landing
