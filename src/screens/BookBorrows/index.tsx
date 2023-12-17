import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { getAllEmprestimos, getLivroById } from "../../api/books.api";
import { BorrowList, Container, Content } from "./style";
import Header from '../../components/Header'; // Importe o componente Header
import Borrow from "../../components/Borrow";

interface BorrowData {
	id: string;
	ISBN: string;
	tituloLivro: string;
	dataEmprestimo: string;
	dataEntrega: string;
}

export const BookBorrows = () => {

	const [borrows, setBorrows] = useState<BorrowData[]>([]);
	const { userId } = useAuth();
	const navigation = useNavigation();

	useEffect(() => {
		// Simulação de chamada à API para obter a lista de livros
		const fetchBorrows = async () => {
			getAllEmprestimos().then(async ({ data }) => {
				const emprestimos = (data as []).map<BorrowData>((item: any) => {
					const livro = item.livro[0];
					return {
						id: item._id,
						ISBN: livro.ISBN,
						tituloLivro: livro.titulo,
						dataEmprestimo: item.dataEmprestimo,
						dataEntrega: item.dataEntrega
					};
				});
				setBorrows(emprestimos);
			});
		};
		fetchBorrows();
	}, []);

	return (
		<Container>
			<Header />
			<Content>
				<BorrowList
					data={borrows}
					keyExtractor={(item: unknown, index: number) => (item as BorrowData).id.toString()}
					renderItem={({ item }) => (
						<Borrow borrow={item as BorrowData} />
					)}
				/>
			</Content>
		</Container>
	);

}