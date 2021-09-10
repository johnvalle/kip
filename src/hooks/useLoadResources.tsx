import React from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  IBMPlexSans_400Regular,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";

export default function useLoadResources() {
  const [isReady, setIsReady] = React.useState(false);
  const [fontsLoaded] = useFonts({
    IBMPlexSans_400Regular,
    IBMPlexSans_600SemiBold,
    IBMPlexSans_700Bold,
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true);
      SplashScreen.hideAsync();
    }
    SplashScreen.preventAutoHideAsync();
  }, [fontsLoaded]);

  return isReady;
}
