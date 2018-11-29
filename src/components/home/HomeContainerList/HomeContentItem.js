import React, { Component } from "react";

import {
    HomeContainerListStyle,
    HomeContainerItemStyle
  } from "./styleComponents";

  import {connect} from 'murlin-connect'

  import {withRouter} from 'react-router-dom'

  //电影信息

class HomeContainerItem extends Component {
    componentDidMount () {
        this.props.main_actions.getLsitAsync()
    }
    renderContainerItem () {
        
        let  { list } = this.props.main
        console.log(this)
        if(!list) return ''
        
        return list.map(val => (

            <HomeContainerItemStyle 
            
            onClick = {() => this.props.history.push('/detail'+val.id)}
            
            key = { val.id }>
            <div className = "avatar">
                <div className = "default-img-bg">
                    <img src ={val.img.replace('/w\.h/','/128.180/')}/>
                </div>
            </div>
                <div className = "content-wrapper">
                <div className = "content">
                    <div className = "movie-title">
                        <p className = "title">{val.nm}</p>
                    </div>
                    <div className ="detail">
                        <div className = "score">
                            <span className ="score-suffix">观众评 </span>
                            <span className = "grade">{val.sc}</span>
                        </div>
                        <p className = "actor">
                            {val.star}
                        </p>
                        <p className = "show-info">
                            {val.showInfo}
                        </p>
                    </div>
                </div>
            </div>
            <div className = "button-block">
                <div className = "btn">
                    <span className = "fix">购票</span>
                </div>
            </div>
            </HomeContainerItemStyle>

        ))

    }
 
 render() {
     return (
            <div>
                {this.renderContainerItem ()}
            </div>
     )
   }
 }

 export default withRouter (connect(HomeContainerItem, [{
    name: 'main',
    states: ['list']
}]))