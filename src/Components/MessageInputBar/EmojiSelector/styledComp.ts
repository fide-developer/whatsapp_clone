import styled from "styled-components";
import { FlexVerticalContainer } from "../../../GlobalUses/GlobalStyles";


export const StyledEmoticonContiner = styled(FlexVerticalContainer)`
    height: 20em;
    max-height: 40em;
    width: 100%;
    background-color: white;
    `

export const EmojiContentContainer = styled(FlexVerticalContainer)`
    flex-grow: 1;
    width: inherit;
    overflow-y: auto;
`