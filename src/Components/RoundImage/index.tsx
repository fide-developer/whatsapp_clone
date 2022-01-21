import { useEffect, useRef, useState } from "react"
import { ImgHolder } from "./StyledComp"


const RoundImage: React.FC<{imgURL: string, type: string}> = ({imgURL,type}) => {
    const imageRef = useRef<HTMLImageElement>(new Image())
    const [placeholder,setPlaceholder] = useState<string>("./imagePlaceholder__light.png")

    useEffect(()=>{
        switch(type){
            case "userProfile":
                setPlaceholder("./imagePlaceholder__light.png")
                break
            case "groupProfile":
                setPlaceholder("./groupImagePlaceholder__light.png")
                break
        }
    },[type])

    useEffect(()=>{
        if(imageRef.current.src){
            let imageFile = new Image()
            imageFile.onload = () => {
                imageRef.current.src = imageFile.src
            }
            imageFile.src = imgURL        
        }
    },[imageRef,imgURL])

    


    return(
        <ImgHolder>
            <img ref={imageRef} src={require(`${placeholder}`)} alt="pic"></img>
        </ImgHolder>
    )
}

export default RoundImage