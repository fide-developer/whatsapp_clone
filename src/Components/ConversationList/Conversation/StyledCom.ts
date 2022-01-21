import styled from "styled-components"
import { FlexHorizontalContainer, FlexVerticalContainer } from "../../../GlobalUses/GlobalStyles"
import { ImgHolder } from "../../RoundImage/StyledComp"

export const ConversationDetail = styled(FlexVerticalContainer)`
    justify-content: center;
    align-items: flex-start;
    flex-grow:1;
    overflow-x:hidden;
    height: 100%;
    margin-left: 1em;
    padding-right: 1em;
`

export const ConversationContainer = styled(FlexHorizontalContainer)`
    height: 5em;
    width: 100%;
    cursor: pointer; 
    display:flex;
    align-items: center;
    padding-left: 1em;
    :hover{
        background: black;
        .showedOnHover{
            display:flex;
            width: 2em;
        }
    }
    background-color: #fff;

    ${ConversationDetail}{
        border-top: 1px solid black;
    }

    :first-child{
        ${ConversationDetail}{
            border-top: none;
        }    
    }

    ${ImgHolder}{
        margin-top: -0.5em;
    }
`

export const ConversationDetailRow = styled(FlexHorizontalContainer)`
    width: calc(100%);
    height: 1.5em;
`

export const Text = styled.div<{isTitle ?: boolean}>`
    flex-grow:1;
    padding: 0.2em 0;
    font-weight: ${props => props.isTitle ? "300" : "normal"};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const LastSeen = styled.div`
    font-size:10pt;
    color: #989898;
`

export const IconGroup = styled(FlexHorizontalContainer)`
    position:relative;
    height: 100%;
    flex-shrink: 0;
    height: 100%;
    border-radius: 0 0 0 50%;

    svg{
        height:100%;
        width: auto;
        padding: 0 0.25em;
    }
    .showedOnHover{
        transition: width 0.15s;
        width:0;
    }
`