import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
	render() {
		return (
				<div>
					<nav className="navbar navbar-expand-lg navbar-light">
					  <a className="navbar-brand logo" href="/">Stephen Ruan</a>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			
				    	<i className="fas fa-bars"></i>

					   	</button>

					  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					    <div className="navbar-nav">
					      <NavLink className="nav-item nav-link" activeClassName="nav-item nav-link active" to="/About">About</NavLink>
					      <NavLink className="nav-item nav-link" activeClassName="nav-item nav-link active" to="/Work">Work</NavLink>
					      <NavLink className="nav-item nav-link" activeClassName="nav-item nav-link active" to="/Contact">Contact</NavLink>
					    </div>
					  </div>
					</nav>
			    </div>
		)
	}
}
export default Navbar;