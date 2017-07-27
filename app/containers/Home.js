import React, {Component} from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
    searchPressed() {
        this.props.fetchRandomQuote();
    }
    render() {
        
        return(
            <View>
                <View>
                    <Text>Holy Moly! Home View</Text>
                    <TouchableHighlight onPress={() => this.searchPressed()}>
                    <Text>Fetch me a Chuck Norris quote.</Text>
                    </TouchableHighlight>
                    <Text>{this.props.randomQuote}</Text>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        randomQuote: state.randomQuote
    }
}
export default connect(mapStateToProps)(Home);