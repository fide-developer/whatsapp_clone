import styled from "styled-components";
import { FlexHorizontalContainer, FlexVerticalContainer } from "../../../../GlobalUses/GlobalStyles";

export const EmoticonContainer = styled(FlexVerticalContainer)`
    width: inherit;
    padding: 0 1em;
    flex-grow:1;
    background: yellow;
    
`
export const EmoticonTitle = styled.div`

`

export const EmoticonList = styled(FlexHorizontalContainer)`
    flex-wrap: wrap;
    background: white;

    div{
        margin: 0;
        padding: 0.1em 0.045em;
        flex-shrink: 0;
        font-size: 22pt;
        cursor: pointer;
        /* border: 1px solid black; */
    }
`