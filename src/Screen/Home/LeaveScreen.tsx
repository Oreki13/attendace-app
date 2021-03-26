import BottomSheet from '@gorhom/bottom-sheet';
import { Picker } from '@react-native-picker/picker';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Calendar, DateObject } from 'react-native-calendars';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { moderateScale, scale } from 'react-native-size-matters';
import { HomeParamList } from '../../Router/ParamList/HomeParamList';
import { RootStackIndexParamList } from '../../Router/ParamList/IndexHomeParamList';

interface LeaveScreenProps {
    navigation: StackNavigationProp<RootStackIndexParamList, 'Dashboard'>
    route: RouteProp<HomeParamList, 'Leave'>
}

const { width, height } = Dimensions.get('window')

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
export const LeaveScreen: React.FC<LeaveScreenProps> = ({ navigation, route }) => {
    // console.log(dayjs().add(1, 'M').format('MMMM YYYY'));
    const [tesDummy, setTesDummy] = useState([])
    const [startDate, setStartDate] = useState<string | number | Date | dayjs.Dayjs | undefined>(undefined)
    const [endDate, setEndDate] = useState<string | number | Date | dayjs.Dayjs | undefined>(undefined)
    const [tol, setToL] = useState<React.ReactText>('eng')
    const [reason, setReason] = useState('')
    const [refreshing, setRefreshing] = React.useState(false);
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ['45%', '90%'], []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        () => { }
        return () => {
            setStartDate(undefined)
            setEndDate(undefined)
            setTesDummy([])

        }
    }, [])
    const onDayClick = async (day: DateObject) => {
        const tmp = JSON.parse(JSON.stringify([]))
        const date1 = dayjs(startDate)
        const date2 = dayjs(day.dateString)
        const different = date2.diff(date1, 'd')
        let newDates = JSON.parse(JSON.stringify(tesDummy))

        if (startDate === day.dateString) {
            const tmp = JSON.parse(JSON.stringify([]))
            setTesDummy(tmp)
            setStartDate(undefined)
            setEndDate(undefined)
            return
        }
        if (different < 0) {
            tmp.push({ [day.dateString]: { startingDay: true, color: '#fecb00', textColor: 'black' } })
            setTesDummy(tmp)
            setStartDate(day.dateString)
            setEndDate(undefined)
            return
        }
        if (!startDate && !endDate) {
            newDates.push({ [day.dateString]: { startingDay: true, color: '#fecb00', textColor: 'black' } })
            setTesDummy(newDates)
            setStartDate(day.dateString)

        } else if (startDate && !endDate) {

            setEndDate(day.dateString)
            const tmp = JSON.parse(JSON.stringify([]))
            tmp.push({ [startDate]: { startingDay: true, color: '#fecb00', textColor: 'black' } })
            generatePanjang(different, tmp)
        } else if (startDate && endDate) {
            tmp.push({ [startDate]: { startingDay: true, color: '#fecb00', textColor: 'black' } })
            generatePanjang(different, tmp)
            setEndDate(day.dateString)
        }

    }

    const generatePanjang = (last: any, tmp: any) => {
        let counter = 1
        let dates = dayjs(startDate).format('DD')
        for (let i = 0; i < last; i++) {
            const tt = dayjs(startDate).add(counter, 'day').format('YYYY-MM-DD')
            if (counter == last) {
                tmp[0].[tt] = { selected: true, endingDay: true, color: '#fecb00', textColor: 'gray' }
            } else {
                tmp[0].[tt] = { color: '#975e7ee3' }

            }
            counter++
        }
        setTesDummy(tmp)
    }
    console.log(route.params.data);

    return (
        // <ScrollView style={{ backgroundColor: '#000' }} >
        <View style={styles.containerCal}>
            <View style={styles.calendar}>
                <Calendar
                    // key={endDate}
                    // horizontal={true}
                    // pagingEnabled={true}
                    onDayPress={(day) => { onDayClick(day) }}
                    theme={{
                        backgroundColor: '#874469',
                        calendarBackground: '#874469',
                        monthTextColor: '#e5e5e5',
                        arrowColor: '#fecb00',
                        todayTextColor: '#fecb00',
                        textDisabledColor: '#272727',
                        dayTextColor: '#e5e5e5',
                        textSectionTitleColor: '#e5e5e5',
                        selectedDayBackgroundColor: 'green',
                        'stylesheet.day.period': {
                            base: {
                                alignItems: "center",
                                height: 34,
                                overflow: "hidden",
                                width: 38,
                            },
                        },
                    }}
                    minDate={dayjs().format('YYYY-MM-DD')}
                    maxDate={dayjs().add(3, 'M').format('YYYY-MM-DD')}
                    markedDates={tesDummy[0]}
                    markingType={'period'}
                // calendarWidth={scale(330)}
                // scrollEnabled={true}



                />
            </View>
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={styles.containerForm}>
                    <View style={styles.boxTof}>
                        <Text style={styles.inpTof}>Types Of Left</Text>
                        <View style={styles.boxPicker}>
                            <Picker

                                selectedValue={tol}
                                // style={styles.picker}
                                dropdownIconColor='black'
                                onValueChange={(itemValue, itemIndex) =>
                                    setToL(itemValue)
                                }>
                                <Picker.Item label="Sakit" value="sakit" />
                                <Picker.Item label="Urusan Keluarga" value="urusan keluarga" />
                                <Picker.Item label="Menikah" value="menikah" />

                            </Picker>
                        </View>
                    </View>
                    <View style={styles.boxTof}>
                        <Text style={styles.inpTof}>Document</Text>
                        <View style={styles.boxDocument}>
                            <TouchableOpacity style={styles.boxBtn} onPress={() => navigation.navigate('CameraModal', { prevScreen: 'Leave' })}>
                                <Text style={{ color: 'white' }}>Upload Document</Text>
                            </TouchableOpacity>
                            <View style={styles.boxNameFile}>
                                <Text>{route.params.data ? "Have 1 File" : null}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxReason}>
                        <Text style={styles.inpReason}>Reason</Text>
                        <TextInput
                            placeholder='Type Your Reason Here'
                            style={styles.textInp}
                            onChangeText={(e) => setReason(e)}
                            numberOfLines={5}
                            multiline
                            editable
                            value={reason} />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btnLeave}>
                        <Text style={styles.fontBtn}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
        </View>
        // </ScrollView>



    );
}

