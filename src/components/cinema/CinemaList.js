import React, { Component } from "react";

//引入样式
import { CinemaListStyle ,CinemaItemStyle } from "./styleComponent";

import CinemaItem from './cinemaItem'


//大的列表
class CinemaList extends Component {
  render() {
    return (
        <CinemaListStyle>
            <div className = "page-wrap">
                <div className = "cinema-list">
                    <div className ="list-wrap">
                        <CinemaItem/>
                    </div>
                </div>
            </div>
        </CinemaListStyle>
    );
  }
}

export default CinemaList;