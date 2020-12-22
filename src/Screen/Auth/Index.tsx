import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Center } from '../../Component/Center';
import { AuthNavProp, AuthParamList } from '../../Router/ParamList/AuthParamList';

interface IndexAuthProps {
    navigation: StackNavigationProp<AuthParamList, 'Index'>;
    route: RouteProp<AuthParamList, 'Index'>;
}

const { width } = Dimensions.get('window');
export const IndexAuth: React.FC<IndexAuthProps> = ({ navigation }: AuthNavProp<'Index'>) => {
    return (
        <Center>
            <View >
                <Text style={styles.titleAtt}>eAttendance</Text>
            </View>
            <View>
                <Text style={styles.subTitle}>Easy Way to Record & Track Attendance</Text>
            </View>
            <View>
                <Image style={styles.img} source={require('../../../assets/images/profiling.png')} />
            </View>
            <View>
                <Text style={styles.title2}>
                    Mark Attendance
                </Text>
            </View>
            <View>
                <Text style={styles.subTitle}>
                    Fast & easy way to record and track attendance of your employees
                </Text>
            </View>
            <View style={styles.boxbtn}>
                <View>
                    <TouchableOpacity style={styles.boxBtnLogin} onPress={() => navigation.navigate('Login')}>
                        <View>
                            <Text style={styles.textLogin}>Log In</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.boxBtnSignUp} onPress={() => navigation.navigate('Register')}>
                        <View>
                            <Text style={styles.textSignUp}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Center>
    );
}

const styles = StyleSheet.create({
    img: {
        width: width / 1.1,
        height: width / 1.4,
        marginVertical: width / 5
    },
    titleAtt: {
        fontSize: width / 13,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: width / 28,
        textAlign: 'center'
    },
    title2: {
        fontSize: width / 18,
        fontWeight: 'bold'
    },
    boxbtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: width / 10,
        width: width
    },
    boxBtnLogin: {
        // backgroundColor: '#000',
        width: width / 2.3,
        height: width / 8,
        borderRadius: width / 3,
        borderColor: '#4f4f4f',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxBtnSignUp: {
        backgroundColor: '#874469',
        width: width / 2.3,
        height: width / 8,
        borderRadius: width / 3,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textLogin: {
        color: "#4f4f4f",
        fontSize: width / 22
    },
    textSignUp: {
        color: "#fff",
        fontSize: width / 22
    }
})