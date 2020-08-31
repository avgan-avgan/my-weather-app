import data from "../../../data/lang.json"

const Filter = (arr)=>
    arr.filter(v=>v)

const Map = (str)=> {
    let arr = data.map((v, i) =>
        v.lang === str ? v : null
    )
    return Filter(arr)
}

export const MapLang = (str)=>
    Map(str)
