import React, { useEffect, useReducer } from 'react';
import ChatBox from './Components/Messages'
import SideBar from './Components/SideBar'
import {FlexHorizontalContainer, MainContent, MyApps} from './GlobalUses/GlobalStyles'
import CustomHeader from './Components/CustomHeader';
import { ConversationDetail, Text } from './Components/ConversationList/Conversation/StyledCom';
import RoundImage from './Components/RoundImage';

const App = () => {
  return (
    <MyApps>
      <SideBar />
      {/* <FlexVertContainer> */}
      <MainContent orientation='vertikal'>
        <CustomHeader>
          <RoundImage type="groupProfile" imgURL="https://randomuser.me/api/portraits/med/men/75.jpg"/>
          <ConversationDetail>
                {/* this flex horizontal container is for conversation detail header */}
                <FlexHorizontalContainer>
                    <Text isTitle={true}>
                        Fufu
                    </Text>
                </FlexHorizontalContainer>
                {/* this flex horizontal container is for conversation detail description / information */}
                <FlexHorizontalContainer>
                    <Text>
                        online
                    </Text>
                </FlexHorizontalContainer>
            </ConversationDetail>
        </CustomHeader>
        <ChatBox />
      </MainContent>
      {/* </FlexVertContainer> */}
    </MyApps>
  );
}

export default App;
