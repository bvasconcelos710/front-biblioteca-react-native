import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'; // Importe o componente Header
import Book from '../../components/Book'; // Importe o componente Book
import { useNavigation } from "@react-navigation/native";

import { BookList, Container, Content } from './style'; // Importe os estilos
import { createEmprestimo, getAllLivros } from '../../api/books.api';
import { useAuth } from '../../hooks/useAuth';
import { addDays } from 'date-fns';
import { Alert } from 'react-native';

interface BookData {
    id: number;
    title: string;
    ISBN: string;
    author: string;
    year: string;
}

export const Books = () => {
    const [books, setBooks] = useState<BookData[]>([]);
    const { userId } = useAuth();
    const navigation = useNavigation();


    useEffect(() => {
        // Simulação de chamada à API para obter a lista de livros
        const fetchBooks = async () => {
            getAllLivros().then(({ data }) => {
                const livros = (data as []).map<BookData>((item: any) => ({
                    id: item._id,
                    title: item.titulo,
                    ISBN: item.ISBN,
                    author: item.autor,
                    year: item.ano,
                }));
                setBooks(livros);
            });
        };
        fetchBooks();
    }, []);

    const handleBorrow = (bookId: number) => {
        console.log(`Emprestando o livro com ID ${bookId}`);
        const novoEmprestimo = {
            dataEmprestimo: new Date(),
            dataEntrega: addDays(new Date(), 15),
            livro: bookId,
            usuario: userId,
        };
        createEmprestimo(novoEmprestimo).then(() => {
            console.log('Emprestimo criado com sucesso');
            Alert.alert("Sucesso", "Livro emprestado com sucesso", [{ text: "Ok" }]);
        });
    };

    return (
        <Container>
            <Header />
            <Content>
                <BookList
                    data={books}
                    keyExtractor={(item: unknown, index: number) => (item as BookData).id.toString()}
                    renderItem={({ item }) => (
                        <Book book={item as BookData}
                            onBorrow={handleBorrow}
                        />
                    )}
                />
            </Content>
        </Container>
    );
};
