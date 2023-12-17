import React from 'react';
import { BookContainer, BookTitle, BookInfo, ButtonContainer, BorrowButton, BorrowButtonText, } from './style'

/* import { BookData } from './types'; // Se você tiver um arquivo de tipos

interface BookProps {
  book: BookData; // Alterar a propriedade para receber um objeto do tipo BookData
  onBorrow: (bookId: number) => void; // Função para realizar o empréstimo
}
*/

interface BookProps {
    title: string;
    ISBN: string;
    author: string;
    year: string;
    onPress: () => void;
}

export function Book({ title, ISBN, author, year, onPress }: BookProps) {
    return (
        <BookContainer onPress={onPress}>
            <BookTitle>{title}</BookTitle>
            <BookInfo>ISBN: {ISBN}</BookInfo>
            <BookInfo>Autor: {author}</BookInfo>
            <BookInfo>Ano: {year}</BookInfo>
            <ButtonContainer>
                <BorrowButton onPress={onPress}>
                    <BorrowButtonText>Emprestar</BorrowButtonText>
                </BorrowButton>
            </ButtonContainer>
        </BookContainer>
    );
};

export default Book;