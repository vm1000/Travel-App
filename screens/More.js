import React, { Component } from 'react';
import { Text, StyleSheet, View, Animated, Image, Dimensions, ScrollView, TouchableOpacity, Linking} from 'react-native';

import lv from '../lv.json'
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';

class More extends Component {
constructor(props) {
    super(props);
    this.state = {
    }
}
//cont url = 'https://www.google.com/search?q=' + cityName

//{lv.map(city => city.city).toString()} 
render() {

return(
<SafeAreaView>
<Text style={{fontSize:20, color: 'grey', paddingLeft:10, textAlign:'center'}}>
    All cities in Latvia
</Text>
<ScrollView>
<FlatList 
    data={lv} 
    keyExtractor={(x, i) => i}
    renderItem={({ item }) =>
        <ScrollView>
            <View style={{  backgroundColor: 'silver',
            borderRadius: 10,
            opacity:0.7,
            overflow: 'hidden',
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
            marginHorizontal: 5}}>
            <Text style={{ padding: 5, marginLeft: 5, fontSize: 20, }}>
            {item.city}
            </Text>
            <View style={{flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/search?q=' + item.city)}>
            <Image style={{ width: 25, height: 25, padding:5, margin:5, marginRight:10}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Info_Simple_bw.svg/1024px-Info_Simple_bw.svg.png' }} />
            </TouchableOpacity>
            </View>
            </View>
        </ScrollView>}
    />
</ScrollView>
</SafeAreaView>

)}
}
export default More;