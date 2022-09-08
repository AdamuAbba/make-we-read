import React, { FC, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import LoadingComp from "./LoadingComp";
//config imports//
import axios from "axios";
import * as config from "../services/API/APIConfig";
import { useDispatch, useSelector } from "react-redux";
import { setBooksData } from "../redux/bookDataSlice";
import { setIsLoading } from "../redux/bookDataSlice";
import { useGetBooksDataQuery } from "@services/API/googleBooksApi";
import {
  BookViewProps,
  BookViewRenderItemProps,
  HomeScreenProps,
  Item,
} from "@configs/Types";
import { useAppDispatch, useAppSelector } from "@configs/hooks";

const BooksView: FC<BookViewProps> = ({ navigation }) => {
  const searchData = useAppSelector((state) => state.bookName.searchValue);
  const { isError, data, isLoading, isFetching, isSuccess } =
    useGetBooksDataQuery(searchData);

  const _renderItem: FC<BookViewRenderItemProps> = ({ item, navigation }) => {
    return (
      <Pressable
        android_disableSound={false}
        android_ripple={{ color: "#f2c7ff" }}
        style={styles.bookList}
        onPress={() =>
          navigation.navigate("WebPage", {
            bookPreviewLink: item.volumeInfo.previewLink,
          })
        }
      >
        <Image
          resizeMode="contain"
          accessibilityLabel={item.volumeInfo.title}
          style={styles.image}
          source={
            item.volumeInfo.imageLinks == null
              ? require("../assets/bookHolder.png")
              : { uri: item.volumeInfo.imageLinks.thumbnail }
          }
        />
        <View style={styles.titleView}>
          <View style={styles.internalTextView}>
            <Text style={styles.idText}>Title </Text>
            <Text style={styles.contentText}>{item.volumeInfo.title}</Text>
          </View>
          <View style={styles.internalTextView}>
            <Text style={styles.idText}>Publisher: </Text>
            <Text style={styles.contentText}>
              {item.volumeInfo.publisher == null ? (
                <Text style={{ color: "red" }}>not available</Text>
              ) : (
                item.volumeInfo.publisher
              )}
            </Text>
          </View>
          <View style={styles.internalTextView}>
            <Text style={styles.idText}>published Date </Text>
            <Text style={styles.contentText}>
              {item.volumeInfo.publishedDate}
            </Text>
          </View>
          <View
            style={{
              height: 2,
              borderRadius: 10,
            }}
          ></View>
          <View style={styles.internalTextView}>
            <Text style={styles.idText}>Availability</Text>
            <Text style={styles.contentText}>{item.saleInfo.country}</Text>
          </View>
          <View style={{ ...styles.internalTextView, paddingBottom: 10 }}>
            <Text style={styles.idText}>Description </Text>
            <Text style={styles.contentText} numberOfLines={3}>
              {item.volumeInfo.description == null ? (
                <Text style={{ color: "red" }}>not available</Text>
              ) : (
                item.volumeInfo.description
              )}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const ListHeader = () => {
    const searchData = useAppSelector((state) => state.bookName.searchValue);
    return (
      <View style={styles.headerView}>
        <Text style={styles.headerViewText}>
          search results for{" "}
          <Text style={{ color: "red" }}> "{searchData}"</Text>
        </Text>
      </View>
    );
  };

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
      {isFetching ? (
        <LoadingComp />
      ) : (
        <FlatList
          data={data?.items}
          ListHeaderComponent={() => <ListHeader />}
          renderItem={({ item }) => (
            <_renderItem item={item} navigation={navigation} />
          )}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    paddingTop: 10,
  },
  bookList: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#ffff",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 20,
    width: "90%",
  },

  image: {
    flex: 1,
    height: 180,
    borderRadius: 15,
  },

  titleView: {
    flex: 1,
    paddingLeft: 20,
  },
  idText: {
    fontWeight: "bold",
    fontSize: 16,
  },

  internalTextView: {
    flex: 1,
    marginBottom: 4,
  },
  contentText: { fontSize: 14 },
  headerView: {},
  headerViewText: {
    fontSize: 18,
    paddingLeft: 10,
  },
});

export default BooksView;
