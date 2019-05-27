import ProductList from "../containers/products/list/ProductList";
import ProductAdd from "../containers/products/add/ProductAdd";
import ProductEdit from '../containers/products/edit/ProductEdit';

export const productRoutes = [
  {
    path: '/products',
    component: ProductList,
    exact: true
  },
  {
    path: '/products/add',
    component: ProductAdd,
    exact: true
  },
  {
    path: '/products/edit/:id',
    component: ProductEdit,
    exact: true
  }
]