import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from './AuthContext';

const AccountScreen = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.role}>{user.role}</Text>
      <Text> I have above 5 years of experience in native mobile apps developer now I'm learning React Native</Text>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 1 },
  header: { width: '100%', height: 150, backgroundColor: 'skyblue' },
  name: { fontSize: 22, paddingTop: 100 ,fontWeight: 'bold', marginTop: 20 },
  role: { fontSize: 16, color: 'blue' },
  button: { backgroundColor: 'orange', padding: 15, marginTop: 20, borderRadius: 5 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});

export default AccountScreen;
