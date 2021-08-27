import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;
export const FavoritesBar = ({ favorites, onNavigate }) => (
  <FavoritesWrapper>
    <Spacer variant="left.large">
      <Text variant="caption">Favorites</Text>
    </Spacer>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favorites.map((restaurant) => {
        const key = restaurant.name.split(" ").join("");
        return (
          <TouchableOpacity
            onPress={() => onNavigate("RestaurantDetail", { restaurant })}
          >
            <Spacer key={key} position="left" size="medium">
              <CompactRestaurantInfo restaurant={restaurant} />
            </Spacer>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  </FavoritesWrapper>
);