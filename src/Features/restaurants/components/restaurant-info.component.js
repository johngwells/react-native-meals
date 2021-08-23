import React from "react";
import { Text } from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Space Burgers",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "123 Space St",
    isOpenNow = true,
    rating = 4,
    isClosed = false,
  } = restaurant;

  return (
    <Card>
      <Card.Content key={name}>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
      <Card.Cover
        source={{
          uri: photos[0],
        }}
      />
      <Card.Content>
        <Paragraph>OPEN - Order now</Paragraph>
        <Paragraph>rating: {rating}</Paragraph>
      </Card.Content>
    </Card>
  );
};
