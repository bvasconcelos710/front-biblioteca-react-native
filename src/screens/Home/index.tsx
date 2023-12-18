import React from "react";
import { Container, Menu, Title } from './style'
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";



export function Home() {
    const navigation = useNavigation();
    return (
        <><Header />
            <Container>
                <Menu onPress={() => navigation.navigate("Books")}>
                    <Title>Biblioteca</Title>
                </Menu>
                <Menu onPress={() => navigation.navigate("BookBorrows")} >
                    <Title>Empréstimos</Title>
                </Menu>
                <Menu onPress={() => navigation.navigate("Maps")} >
                    <Title>Endereço</Title>
                </Menu>
            </Container >
        </>
    );
};