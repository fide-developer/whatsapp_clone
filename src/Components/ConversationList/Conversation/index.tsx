import RoundImage from "../../RoundImage"
import { ConversationDetailRow, ConversationContainer, ConversationDetail, Text, LastSeen, IconGroup } from "./StyledCom"
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

const Conversation: React.FC<{data: any, onSelected?:any, selected: any}> = ({data, onSelected, selected}) => {

    const handleTooltipMenu = () => {
        console.log("yeah man it's clicked on :"+data.id)
    }

    if(selected === data.id){
        handleTooltipMenu()
    }
    return(
        <ConversationContainer onClick={() => onSelected(data.id)}>
            <RoundImage type={data.type} imgURL="https://randomuser.me/api/portraits/med/men/75.jpg"/>
            <ConversationDetail>
                {/* this flex horizontal container is for conversation detail header */}
                <ConversationDetailRow>
                    <Text isTitle={true}>
                        {data.name}
                    </Text>
                    <LastSeen>
                        {data.messages[0].timestamp}
                    </LastSeen>
                </ConversationDetailRow>
                {/* this flex horizontal container is for conversation detail description / information */}
                <ConversationDetailRow>
                    <Text>
                        online terus ya terus ya terus ya terusinlah
                    </Text>
                    <IconGroup>
                        <MdOutlineKeyboardArrowDown size="auto" className="showedOnHover" onClick={()=> console.log("keklik kok kak")}/>
                    </IconGroup>
                </ConversationDetailRow>
            </ConversationDetail>
        </ConversationContainer>
    )
}

export default Conversation