export const getGnomes = () => ({
  type: 'GET_GNOMES'
})
​
export const setVisibilityFilter = () => ({
  type: 'SET_VISIBILITY_FILTER'
})
​
export const toggleTodo = () => ({
  type: 'TOGGLE_TODO'
})
​
export const VisibilityFilters = {
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}