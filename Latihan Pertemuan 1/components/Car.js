import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {View, StyleSheet, Text,Image,Button} from 'react-native';

class Car extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> My Profile</Text>
                <Text> Nama         : Siti Sarah</Text>
                <Text> NPM           : 222310019</Text>
                <Text> Kelas          : TI-22-PA</Text>
                <Text> Prodi          : S1 Teknologi Informasi</Text>
                <Text> Umur          : 19 Tahun</Text>
                <Text> Nomor HP : 0895613167503</Text>
                <Text> Alamat       : Bogor, Kp Muara Tajur</Text>
                <Text> Agama       : Islam</Text>
                <Image source={require("../assets/profileku.png")}
                style={{width:200, height:250, margin:50}}/>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87cefa',
        alignItems: "left",
        justifyContent: "left",
        margin:30,
      },
})

export default Car;