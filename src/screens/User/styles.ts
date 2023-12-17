// styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Cor de fundo da tela
    // padding: 20,
  },
  profileSection: {
    backgroundColor: '#fff', // Cor de fundo da seção do perfil
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20, // Espaço abaixo da seção do perfil
  },
  profileLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333', // Cor do texto para os rótulos
    marginBottom: 5, // Espaço abaixo do rótulo
  },
  profileValue: {
    fontSize: 14,
    color: '#666', // Cor do texto para os valores
    marginBottom: 10, // Espaço abaixo do valor
  },
  nonEditableInput: {
    backgroundColor: '#eaeaea', // Fundo para campos não editáveis
    borderRadius: 5,
    padding: 10,
    marginBottom: 10, // Espaço abaixo do input
  },
  editableInput: {
    backgroundColor: '#fff', // Fundo para campos editáveis
    borderRadius: 5,
    padding: 10,
    marginBottom: 10, // Espaço abaixo do input
    borderWidth: 1,
    borderColor: '#ccc', // Borda para campos editáveis
  },
  button: {
    backgroundColor: '#007bff', // Cor de fundo do botão
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20, // Espaço acima do botão
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 16,
  },
  // Adicione mais estilos conforme necessário
});

export default styles;

