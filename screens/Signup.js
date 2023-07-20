import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from './../components/styles';
import { View, TouchableOpacity } from 'react-native';

//colors
const { brand, darkLight, primary } = Colors;

//Datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

const Signup = ({navigation}) => {
  const [hidePasswors, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  //Actual date of birth to be sent
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow('date');
  };

  return (
    <KeyboardAvoidingWrapper>
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>แอปหญิงตั้งครรภ์88</PageTitle>
        <SubTitle>Account Signup</SubTitle>

        {show && (
          <DateTimePicker testID="dateTimePicker" value={date} mode={date} is24Hour={true} onChange={onChange} />
        )}

        <Formik
          initialValues={{ fullname: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate('Welcome')
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="Pipat Laolue"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
                values={values.fullname}
              />

              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="andyj@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
              />

              <MyTextInput
                label="Date of Birth"
                placeholder="YYYY - MM - DD"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                icon="calendar"
                editable={false}
                isDate={true}
                showDatePicker={showDatePicker}
              />

              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                values={values.password}
                secureTextEntry={hidePasswors}
                isPassword={true}
                hidePasswors={hidePasswors}
                setHidePassword={setHidePassword}
              />

              <MyTextInput
                label="Comfirm Password"
                icon="lock"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('confirmpassword')}
                onBlur={handleBlur('confirmpassword')}
                values={values.password}
                secureTextEntry={hidePasswors}
                isPassword={true}
                hidePasswors={hidePasswors}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Signup</ButtonText>
              </StyledButton>
              <Line />

              <ExtraView>
                <ExtraText>Already have an account</ExtraText>
                <TextLink onPress={() => navigation.navigate('Login')}>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink >
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePasswors, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePasswors)}>
          <Ionicons name={hidePasswors ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
