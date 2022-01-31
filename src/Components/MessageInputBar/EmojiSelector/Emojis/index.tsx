import { useEffect, useRef } from "react"
import EmojiGroup from "./EmojiGroup"
import { EmoticonContainer, EmoticonList } from "./styledComponent"

const Emojis : React.FC = () => {
    const emojiList = require("./emoji.json")
    
    const listCategory = [...new Set(emojiList.map((emoji: any) => emoji.group))]
    const emojiGroup = listCategory.map((category: any) => {
        const filteredEmoji:any = emojiList.filter((emoji: any) => emoji.group == category)

        return {category, emojis: filteredEmoji}
    })

    return(
        <EmoticonContainer>	
            {emojiGroup.map(emojis => <EmojiGroup dataEmoji={emojis}></EmojiGroup>)}
        </EmoticonContainer>
    )
}

export default Emojis