import state from "./redux/state"
import * as serviceWorker from './serviceWorker';
import { rendererEntireTree } from "./render"

rendererEntireTree(state)

serviceWorker.unregister();
