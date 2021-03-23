import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { NavRouteNames, StringConstants, ValidationMessages } from '../common/AppStrings'
import { Styles } from '../common/AppStyles'
import Colors from '../common/Colors'
import { saveName } from '../redux/actions/NameActions'
import { PressButton } from './common/PressButton'

const Welcome = ({ navigation }) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const saveTheName = () => {
        dispatch(saveName(name))
    }

    const goToHome = () => {
        navigation.navigate(NavRouteNames.HomeScreen)
    }

    const saveNameAndGoNext = () => {
        if (!name.trim()) {
            alert(ValidationMessages.nameRequired)
            return
        }
        saveTheName()
        goToHome()
    }

    return (
        <View style={Styles.root}>
            <TextInput
                style={{ ...Styles.inputText, marginTop: 50 }}
                placeholder={StringConstants.nameInputPlaceholder}
                placeholderTextColor={Colors.AppTextSecondary}
                onChangeText={setName}
            />
            <PressButton
                title={'Dive In'}
                style={Styles.commonButton}
                onPress={saveNameAndGoNext}
            />
        </View>
    )
}

export default Welcome
