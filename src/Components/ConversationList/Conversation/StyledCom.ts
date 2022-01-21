import styled from "styled-components"
import { FlexHorzContainer, FlexVertContainer } from "../../../GlobalUses/GlobalStyles"
import { ImgHolder, ProfileDetail } from "../../RoundImage/StyledComp"

export const ConversationDetail = styled(FlexVertContainer)`
    justify-content: center;
    align-items: flex-start;
    flex-grow:1;
    overflow-x:hidden;
    height: 100%;
    margin-left: 1em;
    padding-right: 1em;
`

export const ConversationContainer = styled(FlexHorzContainer)`
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

export const ConversationDetailRow = styled(FlexHorzContainer)`
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

export const IconGroup = styled(FlexHorzContainer)`
    position:relative;
    height: 100%;
    flex-shrink: 0;
    height: 100%;
    border-radius: 0 0 0 50%;
    padding: 0 0.25em;

    svg{
        height:100%;
        width: auto;
    }

    .showedOnHover{
        display: none;
    }
`
// export const ChatOwnerContainer = styled(FlexVertContainer) `
//     border-bottom: 2.5px solid #F2F2F2;
//     /* padding: 10em 0; */
//     display:flex;
//     flex-direction: row;
//     justify-content: center;
//     height:100%;
//     /* margin: 0 1em; */
//     flex-grow: 1;

//     div{
//         align-items: center;
//         display: flex;
//     }
// `

// export const Header = styled(FlexHorzContainer)`
//     height: 30px;
// `
// export const ChatListFont = styled.span`
//     flex-grow:1;
// `

// export const ChatName = styled(ChatListFont)`
//     font-weight: 600;
// `

// export const LastMessages = styled.div`

// `

// export const TimeLastMessages = styled.div`
//     font-size: 11pt;
// `