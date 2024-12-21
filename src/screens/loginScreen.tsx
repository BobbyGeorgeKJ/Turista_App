import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Login and Sign-up Toggle */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButtonActive}>
          <Text style={styles.toggleTextActive}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButton}>
          <Text style={styles.toggleText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Hello Again!</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Email ID"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>forgot your password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Prompt */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF8F7",
    paddingHorizontal: 30,
  },
  toggleContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 40,
    justifyContent: "center",
  },
  toggleButtonActive: {
    backgroundColor: "#001F3F",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  toggleButton: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  toggleTextActive: {
    color: "#FFF",
    fontWeight: "bold",
  },
  toggleText: {
    color: "#333",
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    backgroundColor: "#EAEAEA",
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#3333FF",
    marginBottom: 40,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#001F3F",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    marginBottom: 40,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    color: "#555",
    fontSize: 14,
  },
  signUpLink: {
    color: "#3333FF",
    marginLeft: 5,
    fontSize: 14,
  },
});