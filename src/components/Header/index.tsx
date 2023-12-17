import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { HeaderContainer, Logo, Title, LogoutButton, LogoutButtonText, TitleContainer } from './style'

export function Header() {
    const handleLogout = () => {
        // Lógica para o logout
    };

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <HeaderContainer>
                {/* Logo */}
                <Logo source={require('../../assets/logoIFPB.png')} resizeMode="contain" />

                {/* Nome do Aplicativo */}
                <TitleContainer><Title>Biblioteca IFPB</Title></TitleContainer>
                {/* Botão de Logout */}
                <LogoutButton onPress={handleLogout}>
                    <LogoutButtonText>Sair</LogoutButtonText>
                </LogoutButton>

            </HeaderContainer>

        </>
    );
};

export default Header;
