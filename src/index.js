import { reRenderEntireTree } from './render';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";

reRenderEntireTree(state);


serviceWorker.unregister();