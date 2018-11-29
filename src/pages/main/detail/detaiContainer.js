import React, { Component } from 'react';

//引入样式
import { DetailContainStyle } from './styleComponent'

//引入头部
import Header from '@Common/header'
//引入影院
import CinemaList from '@Cpt/cinema/CinemaList'

import axios from "axios";


class DetailConatiner extends Component {

    constructor (props) {
        super(props)
        this.state  = {
            movieDetail : {}
        }
        this.datasource = {}
    }

    componentWillMount () {
        return axios.get('/my/ajax/detailmovie?movieId='+this.props.match.params.id)
                .then( res =>{
                    //console.log(res.data.detailMovie)
                    let {detailMovie} = res.data
                    
                    this.setState({
                        movieDetail : detailMovie
                    })
                } )
    }

    renderDetailIfm () {
        let movieDetail = this.state.movieDetail
        let detailImg = movieDetail.img
        if(detailImg)  detailImg = detailImg.replace('/w\.h/','/128.180/');
        console.log(detailImg)
        return (
            <DetailContainStyle bg = { movieDetail.albumImg }>
                <div className = "movie-detail">
                    <div className = "movie-filter"></div>
                    <div className = "poster-bg" style = {{background: "url("+movieDetail.albumImg+")"}}></div>
                    <div className = "detail">
                        <div className = "poster">
                            <img src ={detailImg}/>
                        </div>
                        <div className = "contents">
                            <div className = "title" >{movieDetail.nm}</div>
                            <div className = "title-en-name">{movieDetail.enm}</div>
                            <div className = "score">
                                {movieDetail.sc}
                                <span className = "snum">({ movieDetail.bingeWatch }人评)</span>
                            </div>
                            <div className = "type">
                                <span>{movieDetail.cat}</span>
                            </div>
                            <div className = "src">{movieDetail.src}/{movieDetail.dur}分钟</div>
                            <div className = "pubDesc">{movieDetail.pubDesc}</div>
                        </div>
                    </div>
                </div>
                <div className="btn-right fa fa-angle-right"></div>
            </DetailContainStyle>
        )
    }

    render () {
        return (
            <div>
            <Header/>
            {this.renderDetailIfm()}
            <CinemaList/>
            </div>
        )
    }
}

export default DetailConatiner