import { useEffect, useRef, useState } from "react"
import { ActiveTabHighlight, CategoryTabContainer, TabItem } from "./styledComp"


const CategoryTab: React.FC = () => {
    const [tabList, setTabList] = useState<[]>([])
    const [activeTabHighlightPosition, setActiveTabHighlightPosition] = useState(0)
    const categoryRef = useRef<HTMLDivElement | null>(null)

    const testing = (e : any) => {
        let offsetLeft = e.target.offsetLeft
        let offsetTab = 0
        if(categoryRef.current)
        offsetTab = categoryRef.current?.offsetLeft

        setActiveTabHighlightPosition(offsetLeft-offsetTab)
    }
    
    useEffect(() => {
        

    }, [categoryRef])
    return(
        <CategoryTabContainer ref={categoryRef}>
            <TabItem onClick={(e) => testing(e)}>TRENDING<ActiveTabHighlight position={activeTabHighlightPosition} /></TabItem>            
            <TabItem onClick={(e) => testing(e)}>{activeTabHighlightPosition}</TabItem>
        </CategoryTabContainer>
    )
}

export default CategoryTab