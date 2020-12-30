import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

interface DetailHomeProps {

}
const { width, height } = Dimensions.get('window')
export const DetailHome: React.FC<DetailHomeProps> = ({ }) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxDetail}>
                <View style={styles.boxTextDetail}>
                    <Text style={styles.TextDetail}>Detail</Text>
                </View>
                <View style={styles.boxIsi}>
                    <View style={styles.boxSolo}>
                        <View style={styles.boxIcon}>
                            <FontAwesome name="smile-o" size={28} color="rgba(23, 124, 255, 0.857)" />
                        </View>
                        <View style={styles.boxKet}>
                            <Text style={styles.fontKet}>Attend</Text>
                        </View>
                        <View style={styles.boxTot}>
                            <Text style={styles.fontTot}>23</Text>
                        </View>
                    </View>
                    <View style={styles.boxSolo}>
                        <View style={styles.boxIcon}>
                            <FontAwesome name="meh-o" size={28} color="rgba(255, 162, 23, 0.857)" />
                        </View>
                        <View style={styles.boxKet}>
                            <Text style={styles.fontKet}>Permission</Text>
                        </View>
                        <View style={styles.boxTot}>
                            <Text style={styles.fontTot}>3</Text>
                        </View>
                    </View>
                    <View style={{ ...styles.boxSolo, borderRightWidth: 0 }}>
                        <View style={styles.boxIcon}>
                            <FontAwesome name="frown-o" size={28} color="rgba(255, 23, 23, 0.857)" />
                        </View>
                        <View style={styles.boxKet}>
                            <Text style={styles.fontKet}>Alpha</Text>
                        </View>
                        <View style={styles.boxTot}>
                            <Text style={styles.fontTot}>2</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        backgroundColor: 'transparent',
        marginTop: moderateScale(12),


    },
    boxDetail: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: moderateScale(10),
        width: scale(306),

        height: verticalScale(125),
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,

        borderRadius: moderateScale(10)
        // zIndex: -1

    },
    boxTextDetail: {
        paddingTop: moderateScale(8),
        // backgroundColor: 'pink'
    },
    TextDetail: {
        fontSize: moderateScale(16),

    },
    boxIsi: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: moderateScale(10)
    },
    boxSolo: {
        marginTop: moderateScale(3),
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: 'rgba(199, 199, 199, 0.713);',
        borderRightWidth: 1,
        // padding: 10,
        width: scale(100),
        // backgroundColor: 'grey'
    },
    boxIcon: {
        marginBottom: moderateScale(2)
    },
    boxKet: {
        marginBottom: moderateScale(3)
    },
    boxTot: {
        marginBottom: moderateScale(10)
    },
    fontKet: {
        fontSize: moderateScale(13)
    },
    fontTot: {
        fontSize: moderateScale(12),
        fontWeight: '700'
    }
})