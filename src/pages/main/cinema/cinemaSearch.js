import React, { Component } from "react";

//引入样式
import { CinemaSearchStyle } from "./styledComponent";

class CinemaSearch extends Component {
  render() {
    return (
      <CinemaSearchStyle>
        <div className="topbar-bg">
          <div className="city-entry">
            <span className="city-name">北京</span>
            <i className="fa fa-caret-down" />
          </div>
          <div className = "search-input">
              <i className = "fa fa-search"></i>
              <span>搜影院</span>
          </div>
        </div>
      </CinemaSearchStyle>
    );
  }
}
 
export default CinemaSearch;

 
