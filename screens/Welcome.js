import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from './../components/styles';


const Welcome = ({navigation}) => {
  return (
    <>
      <StatusBar style="dark" />
      <InnerContainer>
        <WelcomeImage resizeMode="repeat" source={require('./../assets/img/mr1.jpg')}/>
        <WelcomeContainer Welcome={true}>            
        <PageTitle Welcome={true}>โรงพยาบาลแม่สะเรียงยินดีต้อนรับ</PageTitle>
        <SubTitle Welcome={true} >แอปหญิงตั้งครรภ์</SubTitle>
        <SubTitle Welcome={true} >pipat@gmail.com</SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/img/expo-bg1.png')} />
            <MsgBox>...</MsgBox>
            <Line />
            <StyledButton onPress={() => {navigation.navigate('Login')}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};


export default Welcome;
