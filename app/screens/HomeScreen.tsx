import React, { FC, useEffect } from "react";
import { LogBox } from "react-native";
import SearchBar from "../components/SearchBar";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import HeaderComp from "../components/HeaderComp";
import { BookViewProps } from "@configs/Types";
import BooksView from "@components/BooksView";

const HomeScreen: FC<BookViewProps> = ({ navigation }) => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <ParallaxScrollView
      parallaxHeaderHeight={250}
      fadeOutBackground
      renderForeground={() => <SearchBar />}
      stickyHeaderHeight={80}
      renderStickyHeader={() => <HeaderComp height={80} />}
      backgroundSpeed={2}
    >
      <BooksView navigation={navigation} />
    </ParallaxScrollView>
  );
};

export default HomeScreen;
