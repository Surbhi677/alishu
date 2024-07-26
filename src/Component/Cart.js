import React, { Component } from 'react';

export default class Cart extends Component {
  constructor(props){
    super(props);
    this.state={
     Title: "Web Development",
     Description: "Support and streamline your operations with software. Riffle dace three-toothed puffer albacore dragon goby, brook trout koi. Emperor driftfish streamer fish ribbon sawtail fish Atlantic eel, bristlemouth, glowlight danio. Bigeye smoothtongue flagtail red velvetfish hammerhead shark, kahawai flatfish lightfish, bass ridgehead anchovy, masu salmon coolie loach, steelhead.",
     Title1: "UI/UX Design",
     Description1: "Support and streamline your operations with software. Riffle dace three-toothed puffer albacore dragon goby, brook trout koi. Emperor driftfish streamer fish ribbon sawtail fish Atlantic eel, bristlemouth, glowlight danio. Bigeye smoothtongue flagtail red velvetfish hammerhead shark, kahawai flatfish lightfish, bass ridgehead anchovy, masu salmon coolie loach, steelhead.",
     Title2: "App Development",
     Description2: "Alishu Infotech Pvt. Ltd. is an amazing Application Development Company in Delhi, India that has a vast experience in creating high performing, digitally transformative and feature-packed Web Application, Mobile applications for different Web &amp; Mobile platforms including iPhone app development and Android app development.",
     Title3: "Digital Marketing",
     Description3: "We are one of the best Digital Marketing Company in Delhi and can take care of all your Digital Marketing Needs. SEO, PPC, SMM, Video Marketing, Email-Marketing, Content Marketing, Lead Generation. We can improve rankings of your website in Google. We will find best keywords for your website to get you tons of organic traffic."
    };
  }
  render() {
    return (
      
      <div className="container">
        <div className="row">
        <h1 style={{ textAlign: "center"}}>*OUR SERVICES*</h1>
        <br/>
        <br/>
          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card">
            <img src="img/webdevelopment/1.png" className="d-block w-100" alt="cart 1" />
              <div className="card-body">
                <h5 className="card-title">{this.state.Title}</h5>
                <p className="card-text">{this.state.Description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
            <img src="Website-Deve.png" className="d-block w-100" alt="cart 2" />
              <div className="card-body">
                <h5 className="card-title">{this.state.Title1}</h5>
                <p className="card-text">{this.state.Description1}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
            <img src="Digital Marketing.png" className="d-block w-100" alt="cart 3" />
              <div className="card-body">
                <h5 className="card-title">{this.state.Title2}</h5>
                <p className="card-text">{this.state.Description2}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
            <img src="App Dev.jpg" className="d-block w-100" alt="cart 3" />
              <div className="card-body">
                <h5 className="card-title">{this.state.Title3}</h5>
                <p className="card-text">{this.state.Description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div class="row">
      <div class="column">
        <img src="img/slider/bg1.jpg" alt="Image 1"/>
      </div>
      <div class="column">
      <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur neque eaque ea quo, eius nulla nesciunt cupiditate illo tempora error omnis cum odit. Aperiam, recusandae dolores sequi neque veniam assumenda?</p>
      <h1>Our Mission</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur neque eaque ea quo, eius nulla nesciunt cupiditate illo tempora error omnis cum odit. Aperiam, recusandae dolores sequi neque veniam assumenda?</p>
      <h1>Our Vision</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur neque eaque ea quo, eius nulla nesciunt cupiditate illo tempora error omnis cum odit. Aperiam, recusandae dolores sequi neque veniam assumenda?</p>
      
      </div>
    </div>
      </div>
    );
  }
}
