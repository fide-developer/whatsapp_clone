import styled from "styled-components";
import { FlexHorizontalContainer } from "../../../../GlobalUses/GlobalStyles";


export const CategoryTabContainer = styled(FlexHorizontalContainer)`
    position: relative;
    height: 6em;
    width: 100%;
    align-items: center;
    background: black;
    flex-grow:0;
    font-size: 12px;
`

export const TabItem = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    width: 11em;
`

export const ActiveTabHighlight = styled.span`
    position: absolute;
    bottom: 2px;
    top: auto;
    left: 0;
    right: auto;
    height: 4px;
    background-color:green;
    width: 11em;
`

export const LoadingAnimation = styled.span`

`