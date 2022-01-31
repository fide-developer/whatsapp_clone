import styled from "styled-components"
import Sizes from "../../GlobalUses/Constant/size"
import { ImgHolder } from "../RoundImage/StyledComp"

export const SidebarContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 30vw;
    flex-shrink: 0;
    min-width: ${Sizes.minWidth.horizontalContainer};
    height: 100%;
    border-right: 2px solid black;
    background-color: #F8F9FA;


    ${ImgHolder}{
        height: 3em;
    }
` 