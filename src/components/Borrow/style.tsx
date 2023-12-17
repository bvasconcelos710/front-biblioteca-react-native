import styled from 'styled-components/native';

export const BookContainer = styled.TouchableOpacity`
  width: 90%;
  margin: 10px auto;
  padding: 16px;
  border: 2px solid green;
  border-radius: 10px;
`;

export const BookTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const BookInfo = styled.Text`
  font-size: 16px;
  margin-bottom: 3px;
`;

export const BookAlert = styled.Text`
  background-color: red;
  padding: 5px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  margin-bottom: 3px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const BorrowButton = styled.TouchableOpacity`
  background-color: lightblue;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 5px;
`;

export const BorrowButtonText = styled.Text`
  font-size: 16px;
  color: #000;
`;
