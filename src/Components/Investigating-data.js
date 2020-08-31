const Filter = (arr)=>{
    // alert(JSON.stringify(arr))
    return arr.filter(v=>v)
}

const Compare_Dates = (item)=>{
    return new Date(item.dt*1000).getDate() === new Date().getDate() ?
        item : null
}

const Dates = (list)=>{
    return list.map((v)=>{
        return Compare_Dates(v)
    })
}

export const Investigating = ({data})=>{
    // alert(JSON.stringify(data.list.length))
    let arr = Dates (data.list)
    return JSON.stringify(Filter(arr))
}