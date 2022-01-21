import CustomInput from "../CustomInput"
import { SearchBarContainer, SearchIcons } from "./StyledComp"
import {MdSearch} from "react-icons/md"


const SearchBar: React.FC = () => {

    return(
        <SearchBarContainer>
            <SearchIcons>
                    <MdSearch size="100%"/>
            </SearchIcons>
            <CustomInput>
            </CustomInput>
        </SearchBarContainer>
    )
}

export default SearchBar