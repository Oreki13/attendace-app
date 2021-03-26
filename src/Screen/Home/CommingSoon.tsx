import React from 'react'
import { Text } from 'react-native';
import { Center } from '../../Component/Center';

interface CommingSoonProps {

}

export const CommingSoon: React.FC<CommingSoonProps> = ({ }) => {
    return (
        <Center>
            <Text>
                Comming Soon Screen
            </Text>
        </Center>
    );
}