const styles = StyleSheet.create({

    containerCal: {
        backgroundColor: "#874469",
        // flex: 1,
        height: "100%",
        paddingTop: moderateScale(5),
        // paddingHorizontal: moderateScale(10)
    },
    calendar: {
        height: scale(330)
    },
    containerForm: {
        // height: scale(270),
        backgroundColor: '#fff',
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        padding: moderateScale(20)
    },
    boxPicker: {
        backgroundColor: '#e5e5e5',
        borderRadius: moderateScale(5)
    },
    textInp: {
        // height: moderateScale(80),

        backgroundColor: '#e5e5e5',
        padding: moderateScale(8),

        borderRadius: moderateScale(5)
    },
    boxTof: {
        marginBottom: moderateScale(7)
    },
    inpTof: {
        marginBottom: moderateScale(5)
    },
    boxReason: {
        marginTop: moderateScale(7)
    },
    inpReason: {
        marginBottom: moderateScale(5)
    },
    btnLeave: {
        backgroundColor: '#874469',
        padding: moderateScale(10),
        marginTop: moderateScale(14),
        borderRadius: moderateScale(5)
    },
    fontBtn: {
        fontSize: moderateScale(15),
        color: '#fff',
        textAlign: 'center'
    },
    boxDocument: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxBtn: {
        backgroundColor: '#874469',
        padding: 10,
        borderRadius: 5
    },
    boxNameFile: {
        marginLeft: 10
    }
})