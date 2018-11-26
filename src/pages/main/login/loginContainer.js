import React, { Component } from 'react';

//引入头部
import Header from '@Common/header'

//引入选择登录 
import LoginSelectAccount from '@Cpt/login/loginSelectAccount'
import LoginSelectPhone from '@Cpt/login/loginSelectPhone'

//引入样式
import { LoginContainerStyle } from './styleComponents'

class LoginContainer extends Component {
    render () {
        return (
            <div className = "login-container">
                <Header />            
                <LoginContainerStyle>
                    <div className ="list">
                        <div className = "nav">
                            <div className = "nav-list">
                                <div className = "nav-list-li">
                                    <span href = "#">美团账号登录</span>
                                </div>
                                <div className = "nav-list-li">
                                    <span href = "#">手机验证登录</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LoginSelectPhone/>
                    <div className = 'btn-wrapper'>
                        <button class="btn-submit">登录</button>
                    </div>
                    <ul class=  "subline">
                        <li class="li-register">
                            <a href="#" class="register">立即注册</a>
                        </li>
                        <li class="li-retrieve">
                            <a href="#" class="retrieve">找回密码</a>
                        </li>
                    </ul>
                    <div class="copyright">
                        <span class="copy-span">
                            © 猫眼电影 客服电话：
                            <a href="">400-670-5335</a>
                        </span>
                    </div>
                </LoginContainerStyle>
            </div>
        )
    }
}

export default LoginContainer