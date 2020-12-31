import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
interface CardRequestProps {
    status: string
}

export const CardRequest: React.FC<CardRequestProps> = ({ status }) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxPending}>
                <View style={styles.badges}>
                    <Text style={styles.fontBadges}>{status}</Text>
                </View>
            </View>
            <View style={styles.boxInfo}>
                <Text style={styles.fontTof}>Sick leave requesst</Text>
                <Text style={styles.fontDate}>March 27 - March 28 2020</Text>
            </View>
            <View style={styles.boxFooter}>
                <View style={styles.boxFooter1}>
                    <Text style={styles.fontPnd}>Pending Approval</Text>
                    <Text style={styles.fontName}>Arfandy Nugraha</Text>
                </View>
                <View style={styles.boxFooter2}>
                    <TouchableOpacity style={styles.btnCancel}>
                        <Text style={styles.fontBtnCancel}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: scale(150),
        borderRadius: moderateScale(10),
        padding: moderateScale(15),
        marginBottom: moderateScale(15)
    },
    boxPending: {
        width: '100%',
        marginBottom: moderateScale(10)
    },
    boxInfo: {
        width: '100%',
        marginBottom: moderateScale(15)
    },
    boxFooter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    badges: {
        backgroundColor: '#fff700',
        width: scale(65),
        padding: moderateScale(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(20)
    },
    fontBadges: {
        fontSize: moderateScale(12),
        fontWeight: '700'
    },
    fontTof: {
        fontSize: moderateScale(18)
    },
    fontDate: {
        fontSize: moderateScale(13),
        color: '#898989e7'
    },
    boxFooter1: {
        width: '50%',
        borderRightWidth: 1,
        borderRightColor: '#e5e5e5'
    },
    boxFooter2: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontPnd: {
        fontSize: moderateScale(13),
        color: '#898989e7'
    },
    fontName: {
        fontSize: moderateScale(13),
        color: '#1544ff'
    },
    btnCancel: {
        backgroundColor: 'gray',
        padding: moderateScale(7),
        borderRadius: moderateScale(5),
        width: scale(80)
    },
    fontBtnCancel: {
        color: '#e5e5e5',
        textAlign: 'center'
    }
})