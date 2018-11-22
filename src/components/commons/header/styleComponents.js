import styled from 'styled-components'

export const HeaderContainer = styled.header`

        
        height: 1.333333rem;
        color: #fff;
        background: #e54847;
        border-bottom: 1px solid #e54847;
        position: relative;
        h1{
                
                margin-right: 0!important;
                display: block;
                font-size: 18px;
                font-weight: 400;
                text-align: center;
                line-height: 1.333333rem;
                margin: 0 1.4rem 0 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
        }

`
export const Navbar = styled.div`
    ${ props => props.type === 'unblock' ? `display : none `: '' }
    float: left;    
    height: 1.333333rem;
    line-height: 1.333333rem;
    div{
        height: 1.333333rem;
        width: .6rem;
        line-height: 1.333333rem;
        i{
                width: 3%;
                height: 1.333333rem;
                width: .6rem;
                line-height: 1.333333rem;
                padding: 0 .4rem;
                font-size: .8rem;
                font-weight: 500;
        }
    }
`