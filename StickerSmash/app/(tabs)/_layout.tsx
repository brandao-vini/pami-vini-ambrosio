import {Tabs} from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#8190db',
                headerStyle: {
                    backgroundColor: '#051e36'
                },
                headerShadowVisible: false,
                headerTintColor: '#8190db',
                tabBarStyle: {
                    backgroundColor: '#051e36'
                }
            }}>

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons
                            name={focused
                                ? 'home-sharp'
                                : 'home-outline'}
                            color={color}
                            size={24}/>
                    )
                }}/>
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons
                            name={focused
                                ? 'information-circle'
                                : 'information-circle-outline'}
                            color={color}
                            size={30}/>
                    )
                }}/>
        </Tabs>
    );
}