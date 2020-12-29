import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type AttendanceParamList = {

    January: {
        type: string | null,
        data: object | null
    } | undefined;
    February: {
        type: string | null,
        data: object | null
    } | undefined;
    March: {
        type: string | null,
        data: object | null
    } | undefined;
    April: {
        type: string | null,
        data: object | null
    } | undefined;
    Mey: {
        type: string | null,
        data: object | null
    } | undefined;
    June: {
        type: string | null,
        data: object | null
    } | undefined;
    July: {
        type: string | null,
        data: object | null
    } | undefined;
    August: {
        type: string | null,
        data: object | null
    } | undefined;
    September: {
        type: string | null,
        data: object | null
    } | undefined;
    October: {
        type: string | null,
        data: object | null
    } | undefined;
    November: {
        type: string | null,
        data: object | null
    } | undefined;
    December: {
        type: string | null,
        data: object | null
    } | undefined;
}

export type AttendanceStackNavProp<T extends keyof AttendanceParamList> = {
    navigation: StackNavigationProp<AttendanceParamList, T>,
    route: RouteProp<AttendanceParamList, T>
}