import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Button,Text, View, Dimensions } from 'react-native';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class Map extends React.Component {
    constructor(){
        super()
        this.state = {
            location : null,
        }
    }
    async componentDidMount(){
        let status  = await Permissions.askAsync(Permissions.LOCATION);
        console.log("status",status)
        if (status.status !== 'granted') {
         alert(" permission not Granted")
        }
    
    }
    getLoc = async () => {
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    }   
  render() {
      console.log("Location",this.state.location)
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
        <Button title = "Get_Location" onPress = {this.getLoc} style = {{flex: 1,backgroundColor : "green", position:"absolute"}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
