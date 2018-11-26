import React, { Component } from 'react';

//引入样式
import { LoginSelectPhoneStyle } from './styleComponents'


class LoginSelectPhone extends Component {
    render () {
        return (
           <LoginSelectPhoneStyle>
               <form id="quick-login-form">
                    <div className = "login-phone-list">
                        <div className = "visibale">
                            <div className = "visibale-ipt">
                                <div className = "phone">
                                    <input class="input-weak" placeholder="请输入手机号"  type="text"/>
                                    <i class="smsCode ">发送验证码</i>
                                </div>
                                <div class="account" >
                                    <input id="password"  type="text" value="" placeholder="请输入短信验证码" required/>
                                </div>
                            </div>
                        </div>
                    </div>
               </form>

           </LoginSelectPhoneStyle>
        )
    }
}

export default LoginSelectPhone