import styled from "styled-components";
import { FlexHorizontalContainer } from "../../../../GlobalUses/GlobalStyles";


export const CategoryTabContainer = styled(FlexHorizontalContainer)`
    height: 48px;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid black;
    flex-grow:0;
    flex-shrink: 0;
    font-size: 12px;
`

export const TabItem = styled.div`
    display:flex;
    position: relative;
    align-items:center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    flex: 1;
`

export const ActiveTabHighlight = styled.div<{position: any}>`
    position: absolute;
    bottom: 2px;
    top: auto;
    left: ${props => `${props.position}px`};
    right: auto;
    height: 4px;
    background-color:green;
    width: 100%;
    transition: left ease 0.2s;
`

export const LoadingAnimation = styled.span`

`