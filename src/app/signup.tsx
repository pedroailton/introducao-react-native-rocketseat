import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Signup() {
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
            source={require("@/assets/donut2.png")}
            style={styles.illustration}
          />
          <Text style={styles.title}>Cadastrar</Text>
          <Text style={styles.subtitle}>
            Crie sua conta para acessar o app com e-mail e senha
          </Text>

          <View style={styles.form}>
            <Input
              placeholder="Nome"
              keyboardType="default"
            />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
            />
            <Input placeholder="Senha" keyboardType="numeric" />
            <Input placeholder="Confirme a senha" keyboardType="numeric" />

            <Button label="Cadastrar" />
          </View>

          <Text style={styles.footerText}>
            Já tem uma conta?{" "}
            <Link href="/" style={styles.footerLink}>
              Faça login aqui.
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
