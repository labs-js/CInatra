import React, {
    Component,
    Children,
    PropTypes
} from 'react'

import {
    bindActionCreators
} from 'redux'

import {
    connect
} from 'react-redux'

import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router'

class App extends Component {
    componentWillMount() {}
    render() {
        return (
            <div>
        test
        {this.props.children}
      </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch)
}
export default App;
