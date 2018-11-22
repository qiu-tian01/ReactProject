import React, { Component } from 'react';


//引入头
import Header from '@Common/header'
//引入轮播图
import HomeSwiper from './homeSwiper'

class HomeContainer extends Component {
    render () {
        return (
            <div className ="home-container">
                    <Header type = "unblock"/>
                    <HomeSwiper />
                   HomeContainer 
            </div>
        )
    }
}

export default HomeContainer