import React from 'react'
import { Text, View } from 'react-native'
import { StringConstants } from '../common/AppStrings'
import { Styles } from '../common/AppStyles'
import LoggedUserInfo from './common/LoggedUserInfo'

const ThankYou = () => {

    return (
        <View style={Styles.root}>
            <LoggedUserInfo />
            <Text style={{ ...Styles.screenHeading1, alignSelf: 'center', marginTop: 50 }}>
                {StringConstants.thankingMessage}
            </Text>
        </View>
    )
}

export default ThankYou
