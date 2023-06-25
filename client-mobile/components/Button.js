import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import COLORS from "../assets/json/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PrimaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const DetailButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.SecBtnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const ReddemButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.ThirdBtnContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={style.titles}>{title}</Text>
          <View>
            <Icon name="star" size={20} color="gold" marginLeft={5} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const AddButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.addBtnContainer}>
          <Text style={style.titles}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: { color: COLORS.black, fontWeight: "bold", fontSize: 15 },
  titles: { color: COLORS.white, fontWeight: "bold", fontSize: 15 },
  btnContainer: {
    backgroundColor: COLORS.ywhite,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  SecBtnContainer: {
    borderWidth: 1,
    backgroundColor: COLORS.ywhite,
    height: 35,
    width: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ThirdBtnContainer: {
    borderWidth: 1,
    backgroundColor: COLORS.black,
    height: 35,
    width: 110,
    marginLeft: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtnContainer: {
    borderWidth: 1,
    backgroundColor: COLORS.green,
    height: 55,
    width: 100,
    marginRight: -100,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { PrimaryButton, DetailButton, ReddemButton, AddButton };
