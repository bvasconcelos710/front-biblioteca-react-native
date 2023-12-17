import React from "react";
import { Container, Menu, Title } from './style'
import Header from "../../components/Header";



export function Home() {

    return (
        <><Header />
            <Container>
                <Menu>
                    <Title>Biblioteca</Title>
                </Menu>
                <Menu>
                    <Title>Empréstimos</Title>
                </Menu>
            </Container>
        </>
    );
};