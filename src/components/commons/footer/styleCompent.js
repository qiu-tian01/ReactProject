
import styled from 'styled-components'

export const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    border-top: .5px solid #d8d8d8;
    display: -webkit-box;
    display: flex;
    justify-content: space-around;
`

export const FooterOption = styled.div`
    flex: 1;
    width: 3.333333rem;
    height: 1.28rem;
    box-sizing: border-box;
    position: relative;
    text-align: center;
        i{
            display: block;
            width: .666667rem;
            height: .666667rem;
            margin: auto;
            font-size: .64rem;
            font-weight: 400;
        }
        .nav-text{
            
        }
    
`