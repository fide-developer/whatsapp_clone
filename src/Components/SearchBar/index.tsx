import CustomInput from "../CustomInput"
import { SearchBarContainer, SearchIcons } from "./StyledComp"
import {MdSearch, MdArrowBack} from "react-icons/md"
import IconAnimationSwitch from "../IconAnimationSwitch"
import { useCallback, useEffect, useState } from "react"


const SearchBar: React.FC = () => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const switchIcons = useCallback((statesFocus)=>{
        setIsFocused(statesFocus)
    }, [isFocused])

    return(
        <SearchBarContainer focused={isFocused}>
            <SearchIcons>
                <IconAnimationSwitch mainIcon={MdSearch} secondIcon={MdArrowBack} focused={isFocused}/>
                    {/* <MdSearch size="100%"/> */}
            </SearchIcons>
            <CustomInput onFocus={switchIcons}>
            </CustomInput>
        </SearchBarContainer>
    )
}

export default SearchBar
