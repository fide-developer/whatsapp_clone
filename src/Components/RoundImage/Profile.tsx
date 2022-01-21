import { ProfileContainer, ProfileDetail, ProfileDescRow, Text } from "./StyledComp"


const RoundImage: React.FC<{imgURL : string }> = ({imgURL}) => {

    return(
        <ProfileContainer>
            
            <ProfileDetail>
                <ProfileDescRow>
                    <Text>
                        
                    </Text>
                    <div>aa</div>
                </ProfileDescRow>
                <ProfileDescRow>
                    <Text>
                        
                    </Text>
                    <div>aa</div>
                </ProfileDescRow>
            </ProfileDetail>
        </ProfileContainer>
    )
}

export default RoundImage