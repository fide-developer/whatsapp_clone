import { MdInsertEmoticon, MdAttachFile, MdMic } from "react-icons/md"
import CustomInput from "../CustomInput"
import { AttachmentCustom, MessageInputBarContainer } from "./styledComp"

const MessageInputBar : React.FC = () => {

    return(
        <MessageInputBarContainer>
            <MdInsertEmoticon size="auto"/>
            <AttachmentCustom>
                <MdAttachFile size="auto"/>
            </AttachmentCustom>
            <CustomInput />
            <MdMic size="auto"/>
        </MessageInputBarContainer>
    )
}

export default MessageInputBar