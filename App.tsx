import { useFonts } from 'expo-font';
import { ThemeProvider } from '@shopify/restyle';
import theme, { appPalette } from './theme';
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "./screens";

export default function App() {

  const [fontsLoaded] = useFonts({
    // Lato Fonts
    'LatoBold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
    'LatoRegular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const AppStack = createNativeStackNavigator();
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor={appPalette.appBackground} />

      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Home" component={Home} />
        </AppStack.Navigator>
      </NavigationContainer>

    </ThemeProvider >
  );
}