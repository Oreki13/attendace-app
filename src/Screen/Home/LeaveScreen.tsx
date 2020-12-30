import React, { useEffect, useState } from 'react'
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { Center } from '../../Component/Center';
import dayjs from 'dayjs'
import { Calendar, CalendarList, DateObject } from 'react-native-calendars';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';

interface LeaveScreenProps {

}

const { width, height } = Dimensions.get('window')

export const LeaveScreen: React.FC<LeaveScreenProps> = ({ }) => {
    // console.log(dayjs().add(1, 'M').format('MMMM YYYY'));
    const [tesDummy, setTesDummy] = useState([])
    const [startDate, setStartDate] = useState<string | null>(null)
    const [endDate, setEndDate] = useState<string | null>('')
    const [language, setLanguage] = useState('eng')
    const [reason, setReason] = useState('')



    useEffect(() => {
        () => { }
        return () => {
            setStartDate(null)
            setEndDate(null)
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
            setStartDate(null)
            setEndDate(null)
            return
        }
        if (different < 0) {
            tmp.push({ [day.dateString]: { startingDay: true, color: '#fecb00', textColor: 'black' } })
            setTesDummy(tmp)
            setStartDate(day.dateString)
            setEndDate(null)
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

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
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
                <View style={styles.containerForm}>
                    <View style={styles.boxTof}>
                        <Text style={styles.inpTof}>Types Of Left</Text>
                        <View style={styles.boxPicker}>
                            <Picker

                                selectedValue={language}
                                style={styles.picker}
                                dropdownIconColor='black'
                                onValueChange={(itemValue, itemIndex) =>
                                    setLanguage(itemValue)
                                }>
                                <Picker.Item label="Capek" value="eng" />
                                <Picker.Item label="Mager" value="js" />
                                <Picker.Item label="Males" value="js2" />
                                <Picker.Item label="Tidur" value="js3" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.boxReason}>
                        <Text style={styles.inpReason}>Reaseon</Text>
                        <TextInput
                            placeholder='Type Your Reason HEREE!!!'
                            style={styles.textInp}
                            onChangeText={(e) => setReason(e)}
                            numberOfLines={5}
                            multiline
                            editable
                            value={reason} />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btnLeave}>
                        <Text style={styles.fontBtn}>Apply for Leave</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>



    );
}

const styles = StyleSheet.create({

    containerCal: {
        backgroundColor: "#874469",
        // flex: 1,
        height: "100%",
        paddingTop: moderateScale(10),
        // paddingHorizontal: moderateScale(10)
    },
    calendar: {
        height: scale(330)
    },
    containerForm: {
        height: scale(270),
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
    }
})