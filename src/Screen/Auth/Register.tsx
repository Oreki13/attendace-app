import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Center } from '../../Component/Center';
import { AuthContext } from '../../Context/AuthProvider';
import { AuthNavProp, AuthParamList } from '../../Router/ParamList/AuthParamList';

interface RegisterProps {
    navigation: StackNavigationProp<AuthParamList, 'Register'>;
    route: RouteProp<AuthParamList, 'Register'>;
}

const { width, height } = Dimensions.get('window');

export const Register: React.FC<RegisterProps> = ({ navigation }: AuthNavProp<'Register'>) => {
    const { login } = useContext(AuthContext)
    return (
        <Center>
            <Image style={styles.image} source={require('../../../assets/images/coworking_.png')} />
            <View style={styles.boxTxtLogin}>
                <Text style={styles.textLogin}>Create Account</Text>
                <Text style={styles.textSubLogin}>Sign up to get started!</Text>
            </View>
            <View style={styles.boxLogin} >
                <View style={styles.boxInputText}>
                    <TextInput placeholder='First Name' style={styles.textInpt} />
                </View>
                <View style={styles.boxInputText}>
                    <TextInput placeholder='Last Name' style={styles.textInpt} />
                </View>
                <View style={styles.boxInputText}>
                    <TextInput placeholder='E-mail' keyboardType='email-address' autoCompleteType='email' autoCapitalize='none' style={styles.textInpt} />
                </View>
                <View style={styles.boxInputText}>
                    <TextInput placeholder='Password' autoCompleteType='password' autoCapitalize='none' secureTextEntry style={styles.textInpt} />
                </View>
                <View style={styles.boxInputText}>
                    <TextInput placeholder='re-Password' autoCompleteType='password' autoCapitalize='none' secureTextEntry style={styles.textInpt} />
                </View>
                <View style={styles.boxInputText}>
                    <TouchableOpacity style={styles.btnLogin} onPress={() => login()}>
                        <View>
                            <Text style={styles.btnTextLogin}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.boxReg}>
                <Text style={styles.fontReg}>Already Have an account?</Text>
                <Text onPress={() => navigation.navigate("Login")} style={styles.fontRegSignUp}> Sign In.</Text>
            </View>
        </Center>
    );
}

const styles = StyleSheet.create({
    image: {
        width: width / 1,
        height: height / 2,
        flex: 1,
        position: 'absolute',
        opacity: 0.5

    },
    boxLogin: {
        // backgroundColor: '#d4d4d4b0',
        width: width / 1.2,
        // height: height / 2,
        borderRadius: 10
    },
    textLogin: {
        fontSize: width / 12,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    textSubLogin: {
        fontSize: width / 25,
        fontWeight: '600',
        textAlign: 'center',

    },
    boxTxtLogin: {
        // backgroundColor: '#d4d4d4b0',
        borderRadius: 20,
        width: width / 1.5,
        marginBottom: 20,
        padding: 5
    },
    textInpt: {
        borderColor: 'gray',
        paddingHorizontal: 15,
        backgroundColor: '#d4d4d4b0',
        height: width / 8,
        borderRadius: 10,
        fontSize: 19
    },
    boxInputText: {
        marginVertical: 10
    },
    btnLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#874469',
        height: width / 8,
        borderRadius: 10,

    },
    btnTextLogin: {
        fontSize: 19,
        color: '#fff'
    },
    boxReg: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#f5f5f5',
        borderTopColor: "#d9d9d9",
        borderTopWidth: 1,
        width: width,
        paddingVertical: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fontReg: {
        color: '#000'
    },
    fontRegSignUp: {
        color: '#874469',
        fontWeight: '700'
    }
})