import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { CheckBox, Dimensions, StyleSheet, Text, View } from 'react-native';

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
        marginTop: 18
    },
    boxDetail: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: width / 1.14,
        height: height / 6,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        borderRadius: 10
        // zIndex: -1

    },
    boxTextDetail: {
        marginTop: 4
    },
    TextDetail: {
        fontSize: 15
    },
    boxIsi: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 15
    },
    boxSolo: {
        marginTop: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: 'rgba(199, 199, 199, 0.713);',
        borderRightWidth: 1,
        // padding: 10,
        width: width / 3.9,
        // backgroundColor: 'grey'
    },
    boxIcon: {
        marginBottom: 2
    },
    boxKet: {
        marginBottom: 3
    },
    boxTot: {
        marginBottom: 10
    },
    fontKet: {
        fontSize: 14
    },
    fontTot: {
        fontSize: 13,
        fontWeight: '700'
    }
})