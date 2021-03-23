import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Colors from '../../common/Colors'
import PropTypes from 'prop-types'

export const PressButton = ({ title, style, onPress }) => {

    const { backgroundColor: buttonBgColor = Colors.ButtonBg } = style

    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text style={{ color: buttonBgColor == Colors.ButtonBg ? Colors.AppText : Colors.ButtonBg }}>
                {title || 'Press Me'}
            </Text>
        </TouchableOpacity>
    )
}

PressButton.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
}
