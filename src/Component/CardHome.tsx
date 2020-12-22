import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { AttendanceStackNavProp } from '../Router/ParamList/AttendanceParamList';
import { HomeParamList, HomeStackNavProp } from '../Router/ParamList/HomeParamList';
import moment from 'moment'

interface CardHomeProps {
    // children: () => JSX.Element
    title: string;
    icon: () => JSX.Element | null,
    badge: {
        total: number,
        bgColor: string,
        fontColor: string
    } | null,
    linkTo: string,
    navigation: StackNavigationProp<HomeParamList, "HomeScreen">

}
const { width, height } = Dimensions.get('window')

export const CardHome: React.FC<CardHomeProps> = ({ title, icon, badge, linkTo, navigation }) => {
    const [elev, setElev] = useState(4)

    // const handelClick = (link: string) => {
    //     let t = link
    //     setElev(0)

    return (
        <TouchableOpacity onPress={() => navigation.navigate(linkTo, { month: moment().format("MMMM") })} activeOpacity={1} onPressIn={() => setElev(0)} onPressOut={() => setElev(4)}>
            <View style={{ ...styles.boxCard, elevation: elev }}>
                {/* {children()} */}
                {badge ?
                    <View style={styles.boxNotif}>
                        <View style={{ ...styles.badge, backgroundColor: badge.bgColor }}>
                            <Text style={{ ...styles.fontNotif, color: badge.fontColor }}>{badge.total}</Text>
                        </View>
                    </View>
                    : <View style={styles.boxNotif}>
                        <View style={{ ...styles.badge, backgroundColor: 'none' }}>
                            <Text style={styles.fontNotif}></Text>
                        </View>
                    </View>
                }
                <View style={styles.boxIcon}>{icon()}</View>
                <View style={styles.boxText}>
                    <Text>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    boxCard: {
        backgroundColor: '#fff',
        width: width / 2.5,
        height: height / 6,
        justifyContent: 'space-around',
        alignItems: 'center',
        // paddingVertical: width / 12,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    },
    boxIcon: {
        marginBottom: 10
    },
    boxText: {

        paddingBottom: 15
    },
    boxNotif: {
        alignItems: 'flex-end',
        // backgroundColor: '#fbb',
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 10
    },
    badge: {
        backgroundColor: '#FFCD36',
        width: 23,
        height: 23,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fontNotif: {
        color: '#000',
        fontSize: 12
    }
})