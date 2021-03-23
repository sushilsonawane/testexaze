import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Styles } from '../../common/AppStyles'

const LoggedUserInfo = () => {

    const { name } = useSelector(state => state.name)

    return (
        <Text style={{ ...Styles.normalText, marginTop: 10, alignSelf: 'flex-end' }}>
            Logged in as :
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}> {name}</Text>
        </Text>
    )
}

export default LoggedUserInfo
