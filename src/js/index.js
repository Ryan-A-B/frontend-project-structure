import Store from "ryans-redux-store";
import reducer from "./reducer.js";
window.store = new Store(reducer, Actions.mapStorageToState, Actions.mapStateToStorage);

require("bootstrap");

import Frame from "./Frame/Index.jsx";
import Index from "./Index/Index.jsx";

const history = ReactRouterRedux.syncHistoryWithStore(ReactRouter.browserHistory, store._store);

ReactDOM.render(
    <ReactRedux.Provider store={store._store}>
        <ReactRouter.Router history={history}>
            <ReactRouter.Route path="/" component={Frame}>
                <ReactRouter.IndexRoute component={Index}/>
            </ReactRouter.Route>
        </ReactRouter.Router>
    </ReactRedux.Provider>,
    document.getElementById("app")
);
