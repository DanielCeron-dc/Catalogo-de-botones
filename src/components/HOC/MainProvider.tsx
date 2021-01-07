import React, { createContext , useReducer} from "react";

type State  = {
    selectedButton: number,
    ButtonName: string,
    backDropState: boolean
};
type Action = {
    type: "selectButton", name: string, value: number, 
} | { type: "DESACTIVE_BACKDROP"}; 


type MainContextType = {
    MainState: State,
    dispatch: React.Dispatch<Action>,
};


const InitialState:State= {
    selectedButton: 0,
    ButtonName: "Prueba",
    backDropState: false, 
};

export const MainContext = createContext<MainContextType>({MainState: InitialState, dispatch: () => null});

const Reducer = (state:State, action:Action):State => {
    switch (action.type) {
        case "selectButton":
            return { selectedButton:action.value, ButtonName: action.name, backDropState: true}; 
        case "DESACTIVE_BACKDROP":
            return {...state, backDropState: false};
        case undefined:
            throw new Error("La accion no esta definida");

        default:
           return state; 
    }
}

const MainProvider:React.FC = (props) => {
    const [MainState, dispatch] = useReducer(Reducer, InitialState);

    return <MainContext.Provider value ={{MainState, dispatch}}>
        {props.children}
    </MainContext.Provider>
}

export default MainProvider;
