import { useState } from "react"
import MessageItem from "./MessageItem"
import { StyledChatBox } from "./StyledCom"


const Messages: React.FC = () => {
    const [chatList, setChatList] = useState<{}>({})
    
    return(
        <StyledChatBox>
            <MessageItem />
        </StyledChatBox>
    )
}

export default Messages