import React, { Component } from "react";
import axios from "axios";

//引入样式
import {
  HomeContainerListStyle,
  HomeContainerItemStyle
} from "./styleComponents";

//电影信息
class HomeContainerItem extends Component {
  render() {
    return (
        <HomeContainerItemStyle >
            <div className = "avatar">
                <div className = "default-img-bg">
                    <img src ="https://p0.meituan.net/128.180/movie/600beaeaa9929649f38181d41f2c8578328129.jpg"/>
                </div>
            </div>
            <div className = "content-wrapper">
                <div className = "content">
                    <div className = "movie-title">
                        <p className = "title">无敌破坏王2：大闹互联网</p>
                    </div>
                    <div className ="detail">
                        <div className = "score">
                            <span className ="score-suffix">观众评 </span>
                            <span className = "grade">9.1</span>
                        </div>
                        <p className = "actor">
                            主演: 约翰·C·赖利,萨拉·西尔弗曼,克里斯汀·贝尔
                        </p>
                        <p className = "show-info">
                            今天202家影院放映2470场
                        </p>
                    </div>
                </div>
            </div>
            <div className = "button-block">
                <div className = "btn">
                    <span className = "fix">购票</span>
                </div>
            </div>
        </HomeContainerItemStyle>
    )
  }
}

//大的列表
class HomeContainerList extends Component {
  render() {
    axios.get("").catch(function(err) {
      console.log("error");
    });
    return (
      <HomeContainerListStyle>
        <HomeContainerItem />
      </HomeContainerListStyle>
    );
  }
}

export default HomeContainerList;
