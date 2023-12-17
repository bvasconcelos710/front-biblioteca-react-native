import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  margin-top: 20px;
  padding: 20px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #5DB075;
  height: 150px;
`;

export const Logo = styled.Image`
  width: 60px;
`;

export const TitleContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const LogoutButton = styled.TouchableOpacity`
  justify-content: center;
`;

export const LogoutButtonText = styled.Text`
  font-size: 20px;
  color: #FFFFFF;
  text-decoration: none
`;