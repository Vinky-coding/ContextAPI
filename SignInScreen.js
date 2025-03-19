import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from './AuthContext';


const SignInScreen = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Sign In</Text>

    <Text style={styles.label}>Email ID</Text>
    <TextInput
        placeholder="Enter your email here!"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
    />

    <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter your password here!"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

       {/* Forgot Password */}
       <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}

      <TouchableOpacity onPress={() => login(email, password)} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

       {/* Divider */}
       <Text style={styles.orText}>Or sign in with</Text>

        {/* Social Login Buttons */}
        <View style={styles.socialButtons}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: 'white', borderColor: 'gray', borderWidth: 1 }]}>
            <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
        <Text style={[styles.socialButtonText, { color: 'white' }]}>Facebook</Text>
  </TouchableOpacity>
  </View>

  <Text style={styles.signUpText}>
        Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
    input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
    forgotPassword: { textAlign: 'right', color: 'orange', marginBottom: 20 },
    button: { backgroundColor: 'orange', padding: 15, borderRadius: 5 },
    buttonText: { textAlign: 'center', color: 'white', fontWeight: 'bold' },
    orText: { textAlign: 'center', marginVertical: 15, fontSize: 16, color: 'gray' },
    socialButtons: { flexDirection: 'row', justifyContent: 'space-around' },
    socialButton: { padding: 10, borderRadius: 5, width: '45%', alignItems: 'center' },
    socialButtonText: { fontSize: 16, fontWeight: 'bold' },
    
    signUpText: { textAlign: 'center', marginTop: 20, fontSize: 14 },
    signUpLink: { color: 'orange', fontWeight: 'bold' },
  });
  

export default SignInScreen;
