import { useEffect, useRef } from "react"
import { EmoticonContainer, EmoticonList } from "./styledComponent"

const Emojis : React.FC = () => {
    const emojiList = require("./emoji.json")
    let groupEmoji = emojiList.reduce((acc:any, obj:any)=>{
        const property = obj["group"]
        acc[property] = acc[property] || []
        acc[property].push(obj)
        return acc
    },{})

    console.log(groupEmoji)

    return(
        <EmoticonContainer>	
            <EmoticonList>
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            <div>&#128512;</div> 	
            </EmoticonList>
        </EmoticonContainer>
    )
}

export default Emojis