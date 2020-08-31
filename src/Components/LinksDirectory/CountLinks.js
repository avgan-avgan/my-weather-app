import React,{useState} from "react";
import {ConvertDate} from "./helpers/ConvertDate";
import {ForecastChosen} from "../ForecastChosen";
import {Sun} from "./helpers/ConvertDate";
import {MapLang} from "../Choose_Lang/helper/MapLang";

const style = {
    background: '#5aafba',
    borderRadius:`3px`,
}
const style_hr = {
    borderTop: `1px solid white`
}

export const CountLinks = ({fetched_data, index, my_lang})=>{
    let [chosen, setChosen] = useState(0)
    // alert(JSON.stringify(MapLang(option)))
    let [my_language] = MapLang(my_lang)

    let {list} = fetched_data
    let arr = ConvertDate(list, index)

    return (
        <section className={'chosen_forecast'}>
            <div className={'info_container'}>
                {arr.length ?
                    <ForecastChosen
                        items={arr[chosen] ? arr[chosen] : arr[chosen-chosen]}
                        fetched_data={fetched_data}
                        my_language={my_language}
                    /> :
                    <ForecastChosen
                        items={list[0]}
                        fetched_data={fetched_data}
                        my_language={my_language}
                    />
                }
            </div>
            <div className={'link_buttons'}>

                {arr.length ?
                    arr.map((v,i)=>
                        <section onClick={()=> setChosen(i)} style={chosen === i ? style : null} key={i}>
                            <aside>{Sun(v.dt)}</aside>
                            <aside style={style_hr}>{v.weather[0].description}</aside>
                        </section>
                ) :
                    [list[0]].map((v,i)=>
                        <section onClick={()=> setChosen(i)} style={chosen === i ? style : null} key={i}>
                            <aside>{Sun(v.dt)}</aside>
                            <aside style={style_hr}>{v.weather[0].description}</aside>
                        </section>
                )}
            </div>
        </section>
    )
}