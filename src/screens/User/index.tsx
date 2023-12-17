// TelaUsuario.tsx
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import styles from './styles';

const TelaUsuario = ({ navigation }: { navigation: any }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    // Aqui você implementará a lógica para carregar os dados do usuário do backend
  }, []);

  if (!usuario) {
    return (
      <View style={styles.container}>
        <Title title="Perfil do Usuário" />
        <Text>Carregando...</Text> {/* Este texto será exibido até que os dados sejam carregados */}
      </View>
    );
  }

  return (
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
  );
};

export default TelaUsuario;
