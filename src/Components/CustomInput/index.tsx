import React, { useEffect, useRef, useState } from "react"
import { StyledInput } from "./StyledCom"

const CustomInput: React.FC<{type ?: string, onFocus?: (statesFocus: any) => void, onChange?: () => void, value?: string }> = ({type, onFocus, onChange, value}) => {
    const [types,setTypes] = useState<string>()

    //checker! should remove when ready
    const [inputValue, setInputValue] = useState<string>("")

    const inputRef = useRef(null)

    //check if the first letter that user type isn't space
    const checkFirstLetter = (inputEvent : React.ChangeEvent<HTMLInputElement>) => {
        inputEvent.preventDefault()
        //get what's user input
        let inputString = inputEvent.target.value
        
        if(inputString.length <= 1){
            //removing whitespace on first letter
            if(inputString.indexOf(' ') >= 0) inputString = ""
        }

        setInputValue(inputString)
    }

    useEffect(()=>{
        if(type) setTypes(type)
        else setTypes("text")
    }, [])

    return(
        <StyledInput 
        value={inputValue} 
        ref={inputRef} 
        type={types} 
        onChange={(event)=> checkFirstLetter(event)}
        onFocus={()=> onFocus && onFocus(true)} 
        onBlur={()=> onFocus && onFocus(false)}/>
    )
}

export default CustomInput