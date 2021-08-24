import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/stars";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const Address = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => {
              return <SvgXml xml={star} width={20} height={20} />;
            })}
          </Rating>
          <SectionEnd>
            {isOpenNow && <Open xml={open} width={20} height={20} />}
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
