import React from "react";
import {Now} from "./P_B_Components/Now";
import {Others} from "./P_B_Components/Others";

export const PopulateButton = ({arr, my_lang, first_item})=> {
        // alert(JSON.stringify(arr))

        let [first] = arr
        let {dt,weather, dt_txt} = first
        let[second] = weather

        return(
            <section>
                    {first_item === 0 ?
                        <Now my_lang={my_lang}/> :
                        <Others dt={dt} my_lang={my_lang} state={second}/>
                    }
            </section>
        )
}