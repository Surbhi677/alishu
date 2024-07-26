import React, { Component } from 'react'
import './Newsletter.css';

export default class Newsletter extends Component {
  render() {
    return (
      <div>
      
      <div class="newsletter">
    <h2>Subscribe to our Newsletter</h2>
    <p>Stay up to date with our latest news and updates!</p>
    <form action="#" method="post">
      <input type="email" name="email" placeholder="Enter your email" required/>
      <button type="submit">Subscribe</button>
    </form>
  </div>

      </div>
    )
  }
}
