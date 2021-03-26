import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import { Center } from '../../Component/Center';
import { AppParamList } from '../ParamList/TabParamList';
import { HomeStack } from './HomeStack';

interface AppTabProps {

}

const Tabs = createBottomTabNavigator<AppParamList>()

const Setting = () => {
    return (
        <Center>
            <View>
                <Text>
                    Setting
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

                    } else if (route.name === 'Setting') {
                        iconName = 'ios-settings-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#874469',
                inactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen name='Home' component={HomeStack} />
            <Tabs.Screen name='Setting' component={Setting} />
        </Tabs.Navigator>
    );
}