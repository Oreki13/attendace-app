import { RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Center } from '../../Component/Center';
import { HeaderAttendance } from '../../Component/HeaderAttendance';
import { HeaderHome } from '../../Component/HeaderHome';
import { HeaderLeave } from '../../Component/HeaderLeave';
import { AuthContext } from '../../Context/AuthProvider';
import { CommingSoon } from '../../Screen/Home/CommingSoon';
import { IndexHome } from '../../Screen/Home/IndexHome';
import { LeaveScreen } from '../../Screen/Home/LeaveScreen';
import { NotifScreen } from '../../Screen/Home/NotifScreen';
import { RequestScreen } from '../../Screen/Home/RequestScreen';
import { HomeParamList, HomeStackNavProp } from '../ParamList/HomeParamList';
import { AttendentStack } from './AttendentStack';

interface HomeStackProps {
    navigation: StackNavigationProp<HomeParamList, 'Date'>
    route: RouteProp<HomeParamList, 'Date'>
}

const Stack = createStackNavigator<HomeParamList>()
const RootStack = createStackNavigator()


const Product = ({ route }: HomeStackNavProp<'Product'>) => {
    console.log(route);

    return (
        <Center>
            <View>
                <Text>{route.params.name}</Text>
            </View>
        </Center>
    )
}

export const HomeStack: React.FC<HomeStackProps> = ({ navigation }) => {
    const { logout } = useContext(AuthContext)
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen options={{
                header: () => <HeaderHome />
            }} name='HomeScreen' component={IndexHome} />
            <Stack.Screen options={({ route }) => ({
                headerTitle: route.params.name
            })} name='Product' component={Product} />
            <Stack.Screen options={{
                headerTintColor: '#fff',
                header: () => <HeaderAttendance navigation={navigation} />


            }} name='Date' component={AttendentStack} />
            <Stack.Screen name="Notification" component={NotifScreen}
                options={{
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: '#874469', elevation: 0 },
                }}
            />
            <Stack.Screen name="Request" component={RequestScreen} options={{
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#874469', elevation: 0 },
            }} />
            <Stack.Screen options={{
                header: () => <HeaderLeave navigation={navigation} />
            }} name="Leave" component={LeaveScreen} />
            <Stack.Screen name="PaySlip" component={CommingSoon} />
            <Stack.Screen name="Report" component={CommingSoon} />
            {/* <Stack.Screen name='Maps' component={MapsScreen} /> */}
        </Stack.Navigator>
    );
}

