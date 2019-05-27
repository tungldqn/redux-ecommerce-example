import { productRoutes } from './product.routes';
import { indexRoutes } from './index.routes';

export const routes = [
  ...indexRoutes,
  ...productRoutes
]