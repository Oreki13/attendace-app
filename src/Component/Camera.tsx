import { Ionicons } from '@expo/vector-icons';
import { Camera, CameraCapturedPicture } from 'expo-camera';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, ImageBackground, PermissionStatus, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Center } from './Center';

interface CameraProps {

}
const { width, height } = Dimensions.get('window')
export const CameraHome: React.FC<CameraProps> = ({ navigation, route }) => {
    const [hasPermission, setHasPermmision] = useState<any | null>(null)
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [flashCam, setFlashCam] = useState(Camera.Constants.FlashMode.off)
    const [refCam, setRefCam] = useState<Camera | null>()
    const [thePhoto, setThePhoto] = useState<CameraCapturedPicture | null>(null)
    const [preview, setPreview] = useState(false)
    const [ready, setReady] = useState(false)
    const [loadingTake, setLoadingTake] = useState(false)

    // console.log(route, 'Dari Camera');
    useEffect(() => {
        (async () => {
            const { status }: any = await Camera.requestPermissionsAsync();
            setHasPermmision(status === 'granted')
        })();
        return () => {
            setReady(false)
            setThePhoto(null)
            setPreview(false)
            setLoadingTake(false)
        }
    }, [])

    const cekrek = async () => {
        if (refCam) {
            setLoadingTake(true)
            let poto = await refCam.takePictureAsync({
                base64: true,
                quality: 0.5

            })
            if (poto) {
                console.log(poto);
                setLoadingTake(false)
                setThePhoto(poto)
                setPreview(true)
            }

        }
    }

    const closePreview = () => {
        setPreview(false)
        setThePhoto(null)
    }

    const doneTake = () => {
        const dataPhoto = {
            base64: thePhoto?.base64
        }
        navigation.navigate(route.params.prevScreen, { type: 'poto', data: dataPhoto })
    }

    type CameraPreviewProps = {
        photo: CameraCapturedPicture | undefined
    }

    const CameraPreview = ({ photo }: CameraPreviewProps) => {
        if (ready) {
            return (
                <>
                    <Image
                        source={{ uri: photo && photo.uri }}
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent'
                        }}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.boxBtn}>
                            <TouchableOpacity style={styles.button} onPress={() => closePreview()}>
                                <Ionicons name="ios-close-outline" size={28} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boxBtn}>
                            <TouchableOpacity onPress={() => doneTake()} style={styles.button}>
                                <Ionicons name="ios-checkmark-outline" size={28} color="black" />
                            </TouchableOpacity>

                        </View>
                    </View>

                </>
            )
        }
    }

    if (hasPermission === null) {
        return (
            <Center>
                <ActivityIndicator size='large' color='#874469' />
            </Center>
        );
    }

    if (hasPermission === false) {
        return (
            <Center>
                <Text>No access to camera</Text>
            </Center>
        );
    }


    return (
        <View style={styles.container}>
            {preview && thePhoto ?
                <CameraPreview photo={thePhoto} />
                :
                <Camera
                    ref={r => setRefCam(r)}
                    style={styles.camera}
                    type={type}
                    flashMode={flashCam}
                    ratio='16:9'
                    onCameraReady={() => {
                        setReady(true)


                    }}
                    autoFocus='on'>
                    <View style={styles.buttonContainer}>
                        <View style={styles.boxBtn}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    setType(
                                        type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back
                                    );
                                }}>
                                <Ionicons name="camera-reverse-outline" size={24} color="black" />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.boxBtn}>
                            {loadingTake ?
                                <View style={styles.btnCam}>
                                    <ActivityIndicator size='small' color='black' />
                                </View>
                                :

                                <TouchableOpacity style={styles.btnCam} onPress={() => cekrek()}>
                                    <View >
                                        <Ionicons name="camera-outline" size={34} color="black" />
                                    </View>
                                </TouchableOpacity>
                            }

                        </View>
                        <View style={styles.boxBtn}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    setFlashCam(
                                        flashCam === Camera.Constants.FlashMode.off
                                            ? Camera.Constants.FlashMode.torch
                                            : Camera.Constants.FlashMode.off
                                    );
                                }}>
                                {flashCam === Camera.Constants.FlashMode.off ?
                                    <Ionicons name="ios-flashlight-outline" size={24} color="black" />
                                    :
                                    <Ionicons name="ios-flashlight" size={24} color="black" />
                                }
                            </TouchableOpacity>

                        </View>
                    </View>
                </Camera>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    boxBtn: {
        width: width / 3,
        height: height / 8,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonContainer: {

        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',

    },
    button: {
        backgroundColor: '#fff',
        alignSelf: 'flex-end',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    btnCam: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 40
    },
});