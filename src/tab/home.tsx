import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../stack/home/home.stack';
import RestaurantScreen from '../stack/home/resturant';
import CartScreen from '../stack/home/cart';


const Stack = createNativeStackNavigator();

export default function HomeStackNavigator(){
    return (
        <Stack.Navigator 
        screenOptions={{
            headerStyle: {
                backgroundColor: '#111827',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }}
        >
            <Stack.Screen name='Home' component={Home}  
            options={{
                animation:"flip",
                headerShown: false
            }} />
            <Stack.Screen name='RestaurantScreen' component={RestaurantScreen}
            options={{
                headerShown: false
            }}/>
            <Stack.Screen name='Cart' component={CartScreen}
            options={{
                animation:"flip",
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
}

// Animations