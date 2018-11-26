import styled from 'styled-components'

export const SearchContainer  = styled.div`
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    height: 1.173333rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`
export const SearchCity = styled.div`
    
    padding-left: .4rem;
    font-size: .4rem;
    color: #666;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    span{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 1.866667rem;
        max-width: 19.2vw;
    }
    i{
        margin-right: 5px;
        width: 0;
        height: 0;
        border: 4px solid #b0b0b0;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        display: inline-block;
        margin-left: 4px;
        margin-top: 5px;
    }
`

export const SearchSwitch = styled.div`
         display: flex;
        height: 1.173333rem;
        line-height: 1.173333rem;
        position: relative;
        div{
            font-size: 0.4rem;
            width: 21.33333vw;
            text-align: center;
            margin: 0 0.32rem;
            font-weight: 700;
        }
        .active{
            color: #ef4238;
            border-bottom: 2px solid #ef4238;
            }
    
`

export const SearchEntry = styled.div`
        width: 1.066667rem;
        height: 1.066667rem;
        padding: 0.133333rem 0.4rem 0.266667rem 0.266667rem;
        margin-right: 0.266667rem;
        font-size: .64rem;
        font-weight: 200;
        color: #ef4238;
`