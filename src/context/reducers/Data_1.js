import * as TYPES from '../../types/Type'

const data_1 = (state, action) => {
  switch (action.type) {
    case TYPES.REMOVE_DATA: {
      console.log('REMOVE_DATA', action.payload)
      return {
        ...state.data_1,
        data_1: state.data_1.filter((user) => {
          return user.id !== action.payload
        }),
      }
    }
    case TYPES.LOAD_DATA: {
      console.log('Data_1_ADD_USER', action.payload)
      return {
        ...state,
        data_1: action.payload,
      }
    }
    case TYPES.EDIT_DATA: {
      const updateData = action.payload
      console.log('updateDataReducer', updateData)
      const updateDataUpdated = state.data_1.map((user) => {
        if (user.id === updateData.id) {
          return updateData
        }
        return user
      })
      console.log('updateDataUpdated', updateDataUpdated)

      return {
        ...state.data_1,
        data_1: updateData,
      }
    }

    default:
      return state
  }
}

export default data_1
