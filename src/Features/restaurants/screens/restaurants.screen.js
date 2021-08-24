import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
