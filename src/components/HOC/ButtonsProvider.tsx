import React, { createContext , useReducer} from "react";

type State  = {
    selectedButton: number,
    ButtonName: string,
}
type Action = {
    type: "selectButton", name: string, value: number, 
} 
type ButtonsContextType = {
    ButtonsState: State,
    dispatch: React.Dispatch<Action>,
} ; 

const InitialState:State= {
    selectedButton: 0,
    ButtonName: "Prueba"
}

export const ButtonsContext = createContext<ButtonsContextType>({ButtonsState: InitialState, dispatch: () => null});

const Reducer = (state:State, action:Action):State => {
    switch (action.type) {
        case "selectButton":
            return {selectedButton:action.value, ButtonName: action.name}
        default:
            return state;
    }
}

const ButtonsProvider:React.FC = (props) => {
    const [ButtonsState, dispatch] = useReducer(Reducer, InitialState);
    
    return <ButtonsContext.Provider value ={{ButtonsState, dispatch}}>
        {props.children}
    </ButtonsContext.Provider>
}

export default ButtonsProvider;
