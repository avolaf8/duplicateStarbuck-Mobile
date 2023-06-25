import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import COLORS from "../assets/json/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import foods from "../assets/json/foods";
import { TouchableHighlight } from "react-native-gesture-handler";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react/hooks";

const READ_ITEMS = gql`
  query Items {
    items {
      id
      name
      imgUrl
      description
      price
    }
  }
`;

const OrderScreen = ({ navigation, route }) => {
  const { loading, error, data } = useQuery(READ_ITEMS);
  console.log(data,`dataaa`)
  const CartCard = ({ item }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("DetailScreen", item)}
      >
        <View>
          <View style={style.card}>
            <Image source={{uri: item.imgUrl}} style={{ height: 80, width: 80 }} />
            <View
              style={{
                height: 100,
                marginLeft: 10,
                paddingVertical: 20,
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {item.name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.ywhite, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={30} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Order</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 80,
            marginHorizontal: 1,
            marginLeft: -90,
            gap: 30,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Menu</Text>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Featured</Text>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Prevous</Text>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Favorites</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 10,
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Bevarage</Text>
        <Text
          style={{
            color: COLORS.green,
            fontWeight: "bold",
            marginLeft: 210,
          }}
        >
          See all
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
        data={data?.items}
        renderItem={({item}) => <CartCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default OrderScreen;

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: -50,
  },
  card: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 3,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
