import styled from 'styled-components'


export const HomeContainerListStyle = styled.div`
        margin-top: 0px;
        background-color: #f5f5f5;
`

export const HomeContainerItemStyle = styled.div`
        position :relative;
       padding-left: .4rem;
        background-color: #fff;
        height: 3.04rem;
        .avatar{
            width: 1.706667rem;
            height: 2.4rem;
            position: relative;
            margin-top: .32rem;
            float: left;
            .default-img-bg{
                background-color: #e1e1e1;
                background-size: 100% 100%;
                img{
                    background-color: transparent;
                    height:2.4rem;
                }
            }
        }
        .content-wrapper{
            padding: .32rem .373333rem .32rem 0;
            margin-left: 1.973333rem;
            height: 2.933333rem;
            max-height: 2.933333rem;
            position: relative;
            .content{
                padding-right: 5px;
                margin-right: 1.28rem;
                overflow: hidden;
                .movie-title{
                    max-height: .64rem;
                    margin-bottom: 7px;
                    line-height: .64rem;
                    overflow: hidden;
                    .title{
                        font-size: .453333rem;
                        color: #333;
                        font-weight: 700;
                        padding-right: 5px;
                        flex-shrink: 1;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                }
                .detail{
                    box-sizing: border-box;
                    line-height: 1;
                    overflow: hidden;
                    .score{
                        font-size: 13px;
                        color: #666;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        .score-suffix{
                            font-size: 13px;
                            color: #666;
                        }
                        .grade{
                            font-weight: 700;
                            color: #faaf00;
                            font-size: 15px;
                        }
                    }
                    .actor{
                        font-size: 13px;
                        color: #666;
                        margin-top: 6px;
                        line-height: .4rem;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    .show-info{
                        font-size: 13px;
                        color: #666;
                        margin-top: 6px;
                        line-height: .4rem;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                }
                
            }
        }
        .button-block{
            font-size: 12px;
            position: absolute;
            right: .373333rem;
            top: 0;
            bottom: 0;
            height: .72rem;
            margin :auto;
            .btn{
                width: 1.253333rem;
                height: .72rem;
                line-height: .746667rem;
                text-align: center;
                box-sizing: border-box;
                background-color: #f03d37;
                color: #fff;
                border-radius: 4px;
                white-space: nowrap;
                font-size: 12px;
                cursor: pointer;
                .fix{
                    width: 1.253333rem;
                    height: .72rem;
                    line-height: .746667rem;
                    text-align: center;
                    box-sizing: border-box;
                    background-color: #f03d37;
                    color: #fff;
                    border-radius: 4px;
                    white-space: nowrap;
                    font-size: 12px;
                    cursor: pointer;
                }
            }
        }
`   