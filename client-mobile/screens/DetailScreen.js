import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../assets/json/colors";
import { ScrollView } from "react-native-gesture-handler";
import { AddButton } from "../components/Button";

const yScreen = Dimensions.get("window").height
const xScreen = Dimensions.get("window").width

const DetailScreen = ({ route, navigation }) => {
  const item = route.params;
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <Icon name="chevron-back-sharp" size={40} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Detail</Text>
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 400,
          }}
        >
          <Image
            source={{ uri: item.imgUrl }}
            style={{ height: yScreen/2, width: xScreen,  }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 20
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft: 20 }}>
            {item.name}
          </Text>
        </View>
        <View style={{
          marginBottom: 40
        }}>
          <Text style={{fontSize: 15}}>{item.description}</Text>
        </View>
        <View
          style={{
            marginRight: 20,
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 10
          }}
          >
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "grey" }}>
            Rp.{item.price}
          </Text>
          <View style={style.orderBtn}>
            <Icon name="add-circle-outline" size={30} />
            <Text style={{ fontSize: 25 }}>1</Text>
            <Icon name="remove-circle-outline" size={30} />
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "grey",
            marginTop: 30,
          }}
        ></View>
        <View
          style={{
            gap: 15,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Size</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 200,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Milk Optional
            </Text>
            <Text style={{ fontSize: 15, color: "green" }}>Opt, (max 1)</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 155,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Add-Espresso Shot
            </Text>
            <Text style={{ fontSize: 15, color: "green" }}>Opt, (max 1)</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 186,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Add-Ice Cream
            </Text>
            <Text style={{ fontSize: 15, color: "green" }}>Opt, (max 1)</Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 280,
            marginTop: 20
          }}
        >
          <AddButton onPress={() => navigation.navigate("Home")} title="Add" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: -20,
  },
  orderBtn: {
    width: 80,
    backgroundColor: COLORS.white,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginLeft: 150,
  },
});
