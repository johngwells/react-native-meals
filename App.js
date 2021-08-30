import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import { theme } from "./src/infrastructure/theme/index";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/Authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB5pYj8w9aSYUvtlufmgywfeeq5SdiHBl8",
  authDomain: "mealdash-d0c0f.firebaseapp.com",
  projectId: "mealdash-d0c0f",
  storageBucket: "mealdash-d0c0f.appspot.com",
  messagingSenderId: "499207936985",
  appId: "1:499207936985:web:d3a52dd826a6edc54e57c8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
