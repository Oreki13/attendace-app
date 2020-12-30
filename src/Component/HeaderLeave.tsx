import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
interface HeaderLeaveProps {

}

export const HeaderLeave: React.FC<HeaderLeaveProps> = ({ navigation }) => {
    const [language, setLanguage] = useState<React.ReactText>('eng')
    return (
        <SafeAreaView >
            <StatusBar backgroundColor='#874469' />
            <View style={styles.container}>
                <View style={styles.boxArrow}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Ionicons name="ios-arrow-back-outline" size={moderateScale(23)} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxTitle}>
                    <Text style={styles.fontTitle}>Leave</Text>
                    {/* <Picker
                        selectedValue={language}
                        style={styles.picker}
                        dropdownIconColor='white'
                        onValueChange={(itemValue, itemIndex) =>
                            setLanguage(itemValue)
                        }>
                        <Picker.Item label="Desember 2020" value="eng" />
                        <Picker.Item label="Januari 2020" value="js" />
                        <Picker.Item label="October 2020" value="js2" />
                        <Picker.Item label="November 2020" value="js3" />
                    </Picker> */}
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
        height: verticalScale(45),
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
        fontSize: moderateScale(16),
        color: 'white'
    },
    picker: {
        height: '70%',
        // backgroundColor: 'pink',
        width: '73%',
        color: 'white',

    }
})
