import { ApiGridItemModel, ApiProductModel } from '../types'
export interface GridItemsState {
    products: ApiGridItemModel[];
    loading: boolean;
    error: boolean;
}
export interface ProductsState {
    product: ApiProductModel;
    loading: boolean;
    error: boolean;
}
export interface ApplicationState {
    grid: GridItemsState;
    product: ProductsState
}
