import React, { createContext , useReducer} from "react";
import {ICodeSection} from "../codeSection";

type State  = {
    codeSelected : ICodeSection[]; 
    backDropState: boolean;
    title:string;
};

type Action = {
    type: "selectButton",  codeSelected : ICodeSection[], title: string 
} | { 
    type: "DESACTIVE_BACKDROP"
}; 

type MainContextType = {
    MainState: State,
    dispatch: React.Dispatch<Action>,
};

const InitialState:State= {
    codeSelected:[{complex: false, description: "", index: 1}],
    backDropState: false,
    title :""
};

export const MainContext = createContext<MainContextType>({MainState: InitialState, dispatch: () => null});

const Reducer = (state:State, action:Action):State => {
    switch (action.type) {
        case "selectButton":
            return { title: action.title, codeSelected: action.codeSelected, backDropState: true, }; 
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
