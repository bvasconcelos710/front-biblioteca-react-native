import React from 'react';
import { BookContainer, BookTitle, BookInfo, ButtonContainer, BorrowButton, BorrowButtonText, } from './style'

/* import { BookData } from './types'; // Se você tiver um arquivo de tipos

interface BookProps {
  book: BookData; // Alterar a propriedade para receber um objeto do tipo BookData
  onBorrow: (bookId: number) => void; // Função para realizar o empréstimo
}
*/

interface BookProps {
    book: {
        id: number;
        title: string;
        ISBN: string;
        author: string;
        year: string;
    }
    onBorrow: (bookId: number) => void;
}

export function Book({ book, onBorrow: borrow }: BookProps) {
    const { id, title, ISBN, author, year } = book;
    return (
        <BookContainer>
            <BookTitle>{title}</BookTitle>
            <BookInfo>ISBN: {ISBN}</BookInfo>
            <BookInfo>Autor: {author}</BookInfo>
            <BookInfo>Ano: {year}</BookInfo>
            <ButtonContainer>
                <BorrowButton onPress={() => borrow(id)}>
                    <BorrowButtonText>Emprestar</BorrowButtonText>
                </BorrowButton>
            </ButtonContainer>
        </BookContainer>
    );
};

export default Book;