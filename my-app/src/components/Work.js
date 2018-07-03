import React from "react";
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Work extends React.Component {

	componentDidMount(){
      AOS.init({
        duration : 1200
      })
    };

	render() {
	return (
		<div>
			<section id="Work">
				<div className="wrapper">
				<div className="row">

					<div className="col-12">
						<Navbar />
					</div>
					
					<div className="col-12">
						<div className="container-fluid">
								<h1 className="title">Work</h1>

								<div className="item" data-aos="fade-up">1</div>
								<div className="item" data-aos="fade-down">2</div>
								<div className="item" data-aos="fade-right">3</div>
								<div className="item" data-aos="fade-left">4</div>

								<div className="item" data-aos="zoom-in">5</div>
								<div className="item" data-aos="zoom-out">6</div>

								<div className="item" data-aos="slide-up">7</div>

								<div className="item" data-aos="flip-up">8</div>
								<div className="item" data-aos="flip-down">9</div>
								<div className="item" data-aos="flip-right">10</div>
								<div className="item" data-aos="flip-left">11</div>
								
							</div>
						</div>
					</div>

				</div>
			</section>
		</div>
	)
}
}
export default Work;