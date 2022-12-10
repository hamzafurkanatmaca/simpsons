import React,{createContext,useReducer} from 'react';
import store from './store';
import reducer from './reducer';

export const HomeContext = createContext(store);

function HomeProvider({children}) {
    const [state, dispatch] = useReducer(reducer, store);
    return(
        <HomeContext.Provider value={{state,dispatch}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider;