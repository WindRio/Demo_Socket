// import { View } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import Router from "./src/navigation/index";
import store from "@/store";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <StatusBar hidden />
        <Router />
      </Provider>
    </PaperProvider>
  );
}
