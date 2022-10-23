import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationBar from './src/navigation/TabNavigation';
import 'react-native-url-polyfill/auto';

const App = () => {
    return (
        <NavigationContainer>
            <BottomNavigationBar />
        </NavigationContainer>
    );
};

export default App;