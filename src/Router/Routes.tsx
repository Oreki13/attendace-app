import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { Center } from '../Component/Center';
import { AuthNavProp, AuthParamList } from './ParamList/AuthParamList';
import { AuthContext } from '../Context/AuthProvider';
import { AppTab } from './HomeRouter/AppTab';
import { AuthStack } from './AuthRouter/AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Index, RootStackIndex } from './HomeRouter/Index';

interface RoutesProps { }

export const Routes: React.FC<RoutesProps> = ({ }) => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          login()
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size='large' color='black' />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {user ? (
        <RootStackIndex />
      ) : (
          <AuthStack />
        )}
    </NavigationContainer>
  );
};
