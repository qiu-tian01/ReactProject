import styled from 'styled-components'

export const LoginSelectAccountStyle = styled.div`
    form{
        transform-origin: 0px 0px 0px;
        opacity: 1;
        transform: scale(1, 1);
        .login-list{
            margin: 0;
            border-top: 0;
            background-color: #fff;
            .visibale{
                margin: 0;
                overflow: hidden;
                font-size: inherit;
                font-weight: 400;
                position: relative;
                line-height: 1;
                color: #333;
                display: block;
                dl{
                    padding-left: 0;
                    padding: .64rem .533333rem;
                    margin: 0;
                    border-bottom: 1px solid #d6d6d6;
                    overflow: hidden;
                    font-size: inherit;
                    font-weight: 400;
                    position: relative;
                    line-height: 1;
                    color: #333;
                    #username,#password{
                        outline:medium;
                        display: block;
                        width: 100%;
                        border: 0;
                        height: .8rem;
                        margin: -0.4rem 0;
                        text-indent: .266667rem;
                        line-height: 1;
                        font-size: .426667rem;
                        padding: 0;
                    }
                }
            }
        }
    }
`

//选择手机登录
export const LoginSelectPhoneStyle = styled.div`
    #quick-login-form{
        transform-origin: 0px 0px 0px;
        opacity: 1;
        transform: scale(1, 1);
        .login-phone-list{
            margin: 0;
            border-top: 0;
            background-color: #fff;
            .visibale{
                margin: 0;
                overflow: hidden;
                font-size: inherit;
                font-weight: 400;
                position: relative;
                .visibale-ipt{
                    margin: 0;
                    margin-bottom: -1px;
                    padding-left: 0.266667rem;
                    border: 0;
                    .phone{
                        display: flex;
                        padding-left: 0;
                        padding: 0.186667rem 0.426667rem;
                        margin: 0;
                        border-bottom: 1px solid #d6d6d6;
                        overflow: hidden;
                        font-size: inherit;
                        font-weight: 400;
                        position: relative;
                        .input-weak{
                            outline: medium;
                            width: 75%;
                            display: block;
                            font-size: inherit;
                            font-weight: 400;
                            border: 0;
                            height: 0.8rem;
                            margin: 0;
                            text-indent: 0.16rem;
                            line-height: 1;
                            font-size: 0.426667rem;
                            border-radius: 0.106667rem;
                            padding: 0;
                            padding-left: 0.266667rem;
                        }
                        .smsCode{
                            display: block;
                            width: 2.133333rem;
                            height: 0.933333rem;
                            line-height: 0.933333rem;
                            float: right;
                            background-color: #dcdcdc;
                            color: #999;
                            border: 0;
                            text-align: center;
                        }
                        .btnweak {
                            border: 0.02rem solid #df2d2d;
                            background: 0;
                            color: #df2d2d;
                        }
                    }
                    .account {
                        padding-left: 0;
                        padding: 0.64rem 0.533333rem;
                        margin: 0;
                        border-bottom: 1px solid #d6d6d6;
                        overflow: hidden;
                        font-size: inherit;
                        font-weight: 400;
                        position: relative;
                        line-height: 1;
                        color: #333;
                        #password {
                            outline: medium;
                            display: block;
                            width: 100%;
                            border: 0;
                            height: 0.8rem;
                            margin: -0.4rem 0;
                            text-indent: 0.266667rem;
                            line-height: 1;
                            font-size: 0.426667rem;
                            padding: 0;
                        }
                    }
                }
            }
        }
    }
`