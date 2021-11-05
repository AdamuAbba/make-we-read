import React, { useEffect } from "react";
import { LogBox } from "react-native";
import BooksView from "../components/BooksView";
import SearchBar from "../components/SearchBar";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import HeaderComp from "../components/HeaderComp";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <ParallaxScrollView
      parallaxHeaderHeight={250}
      fadeOutBackground
      renderForeground={() => <SearchBar />}
      stickyHeaderHeight={80}
      renderStickyHeader={() => (
        <HeaderComp height={80} navigation={navigation} />
      )}
      backgroundSpeed={2}
    >
      <BooksView navigation={navigation} />
    </ParallaxScrollView>
  );
};

export default HomeScreen;
