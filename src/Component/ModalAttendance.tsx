import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Modal, StyleSheet, Text, View, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { Center } from './Center';
import * as geolib from 'geolib';


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
    const [geoCodeOffice, setGeoCodeOffice] = useState<Location.LocationGeocodedAddress | null>(null)
    const [distance, setDistance] = useState<number | null>(null)

    const officeLoc = {
        latitude: -3.4008726,
        logtitude: 104.2750363
    }
    useEffect(() => {
        (async () => {
            if (visible) {
                Location.hasServicesEnabledAsync().then(async (resPerm) => {
                    console.log(resPerm);

                    if (resPerm) {
                        let theLocation = await Location.getCurrentPositionAsync({ accuracy: Location.LocationAccuracy.High });
                        setLocation(theLocation);
                        if (theLocation) {
                            // console.log(theLocation, "Get LatLong");
                            let geocode = await Location.reverseGeocodeAsync({ latitude: theLocation.coords.latitude, longitude: theLocation.coords.longitude })
                            let geocodeOffice = await Location.reverseGeocodeAsync({ latitude: officeLoc.latitude, longitude: officeLoc.logtitude })
                            if (geocode && geocodeOffice) {
                                // console.log(geocode, "ANJAYE");
                                // console.log(geocodeOffice, "ANJAYEOfi");
                                setGeoCodeOffice(geocodeOffice[0])
                                setGeoCode(geocode[0])
                                setLoadingModal(false)
                                setDistance(
                                    geolib.getDistance(
                                        { latitude: theLocation.coords.latitude, longitude: theLocation.coords.longitude },
                                        { latitude: officeLoc.latitude, longitude: officeLoc.logtitude }
                                    )

                                );

                            }
                        }

                    } else {
                        setVisible(false)
                        ToastAndroid.showWithGravity(
                            'Need Permission to access location',
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM
                        );
                    }
                }).catch(e => console.log(e))
            }
        })();
        return () => {
            setGeoCode(null)
            setLocation(null)
            setGeoCodeOffice(null)
            setDistance(null)
        }
    }, [visible]);

    // console.log(!location, 'tesLoc');
    // console.log(!geoCode, 'tesGeo');

    return (
        <Modal animationType='fade' visible={visible} transparent={true} statusBarTranslucent={true} hardwareAccelerated={true} >
            <View style={styles.container}>
                {loadingModal || !location || !geoCode || !geoCodeOffice ?
                    <ActivityIndicator size='large' color='purpel' />
                    :
                    <>
                        <View style={styles.modalView}>
                            <View style={styles.boxLocation}>
                                <View>
                                    <Text style={styles.fontTitleLocation}>Your Location</Text>
                                    <Text style={styles.fontSubLocation}>{geoCode.city}, {geoCode.street}</Text>
                                </View>

                            </View>
                            <View style={styles.boxOffice}>
                                <View>
                                    <Text style={styles.fontTitleLocation}>Office Location</Text>
                                    <Text style={styles.fontSubLocation}>{geoCodeOffice.city}, {geoCodeOffice.street}</Text>
                                </View>
                            </View>
                            <View style={styles.boxInfo}>
                                <View>
                                    <Text style={styles.fontTitleInfo}>
                                        Your Distance</Text>
                                    <Text style={styles.fontSubInfo}>{distance} Meter</Text>
                                </View>
                                <View>
                                    <Text style={styles.fontTitleInfo}>
                                        Min Distance</Text>
                                    <Text style={styles.fontSubInfo}>500 Meter</Text>
                                </View>

                            </View>
                            <View style={styles.boxBtn}>


                                <View>
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => setVisible(false)} style={styles.boxBtnClose}>
                                        <View>
                                            <Text style={styles.fontBtnClose}>Close</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    {distance < 500 ?
                                        <TouchableOpacity activeOpacity={0.6} style={styles.boxBtnPunchIn}>
                                            <View>
                                                <Text style={styles.fontBtnPunchIn}>Punch In</Text>
                                            </View>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity activeOpacity={1} style={styles.boxBtnPunchInOut}>
                                            <View>
                                                <Text style={styles.fontBtnPunchIn}>Out Of Range</Text>
                                            </View>
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>
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
        justifyContent: 'flex-start',
        backgroundColor: '#e5e5e5',
        width: '100%',
        padding: 8,
        borderRadius: 5
    },
    boxOffice: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#e5e5e5',
        width: '100%',
        marginTop: 10,
        padding: 8,
        borderRadius: 5
    },
    boxInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
        width: '100%',
        marginVertical: 10,
        padding: 8,
        borderRadius: 5
    },
    fontTitleLocation: {
        fontSize: width / 22,
        fontWeight: '700'
    },
    fontSubLocation: {
        fontSize: width / 25
    },
    fontTitleInfo: {
        fontSize: width / 22,
        fontWeight: '700'
    },
    fontSubInfo: {
        fontSize: width / 25,
        textAlign: 'center'
    },
    boxBtnPunchIn: {
        backgroundColor: '#874469',
        padding: 10,
        borderRadius: 5,
        width: width / 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxBtnPunchInOut: {
        backgroundColor: '#77395b',
        padding: 10,
        borderRadius: 5,
        width: width / 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxBtnClose: {
        backgroundColor: 'rgba(232, 134, 43, 0.94)',
        padding: 10,
        borderRadius: 5,
        width: width / 3,
        justifyContent: 'center',
        alignItems: "center"
    },
    fontBtnPunchIn: {
        fontSize: width / 24,
        color: 'white'
    },
    fontBtnClose: {
        fontSize: width / 24,
        color: 'rgb(255, 255, 255)'
    },
    boxBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 5
    }


})