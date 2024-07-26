import React, { Component } from 'react';
import Cart from './Cart';
import Newsletter from './Newsletter';
import Charges from './Charges';
import Slider from './Slider';


class Home extends Component {
  render() {
    return (
      <div>
        <Slider/>  
        <br/>
        <Cart/>
        <Newsletter/>
        <Charges title="Digital Marketing" desc="We are the best digital marketing agency" price="15000 per month" suppliment= "Free mentenance for life time" />
      </div>
  
    );
  }
}

export default Home;
