import React from "react";
import LottieView from "lottie-react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import {
  ImageContainer,
  ImageBG,
  image,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "./components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <ImageContainer>
      <ImageBG source={image}>
        <Spacer position="bottom" size="xlarge">
          <Title>Meal Dash</Title>
        </Spacer>
        <AccountCover />
        <AnimationWrapper>
          <LottieView
            key="animation"
            autoPlay
            loopresizeMode="cover"
            source={require("../../../../assets/watermelon.json")}
          />
        </AnimationWrapper>
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
          <Spacer size="large">
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </ImageBG>
    </ImageContainer>
  );
};
