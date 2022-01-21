
import { useEffect, useReducer } from "react"
import RoundImage from "../RoundImage"
import { StyledToolbarMenu, ToolbarContainer } from "./StyledComp"


const CustomHeader: React.FC = ({children}) => {

    return(
        <ToolbarContainer>
            {children}
            <StyledToolbarMenu>asdasdasd</StyledToolbarMenu>
        </ToolbarContainer>
    )
}

export default CustomHeader