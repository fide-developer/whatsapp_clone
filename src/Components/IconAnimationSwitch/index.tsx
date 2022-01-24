import React, { useEffect, useState } from "react"
import { IconType } from "react-icons"
import { IconContainer, MainIcon, SecondIcon } from "./styledComp"

const IconAnimationSwitch : React.FC<{mainIcon: IconType, secondIcon: IconType, focused: boolean}> = 
({mainIcon, secondIcon,focused}) => {

    return(
        <IconContainer isSecondAppear={focused}>
            <MainIcon>
                {React.createElement(mainIcon, {size:"100%"})}
            </MainIcon>
            <SecondIcon>
                {React.createElement(secondIcon, {size:"100%"})}
            </SecondIcon>
        </IconContainer>
    )
}

export default IconAnimationSwitch