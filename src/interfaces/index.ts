import { ApiGridItem, ApiProduct } from '../types'

export interface GridItemsState {
    products: ApiGridItem[];
    loading: boolean;
    error: boolean;
}

export interface ProductsState {
    product: ApiProduct;
    loading: boolean;
    error: boolean;
}

export interface ApplicationState {
    grid: GridItemsState;
    product: ProductsState
}
