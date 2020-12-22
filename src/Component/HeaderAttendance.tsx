import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeParamList, HomeStackNavProp } from '../Router/ParamList/HomeParamList';


interface HeaderAttendanceProps {
    navigation: StackNavigationProp<HomeParamList, 'Date'>


}

const { width, height } = Dimensions.get('window')

export const HeaderAttendance: React.FC<HeaderAttendanceProps> = ({ navigation }) => {
    // console.log(navigation, 'asdasd');
    console.log(StatusBar.currentHeight);


    return (
        <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, backgroundColor: '#874469' }}>
            <StatusBar backgroundColor='#874469' barStyle='default' />
            <View style={styles.container}>
                <View style={styles.boxArrow}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Ionicons name="ios-arrow-back-outline" size={28} color="white" />

                    </TouchableOpacity>
                </View>
                <View style={styles.boxTitle}>
                    <Text style={styles.fontTitle}>Attendance</Text>
                </View>
                <View style={styles.boxZero}>
                    <Text></Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 35,
        // marginTop: StatusBar.currentHeight,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 15,
        backgroundColor: '#874469'
        // backgroundColor: '#000'
    },
    boxArrow: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        // backgroundColor: 'green'
    },
    boxTitle: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'orange'

    },
    boxZero: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    fontTitle: {
        fontSize: width / 20,
        color: 'white'
    }
})