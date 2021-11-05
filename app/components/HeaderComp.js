import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../configs/gloabalStyles";
import { useRoute } from "@react-navigation/core";
const HeaderComp = ({ navigation, height }) => {
  const route = useRoute();
  return (
    <View style={{ ...styles.container, height: height }}>
      <Text style={styles.headerText}>{route.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: colors.dark,
  },
  headerText: {
    color: "#ffff",
    fontSize: 20,
    marginLeft: 10,
  },
});

export default HeaderComp;
