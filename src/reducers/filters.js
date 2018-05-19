// Filters Reducer

const filtersReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

export default (state = filtersReducerDefault, action) => {
  switch (action.type) {
  case 'SET_TEXT_FILTER':
    alert(action.text)
    return {
      ...state,
      text: action.text
    }
  case 'SORT_BY_DATE':
    return {
      ...state,
      sortBy: 'date'
    }
  case 'SET_START_DATE':
    return {
      ...state,
      startDate: action.startDate
    }
  case 'SET_END_DATE':
    return {
      ...state,
      endDate: action.endDate
    }
  default:
    return state
  }
}