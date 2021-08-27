import React from "react";
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

const MyText = styled.Text`
  margin-top: 10px;
  text-align: center;
`;

export const MapCallout = ({ restaurant }) => {
  console.log(restaurant);
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
