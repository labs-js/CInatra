
// export const deleteTime = id => ({ type: types.DELETE_TIME, id })
// export const editTime = (id, text) => ({ type: types.EDIT_TIME, id, text })

export const REQUEST_PROJECTS = "REQUEST_PROJECTS"

let nextAlarmId = 0;
export const getProyects= (projects) => ({
  type: REQUEST_PROJECTS,
  projects: projects
})
