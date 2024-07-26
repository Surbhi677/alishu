import React, { Component } from 'react';
import './Service.css';

class Services extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Web Development",
      Description: "Support and streamline your operations with software. Riffle dace three-toothed puffer albacore dragon goby, brook trout koi. Emperor driftfish streamer fish ribbon sawtail fish Atlantic eel, <b>bristlemouth, glowlight danio.</b> Bigeye smoothtongue flagtail red velvetfish hammerhead shark, kahawai flatfish lightfish, bass ridgehead anchovy, masu salmon coolie loach, steelhead.",
    };
  }

  render() {
    return (
      <div>
      
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-year">2022</div>
                    <h3 className="title">{this.state.title}</h3>
                    <p className="description">
                      {this.state.Description}
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-year">2021</div>
                    <h3 className="title">Web Development</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo Integer malesuada tellus lorem, et condimentum neque commodo
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-year">2022</div>
                    <h3 className="title">Web Designing</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo Integer malesuada tellus lorem, et condimentum neque commodo
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-year">2021</div>
                    <h3 className="title">Web Development</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo Integer malesuada tellus lorem, et condimentum neque commodo
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Services;
