import { useEffect, useState } from "react"
import { StyledInput } from "./StyledCom"
import {MdSearch} from "react-icons/md"

const CustomInput: React.FC<{type ?: string}> = ({type}) => {
    const [types,setTypes] = useState<string>()
    

    useEffect(()=>{
        type ? setTypes(type) : setTypes("text")
        
    }, [])

    return(
        <StyledInput />
    )
}

export default CustomInput