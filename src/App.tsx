import React, { useEffect, useReducer } from 'react';
import ChatBox from './Components/Messages'
import SideBar from './Components/SideBar'
import {FlexHorzContainer, FlexVertContainer, MainContent, MyApps} from './GlobalUses/GlobalStyles'
import CustomHeader from './Components/CustomHeader';
import { ConversationDetail, Text } from './Components/ConversationList/Conversation/StyledCom';
import RoundImage from './Components/RoundImage';

function App() {
  return (
    <MyApps>
      <SideBar />
      {/* <FlexVertContainer> */}
      <MainContent orientation='vertikal'>
        <CustomHeader>
          <RoundImage type="groupProfile" imgURL="https://randomuser.me/api/portraits/med/men/75.jpg"/>
          <ConversationDetail>
                {/* this flex horizontal container is for conversation detail header */}
                <FlexHorzContainer>
                    <Text isTitle={true}>
                        Fufu
                    </Text>
                </FlexHorzContainer>
                {/* this flex horizontal container is for conversation detail description / information */}
                <FlexHorzContainer>
                    <Text>
                        online
                    </Text>
                </FlexHorzContainer>
            </ConversationDetail>
        </CustomHeader>
        <ChatBox />
      </MainContent>
      {/* </FlexVertContainer> */}
    </MyApps>
  );
}

export default App;
