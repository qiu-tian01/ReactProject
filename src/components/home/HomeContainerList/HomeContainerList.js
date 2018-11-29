import React, { Component } from "react";




//引入样式
import {
  HomeContainerListStyle,
  HomeContainerItemStyle
} from "./styleComponents";

import HomeContainerItem from './HomeContentItem'

//大的列表
class HomeContainerList extends Component {
    render() {
      return (
        <HomeContainerListStyle>
          <HomeContainerItem />
        </HomeContainerListStyle>
      );
    }
  }
  
  export default HomeContainerList;

