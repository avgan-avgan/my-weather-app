import React from "react";
import {UnityToDate} from "../helpers/ConvertDate";

export const Others = ({dt, my_lang, state})=>{
    return(
        <aside>
            {UnityToDate(dt, my_lang)}
            <hr/>
            {state.description}
        </aside>
    )
}