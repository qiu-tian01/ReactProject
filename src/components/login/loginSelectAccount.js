import React, { Component } from 'react';

//引入样式
import { LoginSelectAccountStyle } from './styleComponents'

class LoginSelectPhone extends Component {
    render () {
        return (
           <LoginSelectAccountStyle>
               <form action = "#">
                   <div className = "login-list">
                        <dd className = "visibale">
                            <dl className = "">
                                <input id = "username" type="text" value="" placeholder="账户名/手机号/Email" required/>
                            </dl>
                            <dl className = "">
                                <input id="password" type="password" value="" placeholder="请输入您的密码" required/>
                            </dl>
                        </dd>
                   </div>
    
               </form>

           </LoginSelectAccountStyle>
        )
    }
}

export default LoginSelectPhone