import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const LoadingComp = () => {
  return (
    <View style={styles.container}>
      <LottieView
        style={{
          alignSelf: "center",
          height: 200,
        }}
        autoPlay={true}
        source={require("../assets/bookSearch.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingComp;
