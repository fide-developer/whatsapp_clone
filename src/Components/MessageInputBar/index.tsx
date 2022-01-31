import { MdInsertEmoticon, MdGif, MdAttachFile, MdMic } from "react-icons/md"
import { BsSticky } from "react-icons/bs"
import CustomInput from "../CustomInput"
import { AttachmentCustom, MessageInputBarContainer } from "./styledComp"

const MessageInputBar : React.FC = () => {

    return(
        <MessageInputBarContainer>
            <MdInsertEmoticon size="auto" className="active"/>
            <MdGif size="auto"/>
            <BsSticky size="auto"/>
            <AttachmentCustom>
                <MdAttachFile size="auto"/>
            </AttachmentCustom>
            <CustomInput />
            <MdMic size="auto"/>
        </MessageInputBarContainer>
    )
}

export default MessageInputBar