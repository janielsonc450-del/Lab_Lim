import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(null);

  const respostaCorreta = "B";

  const opcoes = [
    { id: "A", texto: "BRUSH" },
    { id: "B", texto: "PENCIL" }, // Resposta correta
    { id: "C", texto: "MARKER" },
    { id: "D", texto: "PEN" },
  ];

  return (
    <SafeAreaView style={estilos.tela}>
      <Text style={estilos.tituloQuiz}>QUIZ</Text>

      <View style={estilos.caixaPergunta}>
        <View style={estilos.marcadorPergunta}>
          <Text style={estilos.textoMarcador}>?</Text>
        </View>

        <Text style={estilos.textoPergunta}>
          Qual das opções é lápis em inglês?
        </Text>

        <View style={estilos.caixaOpcoes}>
          {opcoes.map((opcao) => {
  const foiRespondido = opcaoSelecionada !== null;
  let estiloOpcaoExtra = {};

  if (foiRespondido) {
    if (opcao.id === respostaCorreta) {
      estiloOpcaoExtra = estilos.opcaoCerta; // sempre verde
    } else if (opcao.id === opcaoSelecionada) {
      estiloOpcaoExtra = estilos.opcaoErrada; // vermelha se errada foi clicada
    } else {
      estiloOpcaoExtra = estilos.opcaoNeutra; // cinza para as que não foram clicadas
    }
  }

  return (
    <Pressable
      key={opcao.id}
      onPress={() => setOpcaoSelecionada(opcao.id)}
      disabled={foiRespondido}
      style={[estilos.opcao, estiloOpcaoExtra]}
    >
      <View style={estilos.circuloOpcao}>
        <Text style={estilos.textoCirculo}>{opcao.id}</Text>
      </View>
      <Text style={estilos.textoOpcao}>{opcao.texto}</Text>
    </Pressable>
  );
})}

        </View>
      </View>

      <View style={estilos.instagram}>
        <View style={estilos.iconeInstagram} />
        <Text style={estilos.textoInstagram}>@lablim.ifal</Text>
      </View>
    </SafeAreaView>
  );
}

const ROXO_FUNDO = "#5B0E86";
const ROXO_CAIXA = "#B026B4";
const ROXO_OPCAO = "#3B014A";
const BRANCO = "#FFFFFF";

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: ROXO_FUNDO,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 20,
  },
  tituloQuiz: {
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 40,
    color: BRANCO,
    marginBottom: 0,
   
  },
  caixaPergunta: {
    backgroundColor: ROXO_CAIXA,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginTop: 20,
    width: "90%",
    maxWidth: 400,
    height: 360,
    transform: [{ translateY: 10 }],
  },
  marcadorPergunta: {
    width: 50,
    height: 50,
    backgroundColor: BRANCO,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  textoMarcador: {
    color: ROXO_FUNDO,
    fontWeight: "bold",
    fontSize: 30,
  },
  textoPergunta: {
    fontSize: 18,
    marginBottom: 20,
    color: BRANCO,
    textAlign: "center",
    fontWeight: "bold",
  },
  caixaOpcoes: {
    backgroundColor: BRANCO,
    borderRadius: 15,
    padding: 20,
    width: "100%",
  },
  opcao: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    backgroundColor: ROXO_OPCAO,
  },
  opcaoCerta: {
    backgroundColor: "#2ECC71", // Verde
  },
  opcaoErrada: {
    backgroundColor: "#E74C3C", // Vermelho
  },
  circuloOpcao: {
    backgroundColor: ROXO_CAIXA,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  textoCirculo: {
    color: BRANCO,
    fontWeight: "bold",
  },
  textoOpcao: {
    color: BRANCO,
    fontWeight: "bold",
  },
  instagram: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    gap: 5,
  },
  iconeInstagram: {
    width: 18,
    height: 18,
    backgroundColor: BRANCO,
    borderRadius: 4,
   marginTop: 25,
  },
  textoInstagram: {
    fontSize: 14,
    color: BRANCO,
    marginTop: 25,
  },
  opcaoNeutra: {
  backgroundColor: "#A9A9A9", // cinza
},

});