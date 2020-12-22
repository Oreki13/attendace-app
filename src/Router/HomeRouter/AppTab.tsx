import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppParamList } from '../ParamList/TabParamList';
import { Button, Text, View } from 'react-native';
import { Center } from '../../Component/Center';
import { AuthContext } from '../../Context/AuthProvider';
import { Ionicons } from '@expo/vector-icons'
import { HomeStack, RootHomeStack } from './HomeStack';
import { IndexHome } from '../../Screen/Home/IndexHome';

interface AppTabProps {

}

const Tabs = createBottomTabNavigator<AppParamList>()

// const Home = () => {
//     const { logout } = useContext(AuthContext)
//     return (
//         <Center>

//             <View>
//                 <Text>your in Home</Text>
//             </View>
//             <Button title='LogOut'
//                 onPress={() => logout()}
//             />

//         </Center>
//     )
// }

const Search = () => {
    return (
        <Center>
            <View>
                <Text>
                    Search
                </Text>
            </View>
        </Center>
    )
}

export const AppTab: React.FC<AppTabProps> = ({ }) => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName

                    if (route.name === 'Home') {
                        iconName = 'ios-home-outline'

                    } else if (route.name === 'Search') {
                        iconName = 'ios-search-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#874469',
                inactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen name='Home' component={HomeStack} />
            <Tabs.Screen name='Search' component={Search} />
        </Tabs.Navigator>
    );
}