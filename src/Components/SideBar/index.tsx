import { SidebarContainer } from "./StyledCom"
import Notifications from "../NotificationPanel"
import MessageList from "../ConversationList"
import CustomHeader from "../CustomHeader"
import SearchBar from "../SearchBar"
import RoundImage from "../RoundImage"
import { FlexGrow } from "../../GlobalUses/GlobalStyles"


const SideBar: React.FC = () => {

    return(
        <>
            <SidebarContainer>
                <CustomHeader>
                    <RoundImage type="groupProfile" imgURL="https://randomuser.me/api/portraits/med/men/75.jpg"/>
                    <FlexGrow />
                </CustomHeader>
                <Notifications />
                <SearchBar />
                <MessageList />
            </SidebarContainer>
        </>
    )
}

export default SideBar