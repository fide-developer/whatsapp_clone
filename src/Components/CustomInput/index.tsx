import { useEffect, useState } from "react"
import { StyledInput } from "./StyledCom"
import {MdSearch} from "react-icons/md"

const CustomInput: React.FC<{type ?: string}> = ({type}) => {
    const [types,setTypes] = useState<string>()
    

    useEffect(()=>{
        if(type) setTypes(type)
        else setTypes("text")
    }, [])

    return(
        <StyledInput type={types}/>
    )
}

export default CustomInput