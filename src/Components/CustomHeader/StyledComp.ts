import styled from "styled-components";
import { FlexHorizontalContainer } from "../../GlobalUses/GlobalStyles";
import Colors from "../../GlobalUses/Constant/color";


export const ToolbarContainer = styled(FlexHorizontalContainer).attrs({as:"header"})`
    background-color: #EDEDED;
    width: 100%;
    height: 4em;
    min-height: 4em;
    padding: 0 1em;
    align-items:center;
    overflow: hidden;
    /* border: 2px solid black; */
    border-bottom: 1px solid ${Colors.border.navbar};
`

export const StyledToolbarMenu = styled(FlexHorizontalContainer)`
    flex-shrink: 0;

`