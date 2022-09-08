import React from "react";
import { useDispatch } from "react-redux";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { setSearchValue } from "../redux/bookNameSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleInput = (e) => {
    dispatch(setSearchValue(e));
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <TextInput
          onChangeText={(e) => handleInput(e)}
          style={styles.inputStyle}
          placeholder="book name"
          placeholderTextColor="#0006"
        />
        <Ionicons name="search-sharp" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: "#212529",
  },

  searchView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  inputStyle: {
    backgroundColor: "#ffff",
    marginRight: 6,
    borderWidth: 1,
    padding: 3,
    width: "70%",
    borderRadius: 20,
    textAlign: "center",
  },
});

export default SearchBar;
