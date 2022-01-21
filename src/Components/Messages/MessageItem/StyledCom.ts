import styled from "styled-components";
import { BubblePosition } from "./type";

export const BubbleContainer = styled.div<BubblePosition>`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: ${props => props.isFromMe ? "flex-end" : "flex-start"};
`

export const Bubble = styled.div`
    margin-top: 8px;
    &.first{
        margin-top: 16px;
    }

    display:flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: flex-end;

    padding: 0.6em 1em;
    position: relative;
    background-color: white;
    border-radius:0.5em;
    max-width: 65%;
    font-size: 11pt;
    line-height: 16pt;
    width: fit-content;
    height: fit-content;

    p{
        margin: 0;
        margin-right: 0.5em;
        height: fit-content;
    }
`    
export const BubbleLeft = styled(Bubble)`

    &.first::after{
        content: " ";
        position:absolute;
        width: 0;
        height: 0;
        left: -10px;
        right: auto;
        top: 0;
        bottom: auto;
        border: 11px solid;
        border-color: white transparent transparent transparent;
    }
`
export const BubbleRight = styled(Bubble)`
    background-color: #DCF8C6;

    &.first::after{
        content: " ";
        position: absolute;
        width: 0;
        height: 0;
        left: auto;
        right: -10px;
        top: 0;
        bottom: auto;
        border: 11px solid;
        border-color: #DCF8C6 transparent transparent transparent;
    }
` 
export const MessageTimeStamp = styled.div`
    height: fit-content;
    position: absolute;
    bottom: 0.5em;
    font-size:10pt;
    color: #989898;
    top: auto;
    right: 1em;
    left: auto;

    &.break{
        position:unset;
    }

`