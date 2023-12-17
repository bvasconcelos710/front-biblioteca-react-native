import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'; // Importe o componente Header
import Book from '../../components/Book'; // Importe o componente Book

import { BookList, Container, Content } from './style'; // Importe os estilos

interface BookData {
    id: number;
    title: string;
    ISBN: string;
    author: string;
    year: string;
}

export const BooksScreen = () => {
    const [books, setBooks] = useState<BookData[]>([]);

    useEffect(() => {
        // Simulação de chamada à API para obter a lista de livros
        const fetchBooks = async () => {
            try {
                // Substitua esta chamada pela lógica real de chamada à API
                const response = await fetch('URL_DA_SUA_API');
                const data = await response.json(); // Supondo que a resposta seja um array de objetos de livros

                // Atualiza o estado com os dados obtidos da API
                setBooks(data);
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            }
        };

        fetchBooks();
    }, []);

    const handleBorrow = (bookId: number) => {
        // Lógica para realizar o empréstimo com o ID do livro selecionado
        // Por exemplo: realizar uma requisição à API para emprestar o livro com o bookId
        console.log(`Emprestando o livro com ID ${bookId}`);
    };

    return (
        <></>
        /*
        <Container>
            <Header />
            <Content>
                <BookList
                    data={books}
                    keyExtractor={(item: any) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Book book={item} onBorrow={handleBorrow} />
                    )}
                />
            </Content>
        </Container>
        */
    );
};
