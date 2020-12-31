import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, moderateScale } from 'react-native-size-matters';

interface CardNotificationProps {
    title: string,
    message: string,
    time: string,
    read: boolean
}

export const CardNotification: React.FC<CardNotificationProps> = ({ title, message, time, read }) => {
    return (
        <View style={{ ...styles.container, backgroundColor: read ? "#f5f5f5" : "#fff" }}>
            <View style={styles.boxFooter}>
                <View style={styles.boxFooter1}>
                    <Text style={styles.fontTof}>{title}</Text>
                </View>
                <View style={styles.boxFooter2}>
                    <Text style={styles.fontBtnCancel}>{time}</Text>
                </View>
            </View>
            <View style={styles.boxInfo}>
                <Text style={styles.fontPnd}>{message}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        // height: scale(150),
        borderRadius: moderateScale(10),
        padding: moderateScale(15),
        marginBottom: moderateScale(15)
    },
    boxInfo: {
        width: '100%',
        marginBottom: moderateScale(15)
    },
    boxFooter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: moderateScale(10)
    },

    fontTof: {
        fontSize: moderateScale(18)
    },
    boxFooter1: {
        width: '68%',
        // borderRightWidth: 1,
        // borderRightColor: '#e5e5e5'
    },
    boxFooter2: {
        width: '32%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'black',

    },
    fontPnd: {
        fontSize: moderateScale(13),
        textAlign: 'justify',
        color: '#898989e7'
    },
    fontBtnCancel: {
        color: '#9d9d9d',
        textAlign: 'center'
    }
})