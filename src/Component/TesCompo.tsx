import React from 'react'
import { Dimensions, RefreshControl, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardRequest } from './CardRequest';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters'

interface TesCompoProps {

}

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
const { width, height } = Dimensions.get('window')

export const TesCompo: React.FC<TesCompoProps> = ({ }) => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        console.log('asdasdasd');

        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <ScrollView
            // alwaysBounceVertical={true}
            contentContainerStyle={styles.containerScroll}
            // showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} enabled={true} onRefresh={onRefresh} />
            }
        >
            {/* <View style={{ paddingBottom: 60 }}> */}
            <CardRequest />
            <CardRequest />
            <CardRequest />
            <CardRequest />
            <CardRequest />
            <CardRequest />


            {/* </View> */}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    cover1: {
        backgroundColor: '#f0f0f0',
        height: scale(20),
        flex: 1
    },
    cover2: {
        backgroundColor: '#874469',
        height: scale(20)
    },
    container: {
        backgroundColor: '#f0f0f0',
        height: height / 1.1,
        marginTop: moderateScale(5),
        // marginBottom: moderateScale(20),
        borderTopRightRadius: moderateScale(13),
        borderTopLeftRadius: moderateScale(13),
        padding: moderateScale(20),
        // justifyContent: 'center',
        alignItems: 'center'
    },
    containerScroll: {
        paddingTop: 10,
        paddingBottom: 50,

    }
})