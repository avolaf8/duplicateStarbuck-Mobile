import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import COLORS from "../assets/json/colors";
import { PrimaryButton } from "../components/Button";

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.green }}>
      <View style={{ height: 400 }}>
        <Image
          style={{
            width: "100%",
            resizeMode: "contain",
            bottom: -110,
          }}
          source={require("../assets/Logo.png")}
        />
      </View>
      <View style={style.textContainer}>
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.white,
          }}
        >
          STARBUCKS
        </Text>
        <Text
          style={{
            marginBottom: 300,
            fontSize: 36,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.white,
          }}
        >
          REWARD
        </Text>
      </View>
      <View style={{
        marginBottom: 50
      }}>

          <PrimaryButton
            onPress={() => navigation.navigate("Home")}
            title="Get Started"
          /> 
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  textContainer: {
    marginTop: -100,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: -50,
  },
})
export default OnBoardScreen;
