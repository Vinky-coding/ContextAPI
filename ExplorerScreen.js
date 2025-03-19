import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search for meals or area" style={styles.searchBox} />
      <Text style={styles.title}>Top Categories</Text>
      {/* Hiển thị danh mục và item mẫu */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  searchBox: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});

export default ExplorerScreen;
