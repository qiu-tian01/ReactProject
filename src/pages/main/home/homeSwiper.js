import React, { Component } from 'react';
import axios from 'axios'


class HomeSwiper extends Component {
    render () {
        axios.get('/my/ajax/movieOnInfoList?token=YmjD7vac69fDkAgmVfLn_0uYepYAAAAAbAcAABHxA7jbkklymzIJdJmk2bBhVsrnN1t5HSftImsV8Bb-XKaIRCLKyvoWKfdvXzJ8fg')
                    .catch(function (err) {
                        console.log('error')
                    })
        return (
            <div className = "home-swiper">
                
            </div>
        )
    }
}

export default HomeSwiper