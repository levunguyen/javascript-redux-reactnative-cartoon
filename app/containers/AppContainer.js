import React , {Component,PropTypes} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import {ActionCreators} from '../actions'
import {bindActionCreators} from 'redux'

const {
    View,
    Text,
    TouchableHighlight
} = ReactNative

class AppContainer extends Component {
    constructor(props) {
        super(props);

    }

    incrementRecipeCount() {
        this.setState({ recipeCount : this.state.recipeCount +1})
    }

    addRecipe() {
        this.props.addRecipe();
    }

    render() {
        return <View>
            <Text>
                I am App Container ! Recipe Count : {this.props.recipeCount}
            </Text>
            <TouchableHighlight onPress={()=> {this.addRecipe() }}>
                <Text>Add Recipe</Text>
            </TouchableHighlight>
        </View>
    }

}

function mapDispatchToPros(dispatch) {
    return bindActionCreators(ActionCreators,dispatch);
}

export default connect((state)=>{return { recipeCount:state.recipeCount}}, mapDispatchToPros)(AppContainer)