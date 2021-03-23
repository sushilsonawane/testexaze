import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavRouteNames } from './src/common/AppStrings'
import Welcome from './src/components/Welcome'
import Home from './src/components/Home'
import configureStore from './src/redux/reducers/RootReducer'
import Colors from './src/common/Colors'
import ThankYou from './src/components/ThankYou'

const store = configureStore()

const Stack = createStackNavigator()

const App = ({ isEmulator }) => {
  alert('You are running the app on ' + (isEmulator ? 'an Emulator' : 'a Device'))
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={NavRouteNames.WelcomeScreen}
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.AppHeaderBg
              },
              headerTitleAlign: 'center',
              headerTintColor: Colors.AppText
            }}
          >
            <Stack.Screen name={NavRouteNames.WelcomeScreen} component={Welcome} />
            <Stack.Screen name={NavRouteNames.HomeScreen} component={Home} />
            <Stack.Screen name={NavRouteNames.ThankYouScreen} component={ThankYou} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  )
}

export default App
