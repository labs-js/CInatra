import React, {
    Component,
    PropTypes
} from 'react'
import {
    bindActionCreators
} from 'redux'
import {
    connect
} from 'react-redux'

import {
    startTime,
    tick
} from '../actions';

class mainView extends Component {
    render() {
        return (
          <div className="content">
            mainview
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch)
}

export default mainView
