import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Address = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Open = styled(SvgXml)`
  flex-direction: row;
`;
