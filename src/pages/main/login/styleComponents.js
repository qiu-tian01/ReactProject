import styled from 'styled-components'

//选择账号登录
export const LoginContainerStyle = styled.div`
    .list{
        margin: 0;
        border-top: 0;
        border-bottom: 1px solid #d6d6d6;
        background-color: #fff;
        .nav{
            border-bottom: 0;
            margin: 0;
            overflow: hidden;
            font-size: inherit;
            font-weight: 400;
            position: relative;
            .nav-list{
                list-style-type: none;
                display: -webkit-box;
                padding-left: 0.533333rem;
                padding-right: 0.533333rem;
                position: relative;
                border-bottom: 0.08rem solid #d6d6d6;
                text-align: center;
                .nav-list-li{
                    width: 50%;
                    list-style-type: none;
                    display: block;
                    text-align: center;
                    -webkit-box-flex: 1;
                    position: relative;
                    span{
                        text-decoration: none;
                        padding-top: 0.24rem;
                        padding-bottom: 0.266667rem;
                        display: block;
                        color: inherit;
                        height: 100%;
                        overflow-x: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        text-align: center;
                        font-size: 0.373333rem;
                    }
                }
            }
        }
    }
    .btn-wrapper{
        margin: .373333rem .266667rem;
        .btn-submit{
                height: 1.253333rem;
                line-height: 1.253333rem;
                font-size: .533333rem;
                width: 100%;
                margin: 0;
                text-align: center;
                padding: 0 .426667rem;
                border-radius: .08rem;
                color: #fff;
                border: 0;
                background-color: #df2d2d;
                box-sizing: border-box;
                cursor: pointer;
        }
    }
        .subline {
        margin: 0.373333rem 0.266667rem;
        padding: 0;
        list-style-type: none;
        .li-register,
        .li-retrieve {
        display: inline-block;
        .register,
        .retrieve {
            color: #df2d2d;
            text-decoration: none;
            outline: 0;
        }
        }
        .li-retrieve {
        float: right;
        }
    }
    .copyright {
        text-align: center;
        .copy-span {
        text-align: center;
        a {
            color: #df2d2d;
            text-decoration: none;
            outline: 0;
        }
        }
    }
`

