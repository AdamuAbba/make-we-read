import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const LoadingComp: FC = () => {
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingComp;
