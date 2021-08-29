import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  ImageContainer,
  ImageBG,
  image,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "./components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <ImageContainer>
      <ImageBG source={image}>
        <Title>Meal Dash</Title>
        <AccountCover />
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
