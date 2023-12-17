import React from 'react';
import { BookContainer, BookTitle, BookInfo, BookAlert, } from './style'
import { format, formatDistance, isAfter } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface BorrowProps {
    borrow: {
        ISBN: string;
        tituloLivro: string;
        dataEmprestimo: string;
        dataEntrega: string;
    }
}

export function Borrow({ borrow }: BorrowProps) {
    const { tituloLivro, ISBN, dataEmprestimo, dataEntrega } = borrow;
    const dataEmprestimoFormatada = format(new Date(dataEmprestimo), 'dd/MM/yyyy');
    const dataEntregaFormatada = format(new Date(dataEntrega), 'dd/MM/yyyy');

    const dataEntregaAsDate = new Date(dataEntrega);
    const isAtrasado = isAfter(new Date(), dataEntregaAsDate);

    return (
        <BookContainer>
            <BookTitle>{tituloLivro}</BookTitle>
            <BookInfo>ISBN: {ISBN}</BookInfo>
            <BookInfo>Data Empréstimo: {dataEmprestimoFormatada}</BookInfo>
            <BookInfo>Data Devolução: {dataEntregaFormatada}</BookInfo>
            {isAtrasado && <BookAlert>Atrasado há {formatDistance(new Date(), dataEntregaAsDate, { locale: ptBR })}</BookAlert>}
        </BookContainer>
    );
};

export default Borrow;