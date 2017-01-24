import {
    combineReducers
} from 'redux'

const startProjectList = []

const projects = (state = startProjectList, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    projects
})

export default rootReducer
