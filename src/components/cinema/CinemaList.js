import React, { Component } from "react";

//引入样式
import { CinemaListStyle ,CinemaItemStyle } from "./styleComponent";

//单个影院
class CinemaItem extends Component {
    render () {
        return (
            <CinemaItemStyle>
                <div className = "title-block">
                    <div className ="title">
                        <span className = "cinema-name">中影国际影城(昌平永旺店)</span>
                        <span className = "price-block">
                            <span className = "price">39.9</span>
                            <span className = "qi">元起</span>
                        </span>
                    </div>
                    <div className = "location-block">
                        <p className = "adress">昌平区北清路1号永旺国际商城3楼</p>
                        <p className = "distance">4.2km</p>
                    </div>
                    <div className = "label-block">
                        <div className = "snack">小吃</div>
                        <div className = "vipTag">折扣卡</div>
                    </div>
                    <div className = "discount-block">
                        <div>
                            <div className = "discount-label-text">开卡特惠，首单2张立减8元</div>
                        </div>
                    </div>
                </div>

            </CinemaItemStyle>
        )
    }
}

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