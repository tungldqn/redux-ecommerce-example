import * as types from './product.types';

export const loadProducts = products => ({
  type: types.LOAD_PRODUCTS,
  payload: products
})

export const loadProduct = product => ({
  type: types.LOAD_PRODUCT,
  payload: product
})

export const deleteProduct = product => ({
  type: types.DELETE_PRODUCT,
  payload: product
})

export const addProduct = product => ({
  type: types.ADD_PRODUCT,
  payload: product
})
