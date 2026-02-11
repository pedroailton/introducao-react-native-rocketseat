import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert
} from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSignIn() {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    else {
      Alert.alert("Sucesso", `Login realizado com ${email}`);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image
            source={require("@/assets/donut.png")}
            style={styles.illustration}
          />
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>
            Acesse sua conta com e-mail e senha
          </Text>

          <View style={styles.form}>
            <Input
              placeholder="Digite seu e-mail..."
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />

            <Input
            placeholder="Digite sua senha..."
            keyboardType="numeric"
            onChangeText={(text) => setSenha(text)}
            />

            <Button label="Entrar" onPress={handleSignIn} />
          </View>

          <Text style={styles.footerText}>
            Não tem uma conta?{" "}
            <Link href="./signup" style={styles.footerLink}>
              Cadastre-se aqui.
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    padding: 32,
  },

  illustration: {
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 62,
  },

  title: {
    fontSize: 32,
    fontWeight: 900,
  },

  subtitle: {
    fontSize: 16,
  },

  form: {
    marginTop: 24,
    gap: 8,
  },

  footerText: {
    textAlign: "center",
    marginTop: 24,
  },
  footerLink: {
    color: "#384dc5",
    fontWeight: 700,
  },
});
