import React, { Component } from 'react';
import './App.css';
class Footer extends Component {
  render() {
    return (
      <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
            <div class="content">
              <h1>Story</h1>
              <p class="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
              <ul class="actions stacked">
                <li><a href="#first" class="button big wide smooth-scroll-middle">Get Started</a></li>
              </ul>
            </div>
            <div class="image">
              <img src="images/banner.jpg" alt="" />
            </div>
          </section>

    );
  }
}

export default Footer;
