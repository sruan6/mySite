import React from "react";
import Typed from 'react-typed';
import Skill from "./Skill";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PIC from "./profile.JPG";
import Navbar from "./Navbar";

class About extends React.Component {

	componentDidMount(){
      AOS.init({
        duration : 1200
      })
    };

	render() {
		return (
			<div>
				<section id="About">
					<div className="wrapper">

						<div className="row">
						<div className="col-12">
							<Navbar />
						</div>
							<div className="col-12">
								<div className="about" data-aos="slide-down">
									<div className="container-fluid">
										<div className="row">
											<div className="col-12 title-container">
											<div className="stars"></div>
											<div className="twinkling"></div>
											<div className="clouds"></div>
												<div className="picture"></div>
												<h1 className="subtitle">
												    <Typed 
                    								strings={['FrontEnd Developer', 'FullStack Developer', 'Gamer']} 
                    								typeSpeed={100}
                    								backSpeed={50}
                    								loop 
                								/>
												</h1>
												<div className="info">
													<div className="container-fluid">
														<p className="info_p">Hi! My Name is Stephen Ruan. I live in San Francisco. I love to
														code and play video games. I was raised in San Francisco around technology my whole life.
														My hobbies consist of coding apps, playing video games, and watching anime!
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-12">
								<div className="skill" data-aos="slide-right">
									<div className="container-fluid">
										<div className="row">
											<div className="col-12">
												<Skill />
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</section>
			</div>
		)
	}
}
export default About;