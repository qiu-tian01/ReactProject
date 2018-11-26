import styled from 'styled-components'

export const CinemaListStyle = styled.div`
    height: 16.613333rem;
    .page-wrap{
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: auto;
        .cinema-list{
            margin-bottom: 1.466667rem;
            margin-top: 0;
            .list-wrap{
                margin-top: 0px;
                min-height: 16.72rem;
                background-color: #fff;
            }
        }
    }
`

export const CinemaItemStyle = styled.div`
    padding: .346667rem .4rem .346667rem 0;
    margin-left: .4rem;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    border : 1px solid #f3f3f3;
    .title-block{
        -webkit-box-align: center;
        align-items: center;
        line-height: 1.5;
        .title{
            height: .613333rem;
            line-height: .613333rem;
            font-size: .426667rem;
            color: #000;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            .cinema-name{
                height: .613333rem;
                line-height: .613333rem;
                font-size: .426667rem;
                color: #000;
            }
            .price-block{
                padding-top: 9px;
                padding-left: 3px;
                line-height: 1.5;
                font-size: 16px;
                color: #000;
                .price{
                    font-size: 18px;
                    color: #f03d37;
                    line-height: 1.5;
                }
                .qi{
                    margin-left: 3px;
                    font-size: 11px;
                    color: #f03d37;
                }
                
            }
        }
        .location-block{
            margin-top: 6px;
            font-size: 13px;
            color: #666;
            line-height: 1.5;
            display: flex;
            .adress{
                -webkit-box-flex: 1;
                flex: 1;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .distance{
                margin-left: 5px;
                margin-top: 6px;
                font-size: 13px;
                color: #666;
                line-height: 1.5;

            }
        }
        .label-block{
            height: .453333rem;
            line-height:.453333rem;
            margin-top: 4px;
            margin-bottom: 4px;
            overflow: hidden;
            font-size: 0;
            flex-shrink: 0;
            .snack{
                color: #f90;
                border: 1px solid #f90;
                position: relative;
                display: inline-block;
                padding: 0 3px;
                height: .4rem;
                line-height: .4rem;
                border-radius: 2px;
                font-size: 12px
            }
            .vipTag{
                margin-left: 5px;
                color: #f90;
                border: 1px solid #f90;
                position: relative;
                display: inline-block;
                padding: 0 3px;
                height: .4rem;
                line-height: .4rem;
                border-radius: 2px;
                font-size: 12px
            }
        }
        .discount-block{
            color: #999;
            margin-bottom: 4px;
            .discount-label-text{
                margin-left: 0;
                font-size: 11px;
                display: inline-block;
                color: #999;
                font-size : 12px;
            }
        }
    }
`