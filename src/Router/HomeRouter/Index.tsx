import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { CameraHome } from '../../Component/Camera';
import { MapsScreen } from '../../Screen/Home/MapsScreen';
import { IndexHomeParamList, RootStackIndexParamList } from '../ParamList/IndexHomeParamList';
import { AppTab } from './AppTab';

interface IndexProps {

}

const Stack = createStackNavigator<IndexHomeParamList>()
const RootStack = createStackNavigator<RootStackIndexParamList>()
export const Index: React.FC<IndexProps> = ({ }) => {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ header: () => null }} name='Index' component={AppTab} />
            <Stack.Screen name='Maps' component={MapsScreen} />
        </Stack.Navigator>
    );
}

export const RootStackIndex = () => {
    return (
        <RootStack.Navigator mode='modal' headerMode='none' screenOptions={{ animationEnabled: true }}>
            <RootStack.Screen options={{ headerShown: false }} name='Dashboard' component={Index} />
            <RootStack.Screen options={{ ...TransitionPresets.ModalPresentationIOS, gestureEnabled: true }} name='CameraModal' component={CameraHome} />
        </RootStack.Navigator>
    )
}