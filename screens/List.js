import React, { Component } from 'react'
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity,
  Alert
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

import * as theme from '../theme';

const { width, height } = Dimensions.get('window');
const mocks = [
  {
    id: 1,
    user: {
      name: 'Kristīne krastiņa',
      avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
    },
    // saved: true,
    location: 'Riga, Latvija',
    temperature: 24,
    title: 'Riga',
    description: "Riga is the capital, the largest and primate city of Latvia. With 632,614 inhabitants (2019), it is also the largest city in the three Baltic states, home to one third of Latvia's population and one tenth of the three Baltic states' combined population.[11] The city lies on the Gulf of Riga, at the mouth of the Daugava river. Riga's territory covers 307.17 km2 (118.60 sq mi) and lies 1–10 m (3 ft 3 in–32 ft 10 in) above sea level,[12] on a flat and sandy plain. Riga was founded in 1201 and is a former Hanseatic League member. Rigas historical centre is a UNESCO World Heritage Site, noted for its Art Nouveau/Jugendstil architecture and 19th century wooden architecture.[13] Riga was the European Capital of Culture during 2014, along with Umeå in Sweden. Riga hosted the 2006 NATO Summit, the Eurovision Song Contest 2003, the 2006 IIHF Mens World Ice Hockey Championships and the 2013 World Womens Curling Championship. It is home to the European Unions office of European Regulators for Electronic Communications (BEREC). In 2016, Riga received over 1.4 million visitors.[14] The city is served by Riga International Airport, the largest and busiest airport in the Baltic states. Riga is a member of Eurocities,[15] the Union of the Baltic Cities (UBC)[16] and Union of Capitals of the European Union (UCEU).[17]",
    rating: 4.8,
    reviews: 512,
    preview: 'https://images.pexels.com/photos/681405/pexels-photo-681405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    images: [
      'https://images.pexels.com/photos/681405/pexels-photo-681405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://cdn.pixabay.com/photo/2017/11/10/00/21/riga-2935039_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/10/05/09/51/latvia-3725546__480.jpg',
      'https://cdn.pixabay.com/photo/2017/01/01/15/40/latvia-1944777_1280.jpg',
    ]
  },
  {
    id: 2,
    user: {
      name: 'Elīna Gūtmane',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    // saved: false,
    location: 'Sigulda, Latvija',
    temperature: 24,
    title: 'Sigulda',
    description: 'Sigulda is a town in the Vidzeme Region of Latvia, 53 kilometres (33 miles) from the capital city Riga.',
    rating: 4.6,
    reviews: 214,
    preview: 'https://cdn.pixabay.com/photo/2017/10/05/21/11/cave-2820957__480.jpg',
    images: [
      'https://cdn.pixabay.com/photo/2017/10/05/21/11/cave-2820957__480.jpg',
      'https://cdn.pixabay.com/photo/2014/01/21/16/30/castle-tower-249184_1280.jpg',
    ]
  },
  {
    id: 3,
    user: {
      name: 'Kristaps bērziņš',
      avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    // saved: true,
    location: 'Jurmala, Latvija',
    temperature: 28,
    title: 'Jurmala',
    description: 'Jurmala is a city in Latvia, about 25 kilometres (16 miles) west of Riga. Jūrmala is a resort town stretching 32 km (20 miles) and sandwiched between the Gulf of Riga and the Lielupe River. It has a 33 km (21 miles) stretch of white-sand beach, and a population of 56,646, making it the fifth largest city in Latvia.',
    rating: 4.2,
    reviews: 391,
    preview: 'http://www.kurshihotel.lv/wp-content/uploads/2014/03/Jurmala_Dubulti-majori_small.jpg',
    images: [
      'http://www.kurshihotel.lv/wp-content/uploads/2014/03/Jurmala_Dubulti-majori_small.jpg',
       ]
  },
  {
    id: 4,
    user: {
      name: 'Kārlis Zariņš',
      avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
    },
    location: 'Ventspils, Latvija',
    temperature: 21,
    title: 'Ventspils',
    description: 'Ventspils is a city in northwestern Latvia in the historical Courland region of Latvia, and is the sixth largest city in the country. At the beginning of 2017, Ventspils had a population of 39,286. It is situated on the Venta River and the Baltic Sea, and has an ice-free port. The city name literally means "castle on the Venta", referring to the Livonian Order castle built alongside the Venta River. Ventspils holds the national record for the highest temperature ever recorded in Latvia with 37.8 °C (100.0 °F) on 4 August 2014.',
    rating: 4.4,
    reviews: 122,
    preview: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Ventspilis._Isplaukia_krovininis_laivas%2C_2006-09-22.jpg',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/8/85/Ventspilis._Isplaukia_krovininis_laivas%2C_2006-09-22.jpg',
    ]
  },
  {
    id: 5,
    user: {
      name: 'Inese Priede',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    location: 'Liepaja, Latvija',
    temperature: 24,
    title: 'Liepaja',
    description: 'Liepaja is a city in western Latvia, located on the Baltic Sea. It is the largest city in the Kurzeme Region and the third largest city in the country after Riga and Daugavpils. It is an important ice-free port. In 2017 population of Liepāja is 69,443 people.',
    rating: 4.5,
    reviews: 202,
    preview: 'https://d6dyoorq84mou.cloudfront.net/uploads/page/primary_image/12375/pilseta_kopskats.jpg',
    images: [
      'https://d6dyoorq84mou.cloudfront.net/uploads/page/primary_image/12375/pilseta_kopskats.jpg',
      'https://www.themayor.eu/uploads/city/main_image/103/default_Liep%C4%81ja_Travel...jpg',
    ]
  },
  {
    id: 6,
    user: {
      name: 'Elmārz Jēkabsons',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
    },
    location: 'Valmiera, Latvija',
    temperature: 24,
    title: 'Valmiera',
    description: 'This attractive small town, 80 kilometers from Athens',
    rating: 4.1,
    reviews: 118,
    preview: 'http://radioskonto.lv/wp-content/uploads/2017/07/img7.jpg',
    images: [
      'http://radioskonto.lv/wp-content/uploads/2017/07/img7.jpg',
      'http://radioskonto.lv/wp-content/uploads/2016/10/valmiera-825x510.jpg',
    ]
  },
]
const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.5,
    paddingBottom: theme.sizes.padding * 0.33,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articles: {
  },
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  destination: {
    width: width - (theme.sizes.padding * 2),
    height: width * 0.85,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius,
  },
  destinationInfo: {
    position: 'absolute',
    opacity: 0.9,
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 20,
    bottom: 0,
    left: (width - (theme.sizes.padding * 10)) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme.colors.white,
    width: width - (theme.sizes.padding * 6),
  },
  recommended: {
  },
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.padding,
  },
  recommendedList: {
  },
  recommendation: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.5,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.sizes.padding / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: theme.sizes.font * 1.25,
    color: theme.colors.white
  },
  recommendationImage: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    height: (width - (theme.sizes.padding * 2)) / 2,
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2,
    borderWidth: 2,
    borderColor: 'silver'
  },
  rating: {
    fontSize: theme.sizes.font * 2,
    color: theme.colors.white,
    fontWeight: 'bold'
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.active,
  }
});

