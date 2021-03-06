import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';
import { CardHome } from '../../Component/CardHome';
import { Center } from '../../Component/Center';
import { DetailHome } from '../../Component/DetailHome';
import { DummyContext } from '../../Context/DummyData';
import { HomeParamList, HomeStackNavProp } from '../../Router/ParamList/HomeParamList';



interface IndexHomeProps {
    navigation: StackNavigationProp<HomeParamList, 'HomeScreen'>
    route: RouteProp<HomeParamList, 'HomeScreen'>;
}
// const tt = () => {
//     return <Ionicons name="md-notifications-outline" size={38} color="#000" />
// }
const { width, height } = Dimensions.get('window')


export const IndexHome: React.FC<IndexHomeProps> = ({ navigation }: HomeStackNavProp<'HomeScreen'>) => {
    const [blured, setBlured] = useState(false)
    const fadeAnimation = useRef<Animated.Value>(new Animated.Value(0)).current
    const { MenuData } = useContext(DummyContext)
    console.log(moderateScale(30, 1), "Hasil scale");

    const fadeIn = async () => {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
        }).start();
    };
    const fadeOut = () => {
        Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start();
    };


    const handelOnScroll = async (e: any) => {
        if (e.nativeEvent.contentOffset.y < 5) {
            await fadeOut()
        }

    }

    // console.log(fadeAnimation);

    return (

        <>

            <Center>
                <View style={styles.boxInit}>

                    <View style={styles.boxScroll}>


                        <DetailHome />

                        {/* <View style={styles.lineBlur}></View> */}
                        {/* {blured ? */}
                        {/* : null
                    } */}

                        <View style={{ position: 'relative' }}>

                            <Animated.View style={{ ...styles.animateBox, opacity: fadeAnimation }}>
                                <LinearGradient
                                    style={styles.lineBlur}
                                    // colors={['rgba(245, 245, 245, 0.85)', 'rgba(255, 255, 255, 0.1)']}
                                    colors={['#f5f5f5', '#f5f5f5ee', '#f5f5f5dc', '#f5f5f57c', '#f5f5f521']}

                                    pointerEvents={'none'}
                                />
                            </Animated.View>

                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} onMomentumScrollEnd={handelOnScroll} onScrollBeginDrag={() => fadeIn()} scrollEventThrottle={1} alwaysBounceVertical={true} horizontal={false}>
                            <View style={styles.boxCard}>
                                {MenuData.map((data, idx) => {
                                    return (
                                        <CardHome key={idx} title={data.title} icon={data.icon} badge={data.badges} linkTo={data.linkTo} navigation={navigation} />
                                    )
                                })}
                            </View>
                        </ScrollView>

                    </View>
                    {/* <CardHome>
                {tt}
            </CardHome> */}
                </View>
            </Center>


        </>
    );
}

const styles = StyleSheet.create({
    boxInit: {
        backgroundColor: '#874469',
        // flex: 1,
        // position: 'absolute',
        // bottom: 0,
        width: width,
        alignItems: 'flex-start',
        // borderBottomLeftRadius: 25
        // paddingHorizontal: 25,
        // paddingTop: 20,
        // borderTopLeftRadius: 25,
        // borderTopRightRadius: 25,
    },

    boxScroll: {
        // marginHorizontal: 20,
        // position: 'relative',
        backgroundColor: '#f5f5f5',
        // backgroundColor: '#000',
        paddingTop: moderateScale(1),

        justifyContent: 'center',
        // borderTopLeftRadius: -10,
        borderTopRightRadius: 49,
    },
    boxCard: {
        // position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignContent: 'space-around',
        flexWrap: 'wrap',
        // backgroundColor: '#f5f5f5',
        // width: width,
        paddingHorizontal: moderateScale(25),
        paddingBottom: moderateScale(15),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,

    },
    lineBlur: {
        height: 45,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    animateBox: {
        position: 'absolute',
        // top: '80%',
        left: 0,
        width: '98%',
        zIndex: 2,
        // backgroundColor: 'blue',
        // paddingVertical: 8,
        // paddingHorizontal: 16,
        height: 45,

    }


})