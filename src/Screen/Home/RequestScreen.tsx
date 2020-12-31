import React, { useState } from 'react';
import { Dimensions, RefreshControl, StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { moderateScale, scale } from 'react-native-size-matters';
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
        status: "Gass"
    },
    {
        id: '3',
        status: 'Pending'
    },
    {
        id: '4',
        status: "Di Tolak :v"
    },
    {
        id: '5',
        status: 'Pending'
    }
]

export const RequestScreen: React.FC<RequestScreenProps> = ({ }) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [sEnable, setSEnable] = useState(true)
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        // <SafeAreaView style={{ flex: 1 }}>
        // <ScrollView
        //     // alwaysBounceVertical={true}
        //     contentContainerStyle={styles.containerScroll}
        //     // showsVerticalScrollIndicator={false}
        //     refreshControl={
        //         <RefreshControl refreshing={refreshing} enabled={true} onRefresh={onRefresh} />
        //     }
        // >
        <View style={styles.cover1}>
            <View style={styles.cover2}>
                <View style={styles.container}>
                    {/* <ScrollView
                            refreshControl={
                                <RefreshControl refreshing={refreshing} enabled={true} onRefresh={onRefresh} />
                            }
                            horizontal={false}
                            onScrollBeginDrag={(e) => {
                                if(e.nativeEvent.contentOffset.y === 0){
                                    setSEnable(true)
                             }}
                            }
                            scrollEnabled={sEnable}
                            
                        >
                        </ScrollView> */}
                    <FlatList
                        data={data}
                        renderItem={(d) =>
                            <CardRequest status={d.item.status} />
                        }
                        refreshControl={
                            <RefreshControl refreshing={refreshing} enabled={true} onRefresh={onRefresh} />
                        }
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </View>
        // </ScrollView >
        // </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    cover1: {
        backgroundColor: '#f0f0f0',
        // height: scale(20),
        flex: 1
    },
    cover2: {

        backgroundColor: '#874469',
        // height: scale(20)
    },
    container: {
        backgroundColor: '#f0f0f0',
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
        // paddingTop: 10,
        // paddingBottom: 50,
        flex: 1

    }
})