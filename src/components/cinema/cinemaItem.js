import React, { Component } from "react";

import {connect} from 'murlin-connect'
//引入样式
import { CinemaListStyle ,CinemaItemStyle } from "./styleComponent";

//单个影院
class CinemaItem extends Component {

    componentDidMount () {
        // console.log(this.props.main_actions.getCinemaAsync)
        this.props.main_actions.getCinemaAsync()

    }
    renderCinema () {
        let { cinema } = this.props.main
        if (!cinema) return ''
        return cinema.map(val => (
            <CinemaItemStyle key = {val.id}> 
                <div className = "title-block">
                    <div className ="title">
                        <span className = "cinema-name">{val.nm}</span>
                        <span className = "price-block">
                            <span className = "price">{val.sellPrice}</span>
                            <span className = "qi">元起</span>
                        </span>
                    </div>
                    <div className = "location-block">
                        <p className = "adress">{val.addr}</p>
                        <p className = "distance">{val.distance}</p>
                    </div>
                    <div className = "label-block">
                        <div className = "snack">小吃</div>
                        <div className = "vipTag">{ val.tag.vipTag ?val.tag.vipTag : '无折扣'}</div>
                    </div>
                    <div className = "discount-block">
                        <div>
                            <div className = "discount-label-text">开卡特惠，首单2张立减8元</div>
                        </div>
                    </div>
                </div>

            </CinemaItemStyle>
        ))

    }

    render () {
        return (
            <div>{this.renderCinema () }</div>
            
        )
    }
}

export default connect(CinemaItem,[{
    name : 'main',
    states : ['cinema']

}])