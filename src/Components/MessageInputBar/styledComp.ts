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
        height: 100%;
        cursor: pointer;
    }
`

export const AttachmentCustom = styled.div`
    display:flex;
    align-items: center;
    justify-items:center;
    height: 100%;
    overflow: hidden;
    svg{
        transform: scaleX(-1) rotate(-45deg);
    }
`