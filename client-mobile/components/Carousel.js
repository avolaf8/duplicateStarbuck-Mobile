import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from 'react-native';
import React, { useRef } from 'react';

const Slider = () => {
  const images = new Array(1).fill(
    'https://www.starbucks.co.id/storage/image/temporary/summernote_image_1648542104.jpg'
  );
  images.push('https://www.starbucks.co.id/storage/image/temporary/summernote_image_1648542137.jpg')
  images.push('https://www.starbucks.co.id/storage/image/temporary/summernote_image_1648542165.jpg')
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();
  return (
    <SafeAreaView style={style.container}>
      <View style={style.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ], { useNativeDriver: false })}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            return (
              <View style={{ width: windowWidth, height: 300 }} key={imageIndex}>
                <ImageBackground source={{ uri: image }} style={style.card}>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={style.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[style.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 10,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Slider