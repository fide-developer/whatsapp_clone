import { GIFContainer } from "./styledComp"


const ItemGIF: React.FC<{gifData : any}> = ({gifData}) => {
    let widthRatio = gifData.nanogif.dims[0] / gifData.nanogif.dims[1]

    return(
        <GIFContainer widthRatio={widthRatio}>
            <img src={gifData.nanogif.preview}></img>
        </GIFContainer>
    )
}

export default ItemGIF