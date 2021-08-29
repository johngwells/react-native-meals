import React from "react";
import { Text } from "react-native";
import { ImageContainer, ImageBG, image } from "./components/account.styles";

export const RegisterScreen = () => {
  return (
    <ImageContainer>
      <ImageBG source={image}>
        <Text>Register Screen</Text>
      </ImageBG>
    </ImageContainer>
  );
};
