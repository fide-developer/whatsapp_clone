import styled from "styled-components";
import { FlexHorzContainer } from "../../GlobalUses/GlobalStyles";
import Colors from "../../GlobalUses/StyledVariable/color";


export const ToolbarContainer = styled(FlexHorzContainer).attrs({as:"header"})`
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

export const StyledToolbarMenu = styled(FlexHorzContainer)`
    flex-shrink: 0;

`