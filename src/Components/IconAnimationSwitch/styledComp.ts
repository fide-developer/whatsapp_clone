import styled from "styled-components";

export const MainIcon = styled.span`
    height: inherit;
    width: auto;
    /* svg{ */
        transition: opacity .3s, transform .3s;
    /* } */
`

export const SecondIcon = styled(MainIcon)`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height:inherit;
    /* svg{ */
        transition: opacity .3s, transform .3s;
        transform: rotate(-180deg) scale(.5);
    /* } */
    svg{
        fill: #33B7F6;
    }
`
export const IconContainer = styled.div<{isSecondAppear: boolean}>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    ${MainIcon}{
        transform: ${props => props.isSecondAppear? "rotate(180deg) scale(.5)": "none"};
        opacity: ${props => props.isSecondAppear? "0": "1"};
    }

    ${SecondIcon}{
        transform: ${props => props.isSecondAppear? "rotate(0deg)" : "rotate(-180deg) scale(.5)"};
        opacity: ${props => props.isSecondAppear? "1" : "0"};
    }
`