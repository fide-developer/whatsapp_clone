import { FlexVerticalContainer } from "../../../../GlobalUses/GlobalStyles"
import { EmoticonList, EmoticonTitleGroup } from "./styledComponent"


const EmojiGroup: React.FC<{dataEmoji: any}> = ({dataEmoji}) => {
    console.log(dataEmoji)
    return(
        <FlexVerticalContainer>
            <EmoticonTitleGroup>
                {dataEmoji.category}
            </EmoticonTitleGroup>
            <EmoticonList>
                {dataEmoji.emojis.map((emoji: any) => <div>{emoji.char}</div>)}
            </EmoticonList>
        </FlexVerticalContainer>
    )
}

export default EmojiGroup