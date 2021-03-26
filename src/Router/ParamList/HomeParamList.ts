import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type HomeParamList = {
    HomeScreen: undefined;
    Product: {
        name: string
    },
    Date: {
        month: string
    },
    Maps: undefined,
    Notification: undefined,
    Request: undefined,
    Leave: {
        data: object | null
    } | undefined,
    PaySlip: undefined,
    Report: undefined

}

export type HomeStackNavProp<T extends keyof HomeParamList> = {
    navigation: StackNavigationProp<HomeParamList, T>;
    route: RouteProp<HomeParamList, T>;
};