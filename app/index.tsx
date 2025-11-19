import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return <LoginScreen />;
}

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "jerome" && password === "gegedu69") {
      navigation.navigate("Home");   
    } else {
      Alert.alert("Erreur", "Identifiants incorrects");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>KickOff</Text>

      {/* Connexion title */}
      <Text style={styles.title}>Connexion</Text>

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password */}
      <TextInput
        style={styles.input}
        placeholder="motdepasse"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Continue button */}
      <TouchableOpacity style={styles.mainButton} onPress={handleLogin}>
        <Text style={styles.mainButtonText}>Continue</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.divider} />
      </View>

      {/* Google */}
      <TouchableOpacity style={styles.oauthButton}>
        <Text style={styles.oauthText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Apple */}
      <TouchableOpacity style={styles.oauthButton}>
        <Text style={styles.oauthText}>Continue with Apple</Text>
      </TouchableOpacity>

      {/* Terms */}
      <Text style={styles.terms}>
        By clicking continue, you agree to our <Text style={styles.link}>Terms of Service</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 42,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    height: 48,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 15,
  },
  mainButton: {
    backgroundColor: '#000',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#cfcfcf',
  },
  orText: {
    marginHorizontal: 10,
    color: '#444',
  },
  oauthButton: {
    backgroundColor: '#fff',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  oauthText: {
    fontSize: 15,
    fontWeight: '500',
  },
  terms: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#000',
  },
});
