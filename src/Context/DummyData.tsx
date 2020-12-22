import { Ionicons, Octicons, FontAwesome } from '@expo/vector-icons'
import React, { createContext } from 'react'

interface DummyDataProps {

}

type data = Array<({
    title: string,
    icon: () => JSX.Element,
    badges: {
        total: number,
        bgColor: string,
        fontColor: string
    } | null,
    linkTo: string
})>

type dates = Array<({
    today: {
        punchIn: string | null,
        punchOut: string | null
    } | null,
    yesterday: Array<({
        date: number,
        day: string,
        punchIn: string,
        punchOut: string
    })>,
    month: string
})>

const dataMenu: data = [
    {
        title: 'Notification',
        icon: () => <Ionicons name="md-notifications-outline" size={38} color="black" />,
        badges: {
            total: 5,
            bgColor: 'pink',
            fontColor: 'black'
        },
        linkTo: 'Notification'
    },
    {
        title: 'Request',
        icon: () => <Octicons name="mail-read" size={38} color="black" />,
        badges: {
            total: 1,
            bgColor: 'blue',
            fontColor: 'white'
        },
        linkTo: 'Request'
    },
    {
        title: 'Leave',
        icon: () => <FontAwesome name="calendar-plus-o" size={38} color="black" />,
        badges: {
            total: 8,
            bgColor: 'green',
            fontColor: 'white'
        },
        linkTo: 'Leave'
    },
    {
        title: 'Attendance',
        icon: () => <Ionicons name="calendar-outline" size={38} color="black" />,
        badges: null,
        linkTo: 'Date'
    },
    {
        title: 'PaySlip',
        icon: () => <Octicons name="file" size={38} color="black" />,
        badges: null,
        linkTo: 'PaySlip'
    },
    {
        title: 'Report',
        icon: () => <Octicons name="report" size={38} color="black" />,
        badges: null,
        linkTo: 'Report'
    },


]

const dataAttends: dates = [{
    month: 'December',
    today: { punchIn: '9:30', punchOut: '16:29' },
    yesterday: [
        {
            date: 12,
            day: 'Thu',
            punchIn: '9:48',
            punchOut: '16:47'
        },
        {
            date: 13,
            day: 'Wen',
            punchIn: '9:03',
            punchOut: '17:10'
        },
        {
            date: 14,
            day: 'Sun',
            punchIn: '9:29',
            punchOut: '17:29'
        },
        {
            date: 15,
            day: 'Mon',
            punchIn: '9:24',
            punchOut: '17:12'
        },
        {
            date: 16,
            day: 'Thu',
            punchIn: '9:42',
            punchOut: '17:02'
        }
    ],
},
{
    month: 'November',
    today: { punchIn: '9:30', punchOut: null },
    yesterday: [
        {
            date: 2,
            day: 'Thu',
            punchIn: '9:48',
            punchOut: '16:47'
        },
        {
            date: 3,
            day: 'Wen',
            punchIn: '9:03',
            punchOut: '17:10'
        },
        {
            date: 4,
            day: 'Sun',
            punchIn: '9:29',
            punchOut: '17:29'
        },
        {
            date: 5,
            day: 'Mon',
            punchIn: '9:24',
            punchOut: '17:12'
        },
        {
            date: 6,
            day: 'Thu',
            punchIn: '9:42',
            punchOut: '17:02'
        }
    ],
},
{
    month: 'October',
    today: null,
    yesterday: [
        {
            date: 15,
            day: 'Thu',
            punchIn: '9:48',
            punchOut: '16:47'
        },
        {
            date: 16,
            day: 'Wen',
            punchIn: '9:03',
            punchOut: '17:10'
        },
        {
            date: 17,
            day: 'Sun',
            punchIn: '9:29',
            punchOut: '17:29'
        },
        {
            date: 18,
            day: 'Mon',
            punchIn: '9:24',
            punchOut: '17:12'
        },
        {
            date: 19,
            day: 'Thu',
            punchIn: '9:42',
            punchOut: '17:02'
        }
    ],

}

]

export const DummyContext = createContext<{
    MenuData: data;
    Attend: dates


}>({
    MenuData: dataMenu,
    Attend: dataAttends

})

export const DummyData: React.FC<DummyDataProps> = ({ children }) => {
    return (
        <DummyContext.Provider value={{ MenuData: dataMenu, Attend: dataAttends }}>{children}</DummyContext.Provider>
    );
}