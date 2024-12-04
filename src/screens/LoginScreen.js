import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // To store login data

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // You can replace this with your own login logic or API call
    if (email === 'admin@ub.edu' && password === 'password123') {
      // Simulate successful login
      const user = { email }; // Store the logged-in user info

      // Store user data in AsyncStorage (or you can use any other method)
      await AsyncStorage.setItem('user', JSON.stringify(user));

      // Navigate to Homepage after successful login
      navigation.replace('Homepage');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo and University Text */}
      <View style={styles.logoContainer}>
        {/* Adjust the path if necessary */}
        <Image source={require('../assets/bmc.png')} style={styles.logoImage} />
        <Text style={styles.logoText}>University of Batangas</Text>
      </View>

      {/* Login Title */}
      <Text style={styles.title}>Log in</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="UB Mail"
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
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      
      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      
      {/* Footer with Sign Up Link */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.footer}>
          Don’t have an account? <Text style={styles.link}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333' },
  
  // Style for logo container
  logoContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  logoImage: { width: 50, height: 50, marginRight: 10 },  // Adjust the width and height of the logo
  logoText: { fontSize: 26, fontWeight: 'bold', color: '#fff' },
  
  // Title Style
  title: { fontSize: 18, color: '#fff', marginBottom: 20 },
  
  // Input Field Style
  input: { width: '80%', backgroundColor: '#444', padding: 15, borderRadius: 10, color: '#fff', marginBottom: 10 },
  
  // Button Style
  button: { backgroundColor: '#e63946', padding: 15, borderRadius: 10, width: '80%', alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  
  // Forgot Password Style
  forgotPassword: { color: '#87ceeb', marginTop: 10 },
  
  // Footer Style
  footer: { marginTop: 20, color: '#ccc' },
  link: { color: '#87ceeb', textDecorationLine: 'underline' },
});

export default LoginScreen;
