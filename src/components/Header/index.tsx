import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, Alert } from 'react-native';
import { HeaderContainer, Logo, Title, LogoutButton, LogoutButtonText, TitleContainer } from './style'
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

export function Header() {

    const { logout } = useAuth();
    const navigation = useNavigation();

    const handleLogout = () => {
        logout().then(() => {
            console.log("Logout realizado com sucesso");
            Alert.alert("Sucesso", "Logout realizado com sucesso", [{ text: "Ok", onPress: () => navigation.navigate("SignIn") }]);
        });
    }

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
