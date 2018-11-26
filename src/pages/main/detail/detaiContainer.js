import React, { Component } from 'react';

//引入样式
import { DetailContainStyle } from './styleComponent'

//引入头部
import Header from '@Common/header'
//引入影院
import CinemaList from '@Cpt/cinema/CinemaList'


class DetailConatiner extends Component {
    render () {
        return (
            <div>
            <Header/>
            <DetailContainStyle>
                <div className = "movie-detail">
                    <div className = "movie-filter"></div>
                    <div className = "poster-bg"></div>
                    <div className = "detail">
                        <div className = "poster">
                            <img src ="http://p0.meituan.net/148.208/movie/3e7696319c840d4890e947b926259d532809641.jpg"/>
                        </div>
                        <div className = "contents">
                            <div className = "title" >无名之辈</div>
                            <div className = "title-en-name">A Cool Fish</div>
                            <div className = "score">
                                9.2
                                <span className = "snum">(14.9万人评)</span>
                            </div>
                            <div className = "type">
                                <span>剧情,喜剧,犯罪</span>
                            </div>
                            <div className = "src">中国大陆/108分钟</div>
                            <div className = "pubDesc">2018-11-16大陆上映</div>
                        </div>
                    </div>
                </div>
                <div class="btn-right fa fa-angle-right"></div>
            </DetailContainStyle>
            <CinemaList/>
            </div>
        )
    }
}

export default DetailConatiner