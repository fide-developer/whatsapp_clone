import { useEffect, useRef, useState } from "react"
import MessagesIcons from "../../MessageInputBar/EmojiSelector/Emojis"
import { BubbleContainer, BubbleLeft, BubbleRight, MessageTimeStamp } from "./StyledCom"


const MessageItem: React.FC = () => {
    const timeStampRef = useRef<HTMLDivElement | null>(null)
    const textRef = useRef<HTMLSpanElement | null>(null)
    const [timeStampStyle, setTimeStampStyle] = useState<Boolean>(false)

    useEffect(()=>{
        let timeStampPosition: Number = timeStampRef?.current?.offsetLeft ? timeStampRef?.current?.offsetLeft : 0
        let textPosition: Number = textRef?.current?.offsetLeft ? textRef?.current?.offsetLeft : 0
        if(timeStampPosition<=textPosition){
            setTimeStampStyle(true)
            console.log(timeStampStyle)
        }
    },[timeStampRef,textRef])

    return(
        <BubbleContainer isFromMe={false}>
            <BubbleLeft className="first"><p>Hi I'm Jonas, nice to meet ya! asd asd asd asd asd asd asd asd asd asd asdasdas asdadasasd asdasdasdas asd asd asdasdasd asdasdasd asdasdasda asdasdasd asd asd asd asd asd asd asd asd asd asd asdasdaasdasdasd  asdasd asdasd asdasdasd asdasd asd <span ref={textRef}> </span></p><MessageTimeStamp ref={timeStampRef} className={timeStampStyle? "break" : ""}>yesterday</MessageTimeStamp></BubbleLeft>
            <BubbleRight className="first"><p>Hi I'm Jonas, nice to meet ya! asd asd asd asd asd asd asd asd asd asd asdasdas asdadasasd asdasdasdas asd asd asdasdasd asdasdasd asdasdasda asdasdasd asd asd asd asd asd asd asd asd asd asd asdasdaasdasdasd  asdasd asdasd asdasdasd asdasd asd <span ref={textRef}> </span></p><MessageTimeStamp ref={timeStampRef} className={timeStampStyle? "break" : ""}>yesterday</MessageTimeStamp></BubbleRight>
            <MessagesIcons />
        </BubbleContainer>
    )
}

export default MessageItem