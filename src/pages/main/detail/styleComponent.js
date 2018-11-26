import styled from 'styled-components'

export const DetailContainStyle = styled.div`
    position:relative;
    .movie-detail{
        height: 5.013333rem;
        position: relative;
        cursor: pointer;
        .movie-filter{
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            background-color: #333;
        }
        .poster-bg{
            background-image : url(http://p0.meituan.net/148.208/movie/3e7696319c840d4890e947b926259d532809641.jpg);
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
            position: absolute;
            -webkit-filter: blur(.266667rem);
            filter: blur(.266667rem);
            background-size: cover;
            background-repeat: no-repeat;
            opacity: .55;
        }
        .detail{
            height: 5.013333rem;
            padding: .506667rem .8rem .506667rem .4rem;
            display: flex;
            .poster{
                width: 2.933333rem;
                height: 4rem;
                box-sizing: border-box;
                display: block;
            }
            .contents{
                overflow-x: hidden;
                margin-left: .333333rem;
                line-height: 1;
                color: #fff;
                -webkit-box-flex: 1;
                flex: 1;
                .title{
                    font-size: .533333rem;
                    margin-top: 2px;
                    font-weight: 700;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .title-en-name{
                    margin-top: 10px;
                    font-size: 12px;
                    color: #fff;
                    opacity: .8;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .score{
                    font-size: 18px;
                    font-weight: 700;
                    color: #fc0;
                    margin-top: 11px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    span{
                        margin-top: 10px;
                        font-size: 12px;
                        color: #fff;
                        opacity: .8;
                        font-weight: 700;
                    }
                }
                .type,.src,.pubDesc{
                    margin-top: 10px;
                    font-size: 12px;
                    color: #fff;
                    opacity: .8;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    span{
                        vertical-align: top;    
                    }

                }
                
            }
        }
    }
    .btn-right{
        position: absolute;
        width: .266667rem;
        right: .4rem;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        font-size: .746667rem;
        font-weight: 600;
        color: #f3f3f3;
    }
`