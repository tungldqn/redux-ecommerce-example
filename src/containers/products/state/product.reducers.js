import * as types from './product.types';

const initialState = {
  products: [],
  product: {},
  addProductSuccess: false
}

export const productReducers = (state = initialState, action) => {
  switch(action.type){
    case types.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case types.DELETE_PRODUCT:
      const productList = state.products.filter(newProduct => newProduct !== action.payload)
      return {
        ...state,
        products: productList
      }
    case types.LOAD_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    case types.ADD_PRODUCT:
      if(action.payload){
        return {
          ...state,
          addProductSuccess: true
        }
      }
      return state
    default: {
      return state
    }
  }
}