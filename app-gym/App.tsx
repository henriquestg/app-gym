import { StatusBar, Platform } from "react-native";
import { KeyboardAvoidingView, NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { THEME } from "./src/theme";
import { Loading } from "@components/Loading";
import { Routes } from "./src/routes";
import { AuthContextsProvider } from "@contexts/AuthContexts";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        flex={1}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthContextsProvider>
          {fontsLoaded ? <Routes /> : <Loading />}
        </AuthContextsProvider>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
}
