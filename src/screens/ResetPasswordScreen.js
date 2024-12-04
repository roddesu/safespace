import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ResetPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo and University Text */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bmc.png')} style={styles.logoImage} />
        <Text style={styles.logoText}>University of Batangas</Text>
      </View>

      {/* Reset Password Title */}
      <Text style={styles.title}>Reset Password</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="UB Mail" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="New Password" placeholderTextColor="#aaa" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm New Password" placeholderTextColor="#aaa" secureTextEntry />
      
      {/* Reset Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>RESET PASSWORD</Text>
      </TouchableOpacity>

      {/* Footer with Login Link */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.footer}>
          Remember your password? <Text style={styles.link}>Log in</Text>
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
  
  // Footer Style
  footer: { marginTop: 20, color: '#ccc' },
  link: { color: '#87ceeb', textDecorationLine: 'underline' },
});

export default ResetPasswordScreen;
