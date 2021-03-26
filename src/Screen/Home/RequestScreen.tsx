import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef } from 'react';
import { Animated, Dimensions, FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { CardRequest } from '../../Component/CardRequest';

interface RequestScreenProps {

}

const { width, height } = Dimensions.get('window')

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const data = [
    {
        id: '1',
        status: "Pending"
    },
    {
        id: '2',
        status: "Diterima"
    },
    {
        id: '3',
        status: 'Pending'
    },
    {
        id: '4',
        status: "Ditolak"
    },
    {
        id: '5',
        status: 'Pending'
    }
]

export const RequestScreen: React.FC<RequestScreenProps> = ({ }) => {
    const [refreshing, setRefreshing] = React.useState(false);
    // const [sEnable, setSEnable] = useState(true)
    const fadeAnimation = useRef<Animated.Value>(new Animated.Value(0)).current
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);

    const fadeIn = async () => {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true
        }).start();
    };
    const fadeOut = () => {
        Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true
        }).start();
    };


    const handelOnScroll = async (e: any) => {
        if (e.nativeEvent.contentOffset.y < 5) {
            await fadeOut()
        }

    }

    return (

        <View style={styles.cover1}>
            <View style={styles.cover2}>
                <View style={styles.container}>

                    <View style={{ position: 'relative', width: width }}>

                        <Animated.View style={{ ...styles.animateBox, opacity: fadeAnimation }}>
                            <LinearGradient
                                style={styles.lineBlur}

                                colors={['#f5f5f5', '#f5f5f5ee', '#f5f5f5dc', '#f5f5f57c', '#f5f5f521']}

                                pointerEvents={'none'}
                            />
                        </Animated.View>

                    </View>
                    <FlatList
                        data={data}
                        renderItem={(d) =>
                            <CardRequest status={d.item.status} />
                        }
                        refreshControl={
                            <RefreshControl refreshing={refreshing} enabled={true} onRefresh={onRefresh} />
                        }
                        onScrollBeginDrag={() => fadeIn()}

                        onScroll={handelOnScroll}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    cover1: {
        backgroundColor: '#f5f5f5',
        flex: 1
    },
    cover2: {

        backgroundColor: '#874469',
    },
    container: {
        backgroundColor: '#f5f5f5',
        // height: height / 1.1,
        marginTop: moderateScale(5),
        // marginBottom: moderateScale(20),
        borderTopRightRadius: moderateScale(13),
        borderTopLeftRadius: moderateScale(13),
        padding: moderateScale(20),
        // justifyContent: 'center',
        alignItems: 'center'
    },
    containerScroll: {
        flex: 1

    },
    animateBox: {
        position: 'absolute',
        // top: '80%',
        left: 0,
        width: '98%',
        zIndex: 2,
        height: 45,

    },
    lineBlur: {
        height: 45,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
})