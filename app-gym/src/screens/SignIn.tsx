import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import {useForm, Controller} from 'react-hook-form'
import LogoSvg from "@assets/logo.svg";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@hooks/useAuth";
import { AppError } from "@utils/AppError";

type FormData = {
  email: string;
  password: string;
}

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const  { control, handleSubmit, formState: {errors } } = useForm<FormData>();
  const { singIn } = useAuth();
 

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  async function handleSignIn({ email, password }: FormData){
    try {
      await singIn(email, password);  
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Nao foi possível entrar. Tente novamente mais tarde'

    }
    
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
            Acesse sua conta
          </Heading>
          
          <Controller 
          control={control}
          name='email'
          rules={{required: "Informe o e-mail"}}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
              autoCapitalize="none"
              />
            )}
          />
          
          <Controller 
          control={control}
          name='password'
          rules={{required: "Informe a Senha"}}
          render={({ field: { onChange, value } }) => (
            <Input 
            secureTextEntry 
            placeholder="Senha"
            onChangeText={onChange}
            errorMessage={errors.password?.message} 
            />
          )}
          />

          <Button 
          title="Acessar" 
          onPress={handleSubmit(handleSignIn)}
          />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontFamily="body" fontSize="sm" mb={3}>
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar Conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
