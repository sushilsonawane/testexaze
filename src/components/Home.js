import React from 'react'
import { Image, View } from 'react-native'
import { NavRouteNames } from '../common/AppStrings'
import { Styles } from '../common/AppStyles'
import Colors from '../common/Colors'
import LoggedUserInfo from './common/LoggedUserInfo'
import { PressButton } from './common/PressButton'
import SwipeButton from 'rn-swipe-button'
import diamondIcon from '../assets/icons/diamond.png'

const Home = ({ navigation }) => {

    const goToFinalScreen = () => {
        navigation.navigate(NavRouteNames.ThankYouScreen)
    }

    return (
        <View style={Styles.root}>
            <LoggedUserInfo />
            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                <PressButton
                    style={{ ...Styles.commonButton, backgroundColor: Colors.Transparent }}
                    onPress={goToFinalScreen}
                />
                <PressButton
                    style={{ ...Styles.commonButton, backgroundColor: Colors.DarkButtonBg }}
                    onPress={goToFinalScreen}
                />
                <PressButton
                    style={{ ...Styles.commonButton, marginBottom: 20 }}
                    onPress={goToFinalScreen}
                />

                <SwipeButton
                    title={'Slide me to continue'}
                    titleColor={Colors.ButtonBg}
                    railBorderColor={Colors.DarkButtonBg}
                    railFillBackgroundColor={Colors.ButtonBg}
                    railBackgroundColor={Colors.Transparent}
                    shouldResetAfterSuccess
                    thumbIconComponent={() =>
                        <Image
                            source={require('../assets/icons/diamond.png')}
                            style={{ height: 23, width: 23, tintColor: Colors.AppText }}
                        />
                    }
                    thumbIconStyles={{ color: Colors.AppText }}
                    thumbIconBackgroundColor={Colors.ButtonBg}
                    onSwipeSuccess={goToFinalScreen}
                />
            </View>
        </View>
    )
}

export default Home
