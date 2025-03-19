import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "./AuthContext";

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Welcome, {user?.name}!</Text>
      <Text>Role: {user?.role}</Text>
      <Button title="Sign Out" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
