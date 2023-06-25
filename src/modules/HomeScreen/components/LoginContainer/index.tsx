import React, {useRef} from 'react';
import {InputTextEmail} from '../../../../components/Inputs/Text/Email';
import {InputTextPassword} from '../../../../components/Inputs/Text/Password';
import {RootContainer} from '../../../../theme/styles';
import {useForm, Controller} from 'react-hook-form';
import {InputText} from '../../../../components/Inputs/Text';
import {TextInput} from 'react-native';
import {SizedBox} from '../../../../components/SizedBox';
import {useTheme} from 'styled-components/native';

const LOGIN_FORM_KEY = {
  EMAIL: 'email',
  PASSWORD: 'password',
} as const;

export const LoginContainer: React.FC = () => {
  const theme = useTheme();
  const {control} = useForm();

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  return (
    <RootContainer
      borderRadius={4}
      bgColor="primary"
      justifyContent="center"
      paddingAll="xs">
      <Controller
        control={control}
        name={LOGIN_FORM_KEY.EMAIL}
        render={({field: {onChange, value}}) => (
          <InputText.Email
            ref={emailRef}
            label="Usuário"
            placeholder="usuario@gmail.com"
            value={value}
            onChangeText={onChange}
            returnKeyType="next"
            onSubmitEditing={passwordRef.current?.focus}
          />
        )}
      />
      <SizedBox height={theme?.margin.xs} />
      <Controller
        control={control}
        name={LOGIN_FORM_KEY.PASSWORD}
        render={({field: {onChange, value}}) => (
          <InputText.Password
            ref={emailRef}
            label="Senha"
            placeholder="*******"
            value={value}
            onChangeText={onChange}
            returnKeyType="send"
            onSubmitEditing={passwordRef.current?.focus}
          />
        )}
      />
    </RootContainer>
  );
};
