import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';

interface YesterdayDateProps {

    date: number,
    day: string,
    punchIn: string,
    punchOut: string
}

const { width, height } = Dimensions.get('window')

export const YesterdayDate: React.FC<YesterdayDateProps> = ({ date, day, punchIn, punchOut }) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxDate}>
                <Text style={styles.fontTanggal}>{date}</Text>
                <Text style={styles.fontDay}>{day}</Text>
            </View>
            <View style={styles.boxPunchIn}>
                <Text style={styles.fontPunhIn}>Punch In</Text>
                <Text style={styles.fontTimePunchIn}>{punchIn}</Text>
            </View>
            <View style={styles.boxPunchOut}>
                <Text style={styles.fontPunchOut}>Punch Out</Text>
                <Text style={styles.fontTimePunchOut}>{punchOut}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e5e5',
        marginTop: 10,
        flexDirection: 'row',
        height: height / 9,
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    boxDate: {
        backgroundColor: '#874469',
        height: '75%',
        width: '15%',
        paddingVertical: 8,
        justifyContent: 'space-around',
        alignItems: 'center',

        borderRadius: 10
    },
    fontTanggal: {
        fontSize: width / 23,
        color: 'white'
    },
    fontDay: {
        fontSize: width / 25,
        color: 'white'
    },
    boxPunchIn: {
        // backgroundColor: 'orange',
        height: '75%',
        width: '30%',
        paddingVertical: 8,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    fontPunhIn: {
        fontSize: width / 23
    },
    fontTimePunchIn: {
        fontSize: width / 25,
        fontWeight: '700'
    },
    boxPunchOut: {
        // backgroundColor: 'pink',
        height: '75%',
        width: '30%',
        paddingVertical: 8,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    fontPunchOut: {
        fontSize: width / 23
    },
    fontTimePunchOut: {
        fontSize: width / 25,
        fontWeight: '700'
    }
})