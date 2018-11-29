import React, { Component } from 'react';

//引入样式
import { HeaderContainer , Navbar } from './styleComponents'
import {withRouter} from 'react-router-dom'

class Header extends Component {
    render () {
        return (
            <HeaderContainer >
                {/* 传入参数判断是否出现返回 */}
                <Navbar 
                    onClick = {() => this.props.history.push('/home')}
                {...this.props}>
                    <div>
                        <i className ="fa fa-angle-left "></i>
                    </div>
                </Navbar>
                <h1>猫眼电影</h1>
            </HeaderContainer>
        )
    }
}

export default withRouter(Header)