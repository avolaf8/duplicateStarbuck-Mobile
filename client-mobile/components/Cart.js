import Icon from "react-native-vector-icons/MaterialIcons";
import { FlatList, SafeAreaView, StyleSheet, View, Image } from "react-native";
import COLORS from "../assets/json/colors";
import homeCart from "../assets/json/homeCart";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react/hooks";

const READ_ITEMS = gql`
  query Items {
    items {
      id
      name
      imgUrl
    }
  }
`;


const Cart = () => {
  const CartCard = ({item}) => {
    return (
    <View style={style.cartCard}>
      <Image source={item.image}/>
    </View>
    ) 
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.ywhite, felx: 1 }}>
      <View></View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, marginBottom: 20, borderWidth: 4 }}
        data={homeCart}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center"
  },
});

export default Cart;
