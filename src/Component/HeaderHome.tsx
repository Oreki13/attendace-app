import { FontAwesome5 } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { AuthContext } from '../Context/AuthProvider';

interface HeaderHomeProps {

}
const { width, height } = Dimensions.get('window')
export const HeaderHome: React.FC<HeaderHomeProps> = ({ }) => {
    const { logout } = useContext(AuthContext)
    return (
        <>
            <SafeAreaView>
                <StatusBar backgroundColor='#874469' />
                <View style={styles.boxHeader}>
                    <View>
                        <Text style={styles.textWlcb}>Welcome Back</Text>
                        <Text style={styles.textName}>Arfandy</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => logout()}>
                            <FontAwesome5 name="user-circle" size={moderateScale(26)} color="white" />

                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    boxHeader: {
        flexDirection: 'row',
        height: verticalScale(95),
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: moderateScale(12),
        backgroundColor: '#874469',

    },
    textWlcb: {
        fontSize: moderateScale(14),
        color: '#fff'
    },
    textName: {
        fontSize: moderateScale(22, 2),
        fontWeight: '700',
        color: '#fff'
    }
})