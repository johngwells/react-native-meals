import React, { useState, useEffect, useContext, useRef } from "react";
import { Camera } from "expo-camera";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../../services/Authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(null);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        type={Camera.Constants.Type.front}
        ref={(camera) => (cameraRef.current = camera)}
      >
        <Text>Tap Screen</Text>
      </ProfileCamera>
    </TouchableOpacity>
  );
};
