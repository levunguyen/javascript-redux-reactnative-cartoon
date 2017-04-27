import React , {Component,PropTypes} from 'react'
import ReactNative from 'react-native'
import {connect} from 'react-redux'
import {ActionCreators} from '../actions'
import {bindActionCreators} from 'redux'

const {
    View,
    Text,
    TextInput,
    TouchableHighlight
} = ReactNative

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientInput : ''
        }
    }

    incrementRecipeCount() {
        this.setState({ recipeCount : this.state.recipeCount +1})
    }

    addRecipe() {
        this.props.addRecipe();
    }

    searchPressed() {
        this.props.fetchRecipes(this.state.ingredientInput).then((res)=>{
            console.log("Response " + res);
        })
    }

    render() {
        return <View>
            <Text>
                I am App Container ! Recipe Count : {this.props.recipeCount}
            </Text>
            <TouchableHighlight onPress={()=> {this.addRecipe() }}>
                <Text>Add Recipe</Text>
            </TouchableHighlight>
            <View>
                <TextInput
                    returnKeyType="search"
                    placeholder="Ingredents (comma delimited)"
                    onChangeText = {(ingredientInput) => this.setState({ingredientInput})}
                    value = {this.state.ingredientInput}
                    />
                <TouchableHighlight  onPress={ () => this.searchPressed() }>
                    <Text>Fetch Recipes</Text>
                </TouchableHighlight>

            </View>



        </View>
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        recipeCount: state.recipeCount
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AppContainer)