class Articles extends Component {
  scrollX = new Animated.Value(100);
  //const { navigation } = this.props;
  static navigationOptions = ({ navigation }) => {
    return {
    header: (
      <View style={[styles.flex, styles.row, styles.header,]}>
        <View>
          {/* <Text style={{ color: theme.colors.caption }}>Search for place</Text> */}
          <Text style={{ fontSize: theme.sizes.font * 2 }}>Discover Latvija</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image style={[styles.avatar, {borderColor: 'red', borderWidth: 2, height: 50, width: 50, borderRadius:25, overflow:'hidden'}]} source={{ uri: 'https://randomuser.me/api/portraits/women/12.jpg'}} />
          </TouchableOpacity>
        </View>
      </View>
    )
    }
  }

  renderDots() {
    const { destinations } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View style={[
        styles.flex, styles.row,
        { justifyContent: 'center', alignItems: 'center', marginTop: 10 }
      ]}>
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index -1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, { borderWidth: borderWidth } ]}
            />
          )
        })}
      </View>
    )
  }

  renderRatings(rating) {
    const stars = new Array(5).fill(0);
    return (
      stars.map((_, index) => {
        const activeStar = Math.floor(rating) >= (index + 1);
        return (
          <FontAwesome
            name="star"
            key={`star-${index}`}
            size={theme.sizes.font}
            color={theme.colors[activeStar ? 'active' : 'gray']}
          />
        )
      })
    )
  }

  renderDestinations = () => {
    return (
      <View style={[ styles.column, styles.destinations ]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow:'visible', height: 280 }}
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item }) => this.renderDestination(item)}
        />
        {this.renderDots()}
      </View>
    );
  }

  renderDestination = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Article', { article: item })}>
        <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: theme.sizes.radius }}
          source={{ uri: item.preview }}
        >
          <View style={[styles.row, { justifyContent: 'space-between' }, {backgroundColor: 'silver', opacity:0.9, borderRadius:20, overflow:'hidden',}]}>
            <View style={{ flex: 0 }}>
              <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
            </View>
            <View style={[styles.column, { flex: 2, paddingHorizontal: theme.sizes.padding / 2 }]}>
              <Text style={{ color: theme.colors.white, fontWeight: 'bold' }}>{item.user.name}</Text>
              <Text style={{ color: theme.colors.white }}>
                <Octicons
                  name="location"
                  size={theme.sizes.font * 0.8}
                  color={theme.colors.white}
                />
                <Text> {item.location}</Text>
              </Text>
            </View>
            <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end', }}>
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
        </ImageBackground>
          <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
            <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: 5, }}>
              {item.title}
            </Text>
            <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
              {/* <Text style={{ color: theme.colors.caption }}>
                {item.description.split('').slice(0, 30)}...
              </Text> */}
              {/* <FontAwesome
                name="chevron-right"
                size={theme.sizes.font *0.75}
                color={theme.colors.caption}
              /> */}
            </View>
          </View>
      </TouchableOpacity>
    )
  }

  renderRecommended = () => {
    const { navigation } = this.props;
    return (
      <View style={[styles.flex, styles.column, styles.recommended ]}>
        <View
          style={[
            styles.row,
            styles.recommendedHeader
          ]}
        >
          <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Recommended</Text>
          <TouchableOpacity activeOpacity={0.1} onPress={ () => navigation.navigate('More')}>
            <Text style={{ color: theme.colors.caption }}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={[ styles.shadow, { overflow: 'visible' }]}
            data={this.props.destinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.renderRecommendation(item, index)}
          />
        </View>
      </View>
    );
  }

  renderRecommendation = (item, index) => {
    const { destinations } = this.props;
    const isLastItem = index === destinations.length - 1;
    return (
      <View style={[
        styles.flex, styles.column, styles.recommendation, styles.shadow, 
        index === 0 ? { marginLeft: theme.sizes.margin } : null,
        isLastItem ? { marginRight: theme.sizes.margin / 2 } : null,
      ]}>
        <View style={[styles.flex, styles.recommendationHeader]}>
          <Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
          <View style={[ styles.flex, styles.row, styles.recommendationOptions ]}>
            <Text style={styles.recommendationTemp}>
              {item.temperature}℃
            </Text>
            <FontAwesome
              name={item.saved ? 'bookmark' : 'bookmark-o'}
              color={theme.colors.white}
              size={theme.sizes.font * 1.25}
            />
          </View>
        </View>
        <View style={[styles.flex, styles.column, styles.shadow, { justifyContent: 'space-evenly', padding: theme.sizes.padding / 2 }]}>
          <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: theme.sizes.padding / 4.5, }}>{item.title}</Text>
          <Text style={{ color: theme.colors.caption }}>{item.location}</Text>
          <View style={[
            styles.row,
            { alignItems: 'center', justifyContent: 'space-between', marginTop: theme.sizes.margin }
          ]}>
            {this.renderRatings(item.rating)}
            <Text style={{ color: theme.colors.active }}>
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
        {this.renderDestinations()}
        {this.renderRecommended()}
      </ScrollView>
    )
  }
}

Articles.defaultProps = {
  destinations: mocks
};

export default Articles;
