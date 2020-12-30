import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { log } from 'react-native-reanimated';
import { AuthContext } from '../../Context/AuthProvider';
import { Center } from '../../Component/Center';
import { HomeParamList, HomeStackNavProp } from '../ParamList/HomeParamList';
import faker from 'faker';
import { IndexHome } from '../../Screen/Home/IndexHome';
import { HeaderHome } from '../../Component/HeaderHome';
import { AttendentStack } from './AttendentStack';
import { HeaderAttendance } from '../../Component/HeaderAttendance';
import { RouteProp } from '@react-navigation/native';
import { MapsScreen } from '../../Screen/Home/MapsScreen';
import { AppTab } from './AppTab';
import { CommingSoon } from '../../Screen/Home/CommingSoon';
import { LeaveScreen } from '../../Screen/Home/LeaveScreen';
import { HeaderLeave } from '../../Component/HeaderLeave';

interface HomeStackProps {
    navigation: StackNavigationProp<HomeParamList, 'Date'>
    route: RouteProp<HomeParamList, 'Date'>
}

const Stack = createStackNavigator<HomeParamList>()
const RootStack = createStackNavigator()

// const Feed = ({ navigation }: HomeStackNavProp<'Feed'>) => {
//     return (
//         <Center>
//             <FlatList
//                 style={{ width: '100%' }}
//                 renderItem={({ item }) => {
//                     return <Button title={item} onPress={() => {
//                         navigation.navigate('Product', {
//                             name: item
//                         })
//                     }} />
//                 }}
//                 keyExtractor={(product, id) => product + id}
//                 data={Array.from(Array(50), () => faker.commerce.product())}
//             />
//         </Center>
//     )
// }

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
                //  header: ({ scene, previous, navigation }) => <HeaderAttendance navigation={navigation} />,
                // headerStyle: { backgroundColor: '#874469', elevation: 0 },
                // headerTitle: 'Attendance',
                // headerTitleAlign: 'center',
                // headerStatusBarHeight: 30,

                header: () => <HeaderAttendance navigation={navigation} />


            }} name='Date' component={AttendentStack} />
            <Stack.Screen name="Notification" component={CommingSoon} />
            <Stack.Screen name="Request" component={CommingSoon} />
            <Stack.Screen options={{ header: () => <HeaderLeave navigation={navigation} /> }} name="Leave" component={LeaveScreen} />
            <Stack.Screen name="PaySlip" component={CommingSoon} />
            <Stack.Screen name="Report" component={CommingSoon} />
            {/* <Stack.Screen name='Maps' component={MapsScreen} /> */}
        </Stack.Navigator>
    );
}

