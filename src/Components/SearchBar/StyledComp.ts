import styled from "styled-components";
import { StyledInput } from "../CustomInput/StyledCom";


export const SearchBarContainer = styled.div<{focused: boolean}>`
    position:relative;
    padding: 0.5em 1em;
    background: ${props => props.focused? "white" : "lightgrey"};
    border-bottom: lightseagreen solid 1px;
    box-shadow: ${props=> props.focused? "-1px 2px 10px -1px rgba(0,0,0,0.25)" : "none"};
    ${StyledInput}{
        padding-left: 5em;
    }
`

export const SearchIcons = styled.div`
    position: absolute;
    left: 2em;
    top: 100;
    /* background-color: black; */
    color:black;
    right: auto;
    height: 2.4em;
    padding: inherit;
    padding-left: 0;
`