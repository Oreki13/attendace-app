import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Button, Text } from 'react-native';
import { AuthParamList, AuthNavProp } from '../ParamList/AuthParamList';
import { AuthContext } from '../../Context/AuthProvider';
import { Center } from '../../Component/Center';
import { IndexAuth } from '../../Screen/Auth/Index'
import { Login } from '../../Screen/Auth/Login';
import { Register } from '../../Screen/Auth/Register';

interface AuthStackProps {

}

const Stack = createStackNavigator<AuthParamList>();
// const Login = ({ navigation }: AuthNavProp<'Login'>) => {
//     const { login } = useContext(AuthContext)
//     return (
//         <Center>
//             <Text>I'am a login screen</Text>
//             <Button
//                 title='Move Register'
//                 onPress={() => {
//                     navigation.navigate('Register');
//                 }}
//             />
//             <Button
//                 title='Log me In'
//                 onPress={() => {
//                     login()
//                 }}
//             />
//         </Center>
//     );
// };
// const Register = ({ navigation }: AuthNavProp<'Register'>) => {
//     return (
//         <Center>
//             <Text>I'am a register screen</Text>
//             <Button
//                 title='Move Login'
//                 onPress={() => {
//                     navigation.navigate('Login');
//                 }}
//             />
//         </Center>
//     );
// };

export const AuthStack: React.FC<AuthStackProps> = ({ }) => {
    return (
        <Stack.Navigator initialRouteName='Index'>
            <Stack.Screen
                options={{
                    header: () => null
                }}
                name='Login'
                component={Login}
            />
            <Stack.Screen
                options={{
                    header: () => null,
                }}
                name='Register'
                component={Register}
            />
            <Stack.Screen
                options={{
                    header: () => null
                }}
                name='Index'
                component={IndexAuth}
            />
        </Stack.Navigator>
    );
}