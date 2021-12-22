import { applyMiddleware } from "redux";
import logger from './logger';
import thunk from './thunkFunc'

export default applyMiddleware(
    thunk,
    logger,
)