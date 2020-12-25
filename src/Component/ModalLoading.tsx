import React from 'react'
import { Button, Dimensions, Modal, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

interface ModalLoadingProps {
    visibleLoading: boolean,
    setVisibleLoading: React.Dispatch<React.SetStateAction<boolean>>

}

const { width, height } = Dimensions.get('window')

export const ModalLoading: React.FC<ModalLoadingProps> = ({ visibleLoading, setVisibleLoading }) => {
    return (
        <Modal animationType='fade' visible={visibleLoading} transparent={true} statusBarTranslucent={true} hardwareAccelerated={true} >
            <View style={styles.container}>
                <ActivityIndicator size='large' color='white' />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        // width: width / 1.2,
        // height: height / 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical: height / 4,
        // marginHorizontal: width / 7,
        backgroundColor: '#22222254'
    },
    modalView: {
        // margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        width: width / 1.1,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    boxLocation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#e5e5e5',
        width: '100%'
    },
    boxInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
        width: '100%',
        marginVertical: 10
    },
    fontTitleLocation: {
        fontSize: width / 22
    },
    fontSubLocation: {
        fontSize: width / 25
    },
    fontTitleInfo: {
        fontSize: width / 22
    },
    fontSubInfo: {
        fontSize: width / 25
    },
    boxBtnPunchIn: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 10
    },
    fontBtnPunchIn: {
        fontSize: width / 24,
        color: 'white'
    }


})