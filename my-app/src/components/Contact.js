import React from "react";
import axios from "axios";
import Form from "./Form";

class Contact extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();

	}
	render() {
		return (
			<div>
				<section id="Contact">
					<div className="wrapper">
						<div className="container-fluid">
							<div className="row">
								<div className="col-xs-12">
									<h1 className="title">Contact</h1>
										<Form handleSubmit={this.handleSubmit}/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
export default Contact;