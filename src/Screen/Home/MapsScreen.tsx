import React from 'react'
import { ActivityIndicator, Button, Text } from 'react-native';
import { Center } from '../../Component/Center';

interface MapsScreenProps {

}

export const MapsScreen: React.FC<MapsScreenProps> = ({ navigation }) => {
    return (
        <Center>

            <Text>Welcome to the maps</Text>
            <Button title='Backk' onPress={() => navigation.navigate('Search')} />

        </Center>
    );
}