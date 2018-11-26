import styled from 'styled-components'

export const MineContanerStyle = styled.div`
        min-height: 100%;
        display: -webkit-box;
        display: flex;
        flex-direction: column;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        .header{
            background-color: #f03d37;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100% 4rem;
            height: 4rem;
            overflow: hidden;
            text-align: center;
            .head-icon{
                display: inline-block;
                margin-top: .8rem;
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 1.6rem;
                border: 3px solid #fff;
            }
        }
        .container{
            -webkit-box-flex: 1;
            flex: 1;
            .group{
                margin-top: 10px;
                background: #fff;
                .mb-outline-tb{
                    background-size: 1px 1px;
                    .orders{
                        padding: 0 .4rem;
                        position: relative;
                        overflow: hidden;
                        text-align: center;
                        .title{
                            position: relative;
                            margin: .346667rem 0 0;
                            font-size: .4rem;
                            line-height: .56rem;
                            height:.56rem;
                            color: #333;
                            z-index: 9;
                            display: inline-block;
                            width: 2.133333rem;
                            background-color: #fff;
                        }
                        
                    }
                    .list{
                            overflow: hidden;
                            .order-item{
                                width: 50%;
                                background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png);
                                float: left;
                                height: 97px;
                                background-repeat: no-repeat;
                                background-position: top;
                                background-size: 42px auto;
                                margin-top: 18px;
                                .mip{
                                    display: block;
                                    height: 2.4rem;
                                    text-decoration: none;
                                    cursor: pointer;
                                    p{
                                        position: relative;
                                        top: 1.413333rem;
                                        text-align: center;
                                        font-size: .4rem;
                                        line-height: .56rem;
                                        height: .56rem;
                                        margin: 0;
                                        color: #333;
                                    }
                                }
                            }
                            .order-item-store{
                                width: 50%;
                                background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/store.png);
                                float: left;
                                height: 97px;
                                background-repeat: no-repeat;
                                background-position: top;
                                background-size: 42px auto;
                                margin-top: 18px;
                                .mip{
                                    display: block;
                                    height: 2.4rem;
                                    text-decoration: none;
                                    cursor: pointer;
                                    p{
                                        position: relative;
                                        top: 1.413333rem;
                                        text-align: center;
                                        font-size: .4rem;
                                        line-height: .56rem;
                                        height: .56rem;
                                        margin: 0;
                                        color: #333;
                                    }
                                }
                            }
                    }
                    .group-list{
                        margin-top: 10px;
                        background: #fff;
                        .mb-outline-tb{
                            ackground-size: 1px 1px;
                            .coupon{
                                position: relative;
                                height: 1.173333rem;
                                line-height: 1.173333rem;
                                font-size: .4rem;
                                margin-left: .4rem;
                                padding-right: .4rem;
                                .list-a{
                                    display: block;
                                    color: #333;
                                    text-decoration: none;
                                    cursor: pointer;
                                    span{
                                        text-align: left;
                                        color: #333;

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
` 