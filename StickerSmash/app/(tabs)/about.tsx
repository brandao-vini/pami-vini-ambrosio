import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Sobre o Aplicativo</Text>
        <Text style={styles.text}>
        Criado com carinho por Vinizinho, este aplicativo mágico transforma suas fotos em verdadeiras obras de arte cheias de personalidade! 🌟✨ Com apenas alguns toques, você pode encher suas imagens de emojis fofinhos e cheios de emoção 😍🎨. É a maneira perfeita de deixar suas fotos mais alegres, divertidas e com o seu jeitinho especial! 💖📸
        </Text>
        <Text style={styles.text}>
        E tem mais: o app também permite que você salve suas criações com um simples toque, assim você pode compartilhar suas fotos cheias de charme sempre que quiser! 💾💫 Perfeito para quem adora deixar as imagens com um toque especial, ele combina praticidade com resultados super encantadores. ✨📲💕
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051e36',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  scrollContent: {
    paddingVertical: 40,
  },
  title: {
    color: '#3e51ad',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: '#8190db',
    fontSize: width > 350 ? 18 : 16,
    lineHeight: 26,
    textAlign: 'justify',
    marginBottom: 15,
  },
});