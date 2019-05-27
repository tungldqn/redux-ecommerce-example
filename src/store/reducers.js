import { combineReducers } from 'redux';
import { productReducers } from '../containers/products/state/product.reducers';

const reducers = combineReducers({
  productReducers
})

export default reducers