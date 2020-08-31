import React from "react";
import {MapLang} from "../../Choose_Lang/helper/MapLang";

export const Now = ({my_lang})=>{
    let lang = MapLang(my_lang)
    let[date] = lang
    return(
        <aside style={{
            padding: `1.5vw`
        }}>
            {date.now}
        </aside>
    )
}