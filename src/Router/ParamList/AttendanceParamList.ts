import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type AttendanceParamList = {

    January: undefined;
    February: undefined;
    March: undefined;
    April: undefined;
    Mey: undefined;
    June: undefined;
    July: undefined;
    August: undefined;
    September: undefined;
    October: undefined;
    November: undefined;
    December: undefined;
}

export type AttendanceStackNavProp<T extends keyof AttendanceParamList> = {
    navigation: StackNavigationProp<AttendanceParamList, T>,
    route: RouteProp<AttendanceParamList, T>
}