import React, { Component } from 'react';

//引入组件
import HomeContainer from '@/pages/main/home/homeContainer.js'
import Cinema from '@/pages/main/cinema/cinemaContainer.js'
import Mine from '@/pages/main/mine/mineContainer.js'

//引入样式
import { FooterContainer , FooterOption } from './styleCompent'
import { ActiveNavLink, OwnLink, OwnNavLink, ACtiveOwnNavLink } from './activeIcon'
//引入路由
import { Link, Route, Switch,Redirect } from "react-router-dom";

class Footer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            tab : [
                {id : 1 ,name : '电影' , type : 'home' , class : 'iconfont icon-dianying',router : { name : 'home' } },
                {id : 2 ,name : '影院' , type : 'cinema', class : 'iconfont icon-yingyuana',router : { name : 'cinema' } },
                {id : 3 ,name : '影院' , type : 'mine', class : 'iconfont icon-mine',router : { name : 'mine' } },
            ]
        }
    }
    render () {    
        return (
            <div className ="footer ">
            <FooterContainer >
                < ACtiveOwnNavLink tag = "div" to= "/home">
                <FooterOption  className = "current" >
                    <i className = "iconfont icon-dianying"></i>
                    <span className = "nav-text">电影</span>  
                </FooterOption>
                </ACtiveOwnNavLink>
                < ACtiveOwnNavLink tag = "div" to= "/cinema">
                <FooterOption  >
                    <i className = "iconfont icon-yingyuana"></i>
                    <span className = "nav-text">影院</span>  
                </FooterOption>
                </ACtiveOwnNavLink>
                < ACtiveOwnNavLink tag = "div" to= "/mine">
                <FooterOption >
                    <i className = "iconfont icon-mine"></i>
                    <span className = "nav-text">我的</span>  
                </FooterOption>
                </ACtiveOwnNavLink>
                

            </FooterContainer>
            
            {/* <Switch>
                <Route path = "/" exact render = {() => {
                // 在这里可以做一些权限验证...
                return <Redirect to = "/home" />
            }} />
                <Route path = "/home" component = {HomeContainer}></Route>
                <Route path = "/cinema" component = {Cinema}></Route>
                <Route path = "/mine" component = {Mine}></Route>
            </Switch> */}
            </div>
        )
    }
} 

export default Footer