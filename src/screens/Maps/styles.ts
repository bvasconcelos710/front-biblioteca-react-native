import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const MapContainer = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 30px;
`;

export const TextNextButton = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
`;
