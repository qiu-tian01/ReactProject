import React, { Component } from 'react';

//引入样式

//引入heander
import Header from '@Common/header'
//引入footer
import Footer from '@Common/footer'

//引入搜素
import CinemaSearch from './cinemaSearch'
//引入影院列表
import CinemaList from '@Cpt/cinema/CinemaList'




class CinemaContenter extends Component {
    render () {
        return (
            <div>
                <Header type = "unblock"/>
                <CinemaSearch />
                <CinemaList/>
                <Footer />
            </div>
            
        )
    }
}

export default CinemaContenter