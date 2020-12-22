import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { DateAttendance } from '../../Screen/Home/DateAttendance';
import { AttendanceParamList } from '../ParamList/AttendanceParamList';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Dimensions, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import moment from 'moment'
import { HomeParamList, HomeStackNavProp } from '../ParamList/HomeParamList';
import { RouteProp } from '@react-navigation/native';


interface AttendentStackProps {
    route: RouteProp<HomeParamList, 'Date'>,
    navigation: StackNavigationProp<HomeParamList, 'Date'>
}

const Stack = createStackNavigator<AttendanceParamList>()
const Tab = createMaterialTopTabNavigator<AttendanceParamList>()


export const AttendentStack: React.FC<AttendentStackProps> = ({ navigation, route }: HomeStackNavProp<'Date'>) => {

    const [bulan, setBulan] = useState(moment().format("MMMM"))
    return (
        <Tab.Navigator
            tabBarOptions={{
                scrollEnabled: true,
                activeTintColor: '#fff',
                indicatorStyle: { backgroundColor: '#e5e5e5' },
                allowFontScaling: true,
                style: {
                    backgroundColor: '#874469',
                    // borderTopWidth: 0,
                    elevation: 0
                }
            }}

            lazy={true}
            lazyPreloadDistance={1}
            initialRouteName={route.params?.month}
            initialLayout={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }}
        >

            <Tab.Screen name='January' component={DateAttendance} />
            <Tab.Screen name='February' component={DateAttendance} />
            <Tab.Screen name='March' component={DateAttendance} />
            <Tab.Screen name='April' component={DateAttendance} />
            <Tab.Screen name='Mey' component={DateAttendance} />
            <Tab.Screen name='June' component={DateAttendance} />
            <Tab.Screen name='July' component={DateAttendance} />
            <Tab.Screen name='August' component={DateAttendance} />
            <Tab.Screen name='September' component={DateAttendance} />
            <Tab.Screen name='October' component={DateAttendance} />
            <Tab.Screen name='November' component={DateAttendance} />
            <Tab.Screen name='December' component={DateAttendance} />
        </Tab.Navigator>
    );
}

