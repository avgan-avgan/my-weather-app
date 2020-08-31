import React, {useState} from "react";
import {CountLinks} from "./CountLinks";
import {ConvertDate} from "./helpers/ConvertDate";
import {PopulateButton} from "./PopulateButton";

const style = {
    background: '#5aafba'
}

export const MyLinks = ({fetched_data, my_lang})=>{
    let[index, setIndex] = useState(0)

    return(
        <div>
            <div>
                <CountLinks
                    fetched_data={fetched_data}
                    index={index}
                    my_lang={my_lang}
                />
            </div>
            <br/>
            <div className={`my_links`}>
                {[...Array(5)].map((v, i)=>
                    <div onClick={()=> setIndex(i)} style={index === i ? style : null} key={i}>
                        {/*{alert(JSON.stringify(fetched_data.list))}*/}
                        {ConvertDate(fetched_data.list, i).length ?
                            <PopulateButton arr={(ConvertDate(fetched_data.list, i))} my_lang={my_lang} first_item={i}/> :
                            <PopulateButton arr={(ConvertDate(fetched_data.list, i+1))} my_lang={my_lang} first_item={i}/>
                        }
                    </div>
                )}
            </div>
        </div>
    )
}