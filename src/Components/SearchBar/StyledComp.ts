import styled from "styled-components";
import { StyledInput } from "../CustomInput/StyledCom";


export const SearchBarContainer = styled.div`
    position:relative;
    padding: 0.5em 1em;
    background: darkgray;
    ${StyledInput}{
        padding-left: 6em;
    }
`

export const SearchIcons = styled.div`
    position: absolute;
    left: 2.5em;
    top: 100;
    /* background-color: black; */
    color:black;
    right: auto;
    height: 2.4em;
    padding: inherit;
    padding-left: 0;
`