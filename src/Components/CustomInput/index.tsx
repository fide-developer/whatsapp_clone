import { useEffect, useState } from "react"
import { StyledInput } from "./StyledCom"

const CustomInput: React.FC<{type ?: string, onFocus?: (statesFocus: any) => void }> = ({type, onFocus}) => {
    const [types,setTypes] = useState<string>()
    

    useEffect(()=>{
        if(type) setTypes(type)
        else setTypes("text")
    }, [])

    return(
        <StyledInput type={types} onFocus={()=> onFocus && onFocus(true)} 
        onBlur={()=> onFocus && onFocus(false)}/>
    )
}

export default CustomInput