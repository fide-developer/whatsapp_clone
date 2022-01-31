import { useState } from "react"
import { ActiveTabHighlight, CategoryTabContainer, TabItem } from "./styledComp"


const CategoryTab: React.FC = () => {
    const [tabList, setTabList] = useState<[]>([])

    return(
        <CategoryTabContainer>
            <ActiveTabHighlight />
            <TabItem>TRENDING</TabItem>
        </CategoryTabContainer>
    )
}

export default CategoryTab