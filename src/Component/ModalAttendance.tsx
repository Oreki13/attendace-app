import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Modal, StyleSheet, Text, View, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { Center } from './Center';

interface ModalAttendanceProps {
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    loadingModal: boolean,
    setLoadingModal: React.Dispatch<React.SetStateAction<boolean>>

}

const { width, height } = Dimensions.get('window')

export const ModalAttendance: React.FC<ModalAttendanceProps> = ({ visible, setVisible, loadingModal, setLoadingModal }) => {
    const [errorMsg, setErrorMsg] = useState<any | null>(null)
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [hasPermission, setHasPermmision] = useState<any | null>(null)
    const [loadingGet, setLoadingGet] = useState<boolean>(true)
    const [geoCode, setGeoCode] = useState<Location.LocationGeocodedAddress | null>(null)

    useEffect(() => {
        (async () => {
            if (visible) {
                let location = await Location.getCurrentPositionAsync({});
                console.log(location, "asdasdwaW");
                setLocation(location);
            }
        })();
    }, [visible]);

    useEffect(() => {
        (async () => {
            if (location) {
                let geocode = await Location.reverseGeocodeAsync({ latitude: location.coords.latitude, longitude: location.coords.longitude })
                if (geoCode) {

                    console.log(geocode, "ANJAYE");
                    setGeoCode(geoCode)
                    setLoadingModal(false)
                    console.log(geoCode[0].street);
                }
            }
        })();
    }, [location])

    return (
        <Modal animationType='fade' visible={visible} transparent={true} statusBarTranslucent={true} hardwareAccelerated={true} >
            <View style={styles.container}>
                {loadingModal && !location && !geoCode ?
                    <ActivityIndicator size='large' color='purpel' />
                    :
                    <>
                        <View style={styles.modalView}>
                            <View style={styles.boxLocation}>
                                <View>
                                    <Text style={styles.fontTitleLocation}>Your Location</Text>
                                    <Text style={styles.fontSubLocation}>{geoCode?.street}</Text>
                                </View>
                                <View>
                                    <Text style={styles.fontTitleLocation}>Office Location</Text>
                                    <Text style={styles.fontSubLocation}>Jalan Kantor</Text>
                                </View>
                            </View>
                            <View style={styles.boxInfo}>
                                <View>
                                    <Text style={styles.fontTitleInfo}>Information</Text>
                                    <Text style={styles.fontSubInfo}>Your is Out of Range</Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.boxBtnPunchIn}>
                                        <View>
                                            <Text style={styles.fontBtnPunchIn}>Punch In</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Button title='close' onPress={() => setVisible(false)} />
                        </View>
                    </>
                }

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