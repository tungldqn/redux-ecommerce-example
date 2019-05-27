import Axios from 'axios';
import { BASE_API } from '../../../environment/environment';
import history from '../../../history';
import { loadProducts, loadProduct, addProduct, deleteProduct } from './product.actions';

export const loadProductsApi = () => {
  return dispatch => {
    Axios.get(`${BASE_API}`).then(res => dispatch(loadProducts(res.data)))
  }
}

export const loadProductApi = product => {
  return dispatch => {
    Axios.get(`${BASE_API}/${product.id}`).then(dispatch(loadProduct(product)))
  }
}

export const deleteProductApi = product => {
  return dispatch => {
    Axios.delete(`${BASE_API}/${product.id}`).then(
      dispatch(deleteProduct(product))
    )
  }
}

export const addProductAPI = product => {
  return () => {
    Axios.post(`${BASE_API}`, product).then(
      history.push('/products')
    )
  }
}

export const editProductAPI = (product, productId) => {
  return () => {
    Axios.put(`${BASE_API}/${productId}`, product)
  }
}