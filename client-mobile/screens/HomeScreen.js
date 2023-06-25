import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import COLORS from "../assets/json/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Carousel from "../components/Carousel";
import { DetailButton, ReddemButton } from "../components/Button";
import cards from "../assets/json/cards";
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {
  const Card = ({ cards }) => {
    return (
      <View style={style.cardContainer}>
        <View style={style.card}>
          <Image
            source={cards.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        <View style={style.desc}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {cards.name}
            </Text>
          </View>
          <Text>{cards.description}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.ywhite }}>
      <View style={style.header}>
        <View
          style={{
            flexDirector: "row",
            gap: 5,
          }}
        >
          <Text style={{ fontSize: 23 }}>WhatsUp! fams,</Text>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>Faloa</Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="card-account-details-outline" size={35} color="grey" />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              Profile
            </Text>
            <Icon name="email-outline" size={35} marginLeft={60} color="grey" />
            <Text
              style={{
                fontSize: 15,
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              Inbox
            </Text>
            <Icon name="tag-outline" size={35} marginLeft={60} color="grey" />
            <Text
              style={{
                fontSize: 15,
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              E-code
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 50,
            marginLeft: 10,
          }}
        >
          10
        </Text>
        <Icon name="star" size={40} marginTop={10} color="green" />
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            marginLeft: 10,
          }}
        >
          Star balance
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 150,
            marginTop: -40,
          }}
        >
          Rewards details
        </Text>

        <View
          style={{
            marginTop: 20,
            marginLeft: -340,
            flexDirection: "row",
          }}
        >
          <DetailButton
            onPress={() => navigation.navigate("Home")}
            title="Details"
          />
          <ReddemButton
            onPress={() => navigation.navigate("Home")}
            title="Reddem"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Carousel />
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cards}
          renderItem={({ item }) => <Card cards={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 4,
    borderBottomColor: "grey",
  },
  profile: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    height: 100,
    width: 150,
    borderRadius: 10,
    borderBottomWidth: 0.2,
    elevation: 10,
    backgroundColor: COLORS.white,
  },
  desc: {
    height: 100,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: "center",
  },
});

export default HomeScreen;
