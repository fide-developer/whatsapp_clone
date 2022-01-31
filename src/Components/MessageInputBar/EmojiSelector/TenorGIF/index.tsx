import { stringify } from "querystring";
import { Key, useEffect, useState } from "react"
import { tenorAPI_Key } from "../../../../GlobalUses/Constant/apiKey";
import ItemGIF from "./ItemGIF";
import { GifContainer } from "./styledComp";

const TenorGIF: React.FC = () => {
    const [listGIF, setListGIF] = useState<any>({data:[]})

    useEffect(()=>{
        let tenorURL = "https://g.tenor.com/v1/search?q='sport' &key=" +
        tenorAPI_Key + "&limit=10";
    
        fetch(tenorURL,{
            method: "GET"
        }).then((tenorRespond) => {
            let data = tenorRespond.json().then((data)=>{
                console.log(data.results[0].media[0].tinygif)
                setListGIF({data: data.results})
            })
        }).catch(errorReason => console.log(errorReason))
    },[])


    return(
        <GifContainer>
            {listGIF.data
                .map((gifs: { media: { tinygif: {url:string} }[]; }
                    ,index: Key | null | undefined) => 
                    <ItemGIF key={index} gifData={gifs.media[0]}></ItemGIF>)}
        </GifContainer>
    )
}

export default TenorGIF