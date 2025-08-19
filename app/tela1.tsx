import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BottomIconBar() {
  const router = useRouter();

  return (
    <View style={styles.containerPrincipal}>
      
      {/* Categorias - vertical, centralizadas e com espaço entre */}
      <View style={styles.categorias}>
        <TouchableOpacity 
          style={styles.categoriaButton} 
          onPress={() => router.push('/tela2')}
        >
          <Text style={styles.labelCategoria}>Categoria 1</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.categoriaButton} 
          onPress={() => router.push('/tela3')}
        >
          <Text style={styles.labelCategoria}>Categoria 2</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.categoriaButton} 
          onPress={() => router.push('/tela4')}
        >
          <Text style={styles.labelCategoria}>Categoria 3</Text>
        </TouchableOpacity>
      </View>

      {/* Barra inferior fixa - botões em linha horizontal */}
      <View style={styles.barraInferior}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/classificacao')}>
          <Icon name="emoji-events" size={30} color="#fff" />
          <Text style={styles.label}>Classificação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/perfil')}>
          <Icon name="person" size={30} color="#fff" />
          <Text style={styles.label}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/configuracoes')}>
          <Icon name="settings" size={30} color="#fff" />
          <Text style={styles.label}>Configurações</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 80, // espaço para a barra fixa embaixo
  },
  categorias: {
    alignItems: 'center',       // centraliza horizontalmente os botões
    marginTop: 20,
  },
  categoriaButton: {
    width: '70%',               // controla a largura dos botões de categoria
    backgroundColor: '#eee',
    paddingVertical: 15,
    marginVertical: 10,         // espaçamento entre botões
    borderRadius: 8,
    alignItems: 'center',       // centraliza texto dentro do botão
    elevation: 2,               // sombra leve no Android
    shadowColor: '#000',        // sombra iOS
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    height: 100, // altura fixa para os botões de categoria
    justifyContent: 'center', // centraliza verticalmente
  },
  labelCategoria: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center', // centraliza o texto dentro do botão
  },
  barraInferior: {
    position: 'absolute',
    bottom: 0,
    width: '100%',          // seu width '100%'
    alignItems: 'center',    // seu alignItems: 'center'
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#7e00afff',
    paddingVertical: 10,
    marginTop: 40,     // seu marginTop, mas aqui pode não surtir efeito porque é fixo embaixo
    paddingBottom:50,
  },
  button: {
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});
