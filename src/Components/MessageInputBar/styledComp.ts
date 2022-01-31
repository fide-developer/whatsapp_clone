import styled from "styled-components";
import { FlexHorizontalContainer } from "../../GlobalUses/GlobalStyles";


export const MessageInputBarContainer = styled(FlexHorizontalContainer)`
    padding: 0.5em 1em;
    width:100%;
    background: lightgray;
    align-items: center;
    height: 4em;

    svg{
        padding:0.4em 0.8em;
        height: 80%;
        cursor: pointer;
        flex-shrink:0;
    }
`

export const AttachmentCustom = styled.div`
    display:flex;
    padding: 0 0.8em;
    align-items: center;
    justify-items:center;
    height: 100%;
    width:auto;
    overflow: hidden;
    svg{
        flex-shrink: 0;
        margin-left: -25%;
        transform: scaleX(-1) rotate(-45deg);
    }
`