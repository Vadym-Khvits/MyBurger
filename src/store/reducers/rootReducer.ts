import { combineReducers } from 'redux';
import burgerBuilderReducer from './burgerBuilder';
import { BurgerBuilderState } from './burgerBuilder';
import orderReducer from './order';
import { OrderState } from './order';

export interface AppState {
    burgerBuilder: BurgerBuilderState;
    order: OrderState;
}

const rootReducer = combineReducers<AppState>({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
  });

  export default rootReducer;

