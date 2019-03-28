import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { Layout, Header, Navigation, Drawer , Content} from 'react-mdl';
class App extends Component {
  
  
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header title="Troy Point" scroll>
              <Navigation>
                  <a href="#">Gallery</a>
                  <a href="#">Collection</a>
                  <a href="#">AboutUs</a>
                  <a href="#">Contact Us</a>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="#">Gallery</a>
                  <a href="#">Collection</a>
                  <a href="#">AboutUs</a>
                  <a href="#">Contact Us</a>
              </Navigation>
          </Drawer> 
          <Content> 
              <div className="page-content" />
          </Content>
      </Layout>
  </div>  
    
     );
  }
}

export default App;
