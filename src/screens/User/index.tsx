// TelaUsuario.tsx
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import styles from './styles';
import { useAuth } from '../../hooks/useAuth';
import { getUserById } from '../../api/user.api';
import { Content } from '../Books/style';
import { Container } from '../Maps/styles';
import Header from '../../components/Header';

interface Usuario {
  nome: string;
  matricula: string;
  categoria: string;
  telefone: string;
  email: string;
  estado: {
    pendenciaDeDevolucao: boolean;
    podeFazerEmprestimo: boolean;
  };
}

const TelaUsuario = ({ navigation }: { navigation: any }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const { userId } = useAuth();

  useEffect(() => {
    const fetchUsuario = () => {
      if (userId) {
        getUserById(userId).then(({ data }) => ({ ...data, estado: { ...data.estado } })).then((usuario) => {
          setUsuario(usuario);
        });
      }
    }
    fetchUsuario();
  }, []);

  if (!usuario) {
    return (
      <Container>
        <Header />
        <Content>
          <View style={styles.container}>
            <Title title="Perfil do Usuário" />
            <Text>Carregando...</Text>
          </View>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Content>
        <ScrollView style={styles.container}>
          <Title title="Perfil do Usuário" />
          <View style={styles.profileSection}>
            <Text style={styles.profileLabel}>Nome:</Text>
            <Input value={usuario.nome} isError={false} editable={false} />

            <Text style={styles.profileLabel}>Matrícula:</Text>
            <Input value={usuario.matricula} isError={false} editable={false} />

            <Text style={styles.profileLabel}>Categoria:</Text>
            <Input value={usuario.categoria} isError={false} editable={false} />

            <Text style={styles.profileLabel}>Telefone:</Text>
            <Input value={usuario.telefone} isError={false} editable={false} />

            <Text style={styles.profileLabel}>E-mail:</Text>
            <Input value={usuario.email} isError={false} editable={false} />

            <Text style={styles.profileLabel}>Pendência de Devolução:</Text>
            <Text style={styles.profileValue}>{usuario.estado.pendenciaDeDevolucao ? 'Sim' : 'Não'}</Text>

            <Text style={styles.profileLabel}>Pode Fazer Empréstimo:</Text>
            <Text style={styles.profileValue}>{usuario.estado.podeFazerEmprestimo ? 'Sim' : 'Não'}</Text>
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default TelaUsuario;
