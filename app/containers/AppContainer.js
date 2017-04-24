import React , {Component,PropTypes} from 'react'
import ReactNative from 'react-native'
import {connect} from ''

const {
    View,
    Text
} = ReactNative

class AppContainer extends Component {
    render() {
        return <View>
            <Text>
                I am App Container
            </Text>
        </View>
    }

}

export default AppContainer