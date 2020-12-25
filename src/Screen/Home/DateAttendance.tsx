import { RouteProp } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Button, Dimensions, SafeAreaView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { log } from 'react-native-reanimated';
import { Center } from '../../Component/Center';
import { YesterdayDate } from '../../Component/YesterdayDate';
import { DummyContext } from '../../Context/DummyData';
import { AttendanceParamList } from '../../Router/ParamList/AttendanceParamList';
import moment from 'moment'
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeParamList } from '../../Router/ParamList/HomeParamList';
import { IndexHomeParamList } from '../../Router/ParamList/IndexHomeParamList';
import { ModalAttendance } from '../../Component/ModalAttendance';
import { ModalLoading } from '../../Component/ModalLoading';
import * as Location from 'expo-location';


interface DateAttendanceProps {
    route: RouteProp<HomeParamList, 'Date'>
    navigation: StackNavigationProp<HomeParamList, 'Date'>
}
type dates = {
    today: {
        punchIn: string | null,
        punchOut: string | null
    } | null,
    yesterday: Array<({
        date: number,
        day: string,
        punchIn: string,
        punchOut: string
    })>,
    month: string
} | null | undefined
const { width, height } = Dimensions.get('window')
export const DateAttendance: React.FC<DateAttendanceProps> = ({ navigation, route }) => {
    const { Attend } = useContext(DummyContext)
    const [myData, setMyData] = useState<dates>(null)
    const [visible, setVisible] = useState(false)
    const [visibleLoading, setVisibleLoading] = useState<boolean>(false)
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [loadingModal, setLoadingModal] = useState(true)
    useEffect(() => {

        const filterert = Attend.filter((e) => e.month == route.name)
        setMyData(filterert[0])

    }, [route.name])

    useEffect(() => {

        (async () => {
            if (route.params) {
                if (route.params.type == 'poto') {
                    GetLocation().then(async (e) => {
                        // console.log(e, 'GetLocation')
                        if (e) {

                            setVisible(true)


                        }

                    }).catch(e => console.log(e)
                    )

                    // if (GetLocation()) {
                    // }
                }
            }
        })();
        // return () => {
        //     clearTimeout(timeout)
        // }
    }, [route.params])
    // console.log(route, 'Dari Attendance');

    const GetLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            ToastAndroid.showWithGravity(
                'Permission to access location was denied',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
            return false
        }
        return true
    }

    if (myData === null || myData === undefined) {
        return <View>
            <Text>No data</Text>
        </View>
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.containerCal}>
                {/* <View style={styles.boxLoading}>
                    <Center>
                        <ActivityIndicator size='large' color='#000' />
                    </Center>
                </View> */}
                {/* <View style={styles.boxCal}>
                <Calendar />
            </View> */}
                <View style={styles.bgColor}></View>
                <View style={styles.boxPunch}>
                    <View style={styles.boxInPunch}>
                        <View style={styles.boxTitle}>
                            <Text style={styles.fontTitle}>Today</Text>
                        </View>
                        <View style={styles.containerPunch}>
                            {myData?.today === null ?
                                <>
                                    <View style={styles.punch}>
                                        {/* <Text style={styles.fontPunch}>Punch In</Text>
                            <Text style={styles.fontTimePunch}>10 : 00</Text> */}
                                        <Text style={styles.fontPunch}>Your not Punch in Today</Text>
                                    </View>
                                    <View style={{ ...styles.punch, borderRightWidth: 0 }}>
                                        {/* <Text style={styles.fontPunch}>Punch Out</Text>
                            <Text style={styles.fontTimePunch}>17 : 00</Text> */}
                                        <TouchableOpacity onPress={() => navigation.navigate('MyModal', { prevScreen: route.name })} activeOpacity={0.6} style={styles.btnGoPunch}>
                                            <View>

                                                <Text style={styles.fontBtn}>Go Punch</Text>

                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </>
                                :
                                <>
                                    <View style={styles.punch}>
                                        <Text style={styles.fontPunch}>Punch In</Text>
                                        <Text style={styles.fontTimePunch}>{myData?.today.punchIn}</Text>

                                    </View>
                                    <View style={{ ...styles.punch, borderRightWidth: 0 }}>

                                        {myData?.today.punchOut === null ?
                                            <TouchableOpacity activeOpacity={0.6} onPress={() => setVisible(true)} style={styles.btnGoPunch}>
                                                <View>
                                                    <Text style={styles.fontBtn}>Go Punch Out</Text>
                                                </View>
                                            </TouchableOpacity>
                                            :
                                            <>
                                                <Text style={styles.fontPunch}>Punch Out</Text>
                                                <Text style={styles.fontTimePunch}>{myData?.today.punchOut}</Text>
                                            </>
                                        }
                                    </View>
                                </>
                            }
                        </View>
                    </View>
                </View>
                {/* <View style={styles.boxToday}>
                <Text style={styles.fontToday}>Today</Text>

            </View> */}
                <View style={styles.boxYesterday}>

                    <Text style={styles.fontYesterday}>Yesterday</Text>
                    <ScrollView>
                        {myData.yesterday.map((data, idx) => {
                            return (

                                <YesterdayDate key={idx} date={data.date} day={data.day} punchIn={data.punchIn} punchOut={data.punchOut} />
                            )
                        })}
                        {/* <YesterdayDate />
                    <YesterdayDate />
                    <YesterdayDate />
                    <YesterdayDate /> */}
                    </ScrollView>
                </View>
                <ModalAttendance loadingModal={loadingModal} setLoadingModal={setLoadingModal} visible={visible} setVisible={setVisible} />
                <ModalLoading visibleLoading={visibleLoading} setVisibleLoading={setVisibleLoading} />
            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    containerCal: {
        // backgroundColor: '#874469',

        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10
    },
    boxCal: {
        marginTop: 10,
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    bgColor: {
        backgroundColor: '#874469',
        position: 'absolute',
        height: height / 10,
        width: width
    },
    boxPunch: {
        // position: 'relative',
        // backgroundColor: 'grey',
        marginTop: width / 15,
        justifyContent: 'center',
        alignItems: 'center',


    },
    boxInPunch: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: width / 1.4,
        borderRadius: 10,
        height: height / 8,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    boxTitle: {
        paddingBottom: 10
    },
    fontTitle: {
        fontSize: width / 20
    },
    containerPunch: {
        flexDirection: 'row'
    },
    punch: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        // paddingRight: 12,
        borderRightColor: '#e5e5e5e5',
        borderRightWidth: 1,
        // backgroundColor: 'green',
        width: width / 3,
        paddingHorizontal: 5
    },
    fontPunch: {
        fontSize: width / 25,
        textAlign: 'center'
    },
    fontTimePunch: {
        fontSize: width / 28,
        fontWeight: '700'
    },
    boxToday: {
        marginTop: 10,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 10,

    },
    fontToday: {
        fontSize: width / 17
    },
    boxYesterday: {

        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        borderRadius: 10,
        // height: height / 1.66,
        // height: '60%',
        flex: 1,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    fontYesterday: {
        fontSize: width / 18,
        textAlign: 'center',
        marginBottom: 5
    },
    btnGoPunch: {
        backgroundColor: '#874469',
        padding: 10,
        borderRadius: 5
    },
    fontBtn: {
        color: 'white'
    },
    boxLoading: {
        backgroundColor: 'rgba(0, 0, 0, 0.255)',
        position: 'absolute',
        flex: 1,
        width: width,
        height: height,
        zIndex: 2

    }
})