import React, { Component } from 'react';


//引入路由
import Router from '@/router'
import HomeContainer from '@/pages/main/home/homeContainer'
import Footer from '@Common/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
            {/* <HomeContainer />*/}
            <Router />
            {/* <Footer />  */}
      </div>
    );
  }
}

export default App;
 