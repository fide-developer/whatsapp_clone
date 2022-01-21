import { useCallback, useEffect, useState } from "react"
import Conversation from "./Conversation"
import { ListMessage } from "./StyledCom"


const ConversationList: React.FC = () => {
    const [selectedMessage, setSelectedMessage] = useState()

    //to update message active state on the list
    const updateSelected = useCallback((message?:any)=>{
        setSelectedMessage(message)
        // console.log(message)
    }, [selectedMessage])

    //dummy data
    let dummyMessages = {
        data: [
            {
                id: "owner",
                name: "Fadjar Firdaus",
                phoneNumber: "081224580136",
                messages: [
                    {
                        idMessage: 'owner1',
                        text: "heyyo",
                        timestamp: "2022-01-20",
                    }
                ]
            },
            {
                id: "message1",
                name: "Random People",
                phoneNumber: "1283719283798",
                messages: [
                    {
                        idMessage: 'owner1',
                        text: "heyyo",
                        timestamp: "2022-01-20",
                    }
                ]
            }
        ]
    }

    return(
        <ListMessage>
            {dummyMessages.data.map((messageData)=> <Conversation key={messageData.id} data={messageData} selected={selectedMessage} onSelected={updateSelected} />)}
            {/* <MessageOwner selected={selectedMessage} onSelected={()=> updateSelected("Selected row 1")}/>
            <MessageOwner selected={selectedMessage} onSelected={()=> updateSelected("Selected row 2")}/> */}
        </ListMessage>
    )
}

export default ConversationList