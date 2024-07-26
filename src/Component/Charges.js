import React, { Component } from 'react';

export default class Charges extends Component {
 constructor(props)
 {
super(props)
 }
  render() {
    return (
      <div>
      <div className="row" style={{ marginLeft: '5px', marginRight: '5px',  marginTop: '10px'}}>
        <div className="card col-md-3" style={{ width: '18rem' }}>
          <img src="img/digital-marketing.gif" className="card-img-top" alt="Card 1" />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">Some quick example text for Card 1.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card col-md-3" style={{ width: '18rem' }}>
          <img src="img/e-commerce.gif" className="card-img-top" alt="Card 2" />
          <div className="card-body">
            <h5 className="card-title">Card title 2</h5>
            <p className="card-text">Some quick example text for Card 2.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card col-md-3" style={{ width: '18rem' }}>
          <img src="img/mobile_payment.gif" className="card-img-top" alt="Card 3" />
          <div className="card-body">
            <h5 className="card-title">Card title 3</h5>
            <p className="card-text">Some quick example text for Card 3.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div className="card col-md-3" style={{ width: '18rem' }}>
          <img src="img/Hotel-software.gif" className="card-img-top" alt="Card 4" />
          <div className="card-body">
            <h5 className="card-title">Card title 4</h5>
            <p className="card-text">Some quick example text for Card 4.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
