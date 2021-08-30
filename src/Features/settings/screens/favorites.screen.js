import React, { useContext } from "react";

import styled from "styled-components/native";
import { Text, FlatList, TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ActivityIndicator, Colors } from "react-native-paper";

import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { isLoading } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  return favorites.length ? (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  ) : (
    <NoFavoritesArea>
      <Text>No Favorites Saved yet</Text>
    </NoFavoritesArea>
  );
};
