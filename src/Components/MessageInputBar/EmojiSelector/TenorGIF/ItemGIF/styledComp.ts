import styled from "styled-components";
import { FlexHorizontalContainer } from "../../../../../GlobalUses/GlobalStyles";


export const GIFContainer = styled(FlexHorizontalContainer)<{widthRatio: any}>`
    max-height: 140px;
    max-width: 25%;
    flex-grow:1;
    height: 220px;
    width: calc(140px * ${props => props.widthRatio});
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 3px solid white;
    background: black;
    img{
        cursor: pointer;
        flex-grow:1;
        min-height:100%;
        height: auto;
        width: auto;
    }
`