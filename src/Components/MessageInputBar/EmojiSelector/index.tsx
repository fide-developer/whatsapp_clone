import CategoryTab from "./CategoryTab"
import Emojis from "./Emojis"
import { EmojiContentContainer, StyledEmoticonContiner } from "./styledComp"
import TenorGIF from "./TenorGIF"


const EmojiSelector : React.FC = () => {

    return(
        <StyledEmoticonContiner>
            <CategoryTab />
            <EmojiContentContainer>
                <Emojis />
                <TenorGIF/>
            </EmojiContentContainer>
        </StyledEmoticonContiner>
    )
}

export default EmojiSelector