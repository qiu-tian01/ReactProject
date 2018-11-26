import React, { Component } from 'react';

//引入样式
import { MineContanerStyle } from './styleComponent'

//引入heaader
import Header from '@Common/header'
//引入footer
import Footer from '@Common/footer'

class MineContenter extends Component {
    render () {
        return (
            <div>
                <Header type = "unblock"/>
                    <MineContanerStyle>
                        <div className = "header">
                            <img  className = "head-icon" src = "https://img.meituan.net/maoyanuser/80cdf9a184d40eb9ecc0e5d170f3e45d11928.png"/>
                        </div>
                        <div className = "container">
                            <div className = "group">
                                <div className = "mb-outline-tb">
                                    <div className = "orders">
                                        <p className = "title">我的订单</p>
                                    </div>
                                    <div className = "list">
                                        <div className = "order-item">
                                            <a className = "mip">
                                                <p>电影</p>
                                            </a>
                                        </div>
                                        <div className = "order-item-store">
                                            <a className = "mip">
                                                <p>商城</p>
                                            </a>
                                        </div>
                                    </div> 
                                    <div className = "group-list">
                                        <div className = "mb-outline-tb">
                                            <div className = "coupon">
                                                <a className = "list-a">
                                                    <span>在线电影</span>
                                                </a>
                                            </div>
                                            <div className = "coupon">
                                                <a className = "list-a">
                                                    <span>优惠券</span>
                                                </a>
                                            </div>
                                            <div className = "coupon">
                                                <a className = "list-a">
                                                    <span>折扣卡</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MineContanerStyle>
                <Footer/>
            </div>
            
        )
    }
}

export default MineContenter