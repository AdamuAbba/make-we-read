import { WebScreenProps } from "@configs/Types";
import React, { FC } from "react";
import { Dimensions, StyleSheet, Alert } from "react-native";
import WebView from "react-native-webview";
import LoadingComp from "../components/LoadingComp";

const { height, width } = Dimensions.get("window");

const WebPageScreen: FC<WebScreenProps> = ({ route }) => {
  return (
    <WebView
      source={{ uri: route.params?.bookPreviewLink }}
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
