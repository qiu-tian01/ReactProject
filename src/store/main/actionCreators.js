//调用类型
import * as types from './actionTypes'

//调用axios
import axios from 'axios'

export default {
    //异步获取数据
    getLsitAsync () {
        return {
            type : types.GET_LIST_ASYNC,
            payload : axios.get('/my/ajax/movieOnInfoList?token=')
        }

    },
    getCinemaAsync () {
        return {
            type : types.GET_CINEMA_ASYNC,
            payload : axios.get('/my/ajax/cinemaList?day=2018-11-28&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1543393961746&cityId=1')
        }
    },
    a () {
        return {type: 'aaaaa'}
    }

}