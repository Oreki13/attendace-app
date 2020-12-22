import { FontAwesome5 } from '@expo/vector-icons';
import React, { useContext } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
                            <FontAwesome5 name="user-circle" size={24} color="white" />

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
        height: height / 6.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#874469',

    },
    textWlcb: {
        fontSize: 14,
        color: '#fff'
    },
    textName: {
        fontSize: width / 15,
        fontWeight: '700',
        color: '#fff'
    }
})