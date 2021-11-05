import React from "react";
import { Dimensions, StyleSheet, Alert } from "react-native";
import WebView from "react-native-webview";
import LoadingComp from "../components/LoadingComp";

const { height, width } = Dimensions.get("window");

const ErrorComp = ({ name }) => {
  return Alert.alert("error", { name });
};

const WebPageScreen = ({ route }) => {
  const data = route.params;

  return (
    <WebView
      source={{ uri: data }}
      startInLoadingState={true}
      setDisplayZoomControls
      overScrollMode="always"
      setBuiltInZoomControls
      scalesPageToFit
      textZoom={150}
      pullToRefreshEnabled={true}
      geolocationEnabled={true}
      showsHorizontalScrollIndicator
      renderLoading={() => <LoadingComp />}
      renderError={(errorName) => <ErrorComp name={errorName} />}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height,
    width,
  },
});

export default WebPageScreen;
