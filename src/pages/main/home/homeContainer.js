import React, { Component } from 'react';

//引入路由配置
import { Route, Switch,Redirect,withRouter } from "react-router-dom";

//引入头
import Header from '@Common/header'
//引入搜索栏
import Search from '@Common/home/search'
//引入轮播图
import HomeSwiper from './homeSwiper'
//引入列表内容
import HomeContainerList from '@Cpt/home/HomeContainerList/HomeContainerList'

//引入底部
import Footer from '@Common/footer'



import { HomeContainerStyle } from './styledComponent'




class HomeContainer extends Component {

    

    render () {
        return (
            <div className ="home-container">
                    <Header type = "unblock"/>
                    <Search/>
                    <HomeSwiper />
                    <HomeContainerList/>
                   <Footer/>
                   {/* <Switch>
                        <Redirect from = "/home" exact to = "/home/hotplay"/>
                        <Route path = "/home/hotplay"  component = {HotPlay} />
                        <Route path = "/home/willpaly"  component = { WillPlayu } />
                    </Switch> */}
            </div>
            
        )
    }
}

export default withRouter(HomeContainer) 