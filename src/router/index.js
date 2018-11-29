import React, { Component } from 'react';
//引入路由组件
import { Route, Switch,Redirect } from "react-router-dom";

//引入组件
import HomeContainer from '@/pages/main/home/homeContainer.js'
import Cinema from '@/pages/main/cinema/cinemaContainer.js'
import Mine from '@/pages/main/mine/mineContainer.js'
import Login from '@/pages/main/login/loginContainer.js'
import Detail from '@/pages/main/detail/detaiContainer.js'

//引入二级
// import HotPlay from '@/pages/main/home/homeNestContainer/hotPlay'
// import WillPlayu from '@/pages/main/home/homeNestContainer/willPlay'
class Router extends Component {

    render () {
        return (
            <div>
                {/* 配置路由 */}
                <Switch>
                <Redirect exact from = "/" to="/home" component={HomeContainer}/>
                <Route exact  path="/home" component={HomeContainer} />
                <Route exact path="/cinema" component={Cinema} />
                <Route exact path="/mine" component={Mine} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/detail:id" component={Detail} />
                {/* <Redirect exact from = "/home" to="/home/hotplay" component={HotPlay}/>
                        <Route exact  path="/home/houtpaly" component={HotPlay} />
                        <Route exact path="/cinema/willpay" component={WillPlayu} /> */}
                </Switch>
            </div>
        )
    }

}

export default Router