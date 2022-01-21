import styled from 'styled-components'
import Sizes from './StyledVariable/size'


export const MainContent = styled.div<{orientation: string}>`
    display: flex;
    flex-flow: ${props => props.orientation === "vertikal" ? "column" : "row"};
    flex-grow:1;
    /* width:70%; */
    min-width: ${Sizes.minWidth.horizontalContainer};
`

export const FlexGrow = styled.div`
    flex-grow:1;
`

export const FlexVerticalContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    /* width:100%; */
`

export const FlexHorizontalContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
`

export const MyApps = styled(FlexHorizontalContainer)`
    width: 100%;
    height: 100vh;
    min-height: 558px;
    *{
        /* width: 100%; */
        box-sizing: border-box;
        //ini nanti font familynya tp belum nyari
    }
    /* max-height: 100%;
    overflow-y: hidden; */
`