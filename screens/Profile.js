import React, { Component } from 'react';
import { Text, StyleSheet, View, Animated, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';


class Profile extends Component {

render() {
return(
<SafeAreaView style={{backgroundColor:'silver', opacity:0.8}}>
<ScrollView>
<Text style={{paddingLeft:10, marginTop:20, color:'grey'}}>
    PROFILE
</Text>
<View style={{backgroundColor:'white', borderColor:'grey', borderBottomWidth: 1, borderTopWidth: 1}}>
<Text style={{paddingLeft:10, padding:5, }}>
    Name: Kate Moss
</Text>
<Text style={{paddingLeft:10, padding:5}}>
    Phone: +3712965990
</Text>
<Text style={{paddingLeft:10, padding:5}}>
    Name: Kate.moss@gmail.com
</Text>
</View>
<View>
<Text style={{paddingLeft:10, marginTop:20, color:'grey'}}>
    NOTIFICATIONS
</Text>
<View style={{backgroundColor:'white', borderColor:'grey', borderBottomWidth: 1, borderTopWidth: 1}}>
<Text style={{paddingLeft:10, padding:5}}>
    Show notifications
</Text>
<Text style={{paddingLeft:10, padding:5}}>
    Sounds 
</Text>
<Text style={{paddingLeft:10, padding:5, color:'red'}}>
    Reset all notifications
</Text>
</View>
</View>
<View>
<Text style={{paddingLeft:10, marginTop:20, color:'grey'}}>
    ACCOUNT
</Text>
<View style={{backgroundColor:'white', borderColor:'grey', borderBottomWidth: 1, borderTopWidth: 1}}>
<Text style={{paddingLeft:10, padding:5}}>
    Info 
</Text>
<Text style={{paddingLeft:10, padding:5}}>
    Change Contact information
</Text>
<Text style={{paddingLeft:10, padding:5}}>
    Share 
</Text>
</View>
</View>
<View>
<Text style={{paddingLeft:10, marginTop:20, color:'grey'}}>
    SETTINGS
</Text>
<View style={{backgroundColor:'white', borderColor:'grey', borderBottomWidth: 1, borderTopWidth: 1}}>
<Text style={{paddingLeft:10, padding:5}}>
    General 
</Text>
<Text style={{paddingLeft:10, padding:5}}>
    Privacy
</Text>
<Text style={{paddingLeft:10, padding:5}}>
    Configure Settings 
</Text>
<Text style={{paddingLeft:10, padding:5, color:'red'}}>
    Reset All Settings 
</Text>
</View>
</View>
<View>
<Text style={{paddingLeft:10, marginTop:20, color:'grey'}}>
    ABOUT
</Text>
<View style={{backgroundColor:'white', borderColor:'grey', borderBottomWidth: 1, borderTopWidth: 1}}>
<Text style={{paddingLeft:10, padding:5}}>
    Regulatory
</Text>
</View>
</View>
<Text style={{paddingLeft:10, marginTop:20, color:'grey'}}>
</Text>
</ScrollView>
</SafeAreaView> 


)}
}
export default Profile;
  