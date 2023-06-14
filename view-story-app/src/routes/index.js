import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/home';
import { Search } from '../pages/search';
import { Inbox } from '../pages/inbox';
import { New } from '../pages/new';
import { Profile } from '../pages/profile';


const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}
        >
        

            <Tab.Screen
            name='Home'
            component={Home} 
            />
            <Tab.Screen
            name='Search'
            component={Search} 
            />
            <Tab.Screen
            name='Inbox'
            component={Inbox} 
            />
            <Tab.Screen
            name='New'
            component={New} 
            />
            <Tab.Screen
            name='Profile'
            component={Profile} 
            />
        </Tab.Navigator>
    )
}