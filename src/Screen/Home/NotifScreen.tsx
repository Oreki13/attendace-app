import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { CardNotification } from '../../Component/CardNotification';

interface NotifScreenProps {

}

const data = [
    {
        id: '1',
        title: 'Request Leave',
        message: 'Anda di izinkan bolos Voluptate cillum enim minim magna cillum duis esse cillum ullamco. Occaecat consectetur minim consequat laboris eiusmod minim amet do.',
        time: '1 minute ago',
        read: false
    },
    {
        id: '2',
        title: 'Attendance',
        message: 'Your punch in at 9:20 AM Consectetur velit pariatur laboris adipisicing exercitation eiusmod Lorem.',
        time: '1 day ago',
        read: false
    },
    {
        id: '3',
        title: 'Attendance',
        message: 'Your Punch Out at 16:29 PM Labore consequat magna occaecat Lorem do occaecat magna.',
        time: '1 day ago',
        read: true
    },
    {
        id: '4',
        title: 'Requst Leave',
        message: 'Your Request has Reject by me Nulla reprehenderit anim nisi officia Lorem laborum.',
        time: '4 day ago',
        read: 'true'
    },
    {
        id: '5',
        title: 'Attendance',
        message: 'Your Punch Out at 04:00 AM Sunt laborum sit id sunt Lorem minim.',
        time: '5 day ago',
        read: true
    }
]
const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export const NotifScreen: React.FC<NotifScreenProps> = ({ }) => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={styles.cover1}>
            <View style={styles.cover2}>
                <View style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={(d) =>
                            <CardNotification title={d.item.title} message={d.item.message} time={d.item.time} read={d.item.read} />
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
    );
}


const styles = StyleSheet.create({
    cover1: {
        backgroundColor: '#e5e5e5',
        // height: scale(20),
        flex: 1
    },
    cover2: {

        backgroundColor: '#874469',
        // height: scale(20)
    },
    container: {
        backgroundColor: '#e5e5e5',
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