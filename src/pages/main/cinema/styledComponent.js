import styled from 'styled-components'




export const CinemaSearchStyle  = styled.div`
    border-bottom: 1px solid #e6e6e6;
    height: 1.173333rem;
    .topbar-bg{
        background: #f5f5f5;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 1.173333rem;
        -webkit-box-pack: justify;
        justify-content: space-between;
        .city-entry{
            padding-left: 15px;
            font-size: 15px;
            color: #666;
            display: -webkit-box;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            .city-name{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 1.866667rem;
                max-width: 19.2vw;
            }
        }
        .search-input{
            -webkit-box-flex: 1;
            flex-grow: 1;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            height: .746667rem;
            font-size: .346667rem;
            color: #b2b2b2;
            margin-left: .48rem;
            border: .5px solid #e6e6e6;
            border-radius: 5px;
            margin-right: .4rem;
            background-color: #fff;
        }
        span{
            display: -webkit-box;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            height: .746667rem;
            font-size: .346667rem;
            color: #b2b2b2;
            margin-left: .48rem;
            border: .5px solid #e6e6e6;
            border-radius: 5px;
            margin-right: 15px;
        }
    }
`