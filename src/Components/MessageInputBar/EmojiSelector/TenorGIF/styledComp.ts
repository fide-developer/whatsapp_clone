import styled from "styled-components";
import { FlexHorizontalContainer } from "../../../../GlobalUses/GlobalStyles";

export const GifContainer = styled(FlexHorizontalContainer)`
    flex-wrap: wrap;
    width: inherit;
    align-items: space-between;
    justify-content: space-between
    img{
        flex-shrink: 0;
    }
`