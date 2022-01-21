import styled from "styled-components";
import { FlexHorzContainer, FlexVertContainer } from "../../GlobalUses/GlobalStyles";

export const ProfileContainer = styled(FlexHorzContainer)`
    height: 100%;
    overflow-x: hidden;
    flex-grow:1;
    align-items: center;
`

export const ImgHolder = styled.span`
border-radius: 50%;
height: 70%;
padding:0;
flex-shrink: 0;
overflow:hidden;
flex-grow:0;

img{
    height: 100%;
    margin: 0;
    padding:0;
}
`

export const ProfileDetail = styled(FlexVertContainer)`
    justify-content: center;
    align-items: flex-start;
    flex-grow:1;
    overflow-x:hidden;
    height: 100%;
    margin-left: 1em;
    padding-right: 1em;
`

export const ProfileDescRow = styled(FlexHorzContainer)`
    width: calc(100%);
    &>*{
        margin-left: 0.5em;
    }
    &>*:first-child{
        margin-left:0;
        flex-grow:1;
    }
`
export const Text = styled.div`
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
`