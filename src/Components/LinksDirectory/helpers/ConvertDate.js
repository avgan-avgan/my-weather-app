export const UpperCase = (str)=>{
    return str[0].toUpperCase() + str.slice(1)
}

const Mesyats = (data)=>{
    let mesyats
    switch (data) {
        case 0:
            mesyats = "январь";
            break;
        case 1:
            mesyats = "февраль";
            break;
        case 2:
            mesyats = "март";
            break;
        case 3:
            mesyats = "апрель";
            break;
        case 4:
            mesyats = "май";
            break;
        case 5:
            mesyats = "июнь";
            break;
        case 6:
            mesyats = "июль";
            break;
        case 7:
            mesyats = "август";
            break;
        case 8:
            mesyats = "сентябрь";
            break;
        case 9:
            mesyats = "октябрь";
            break;
        case 10:
            mesyats = "ноябрь";
            break;
        case 11:
            mesyats = "декабрь";
    }
    return mesyats
}

const DniNedeli = (data)=>{
    let den
    switch (data) {
        case 0:
            den = "понедельник";
            break;
        case 1:
            den = "вторник";
            break;
        case 2:
            den = "среда";
            break;
        case 3:
            den = "четверг";
            break;
        case 4:
            den = "пятница";
            break;
        case 5:
            den = "суббота";
            break;
        case 6:
            den = "воскресенье";
    }
    return den
}

const Monat = (data)=>{
    let monat
    switch (data) {
        case 0:
            monat = "Januar";
            break;
        case 1:
            monat = "Februar";
            break;
        case 2:
            monat = "März";
            break;
        case 3:
            monat = "April";
            break;
        case 4:
            monat = "Mai";
            break;
        case 5:
            monat = "Juni";
            break;
        case 6:
            monat = "Juli";
            break;
        case 7:
            monat = "August";
            break;
        case 8:
            monat = "September";
            break;
        case 9:
            monat = "Oktober";
            break;
        case 10:
            monat = "November";
            break;
        case 11:
            monat = "Dezember";
    }
    return monat
}

const WochenTage = (data)=>{
    let tag
    switch (data) {
        case 0:
            tag = "Montag";
            break;
        case 1:
            tag = "Dienstag";
            break;
        case 2:
            tag = "Mittwoch";
            break;
        case 3:
            tag = "Donnerstag";
            break;
        case 4:
            tag = "Freitag";
            break;
        case 5:
            tag = "Samstag";
            break;
        case 6:
            tag = "Sonntag";
    }
    return tag
}

export const Month = (data)=>{
    let month
    switch (data) {
        case 0:
            month = "january";
            break;
        case 1:
            month = "february";
            break;
        case 2:
            month = "march";
            break;
        case 3:
            month = "april";
            break;
        case 4:
            month = "mai";
            break;
        case 5:
            month = "june";
            break;
        case 6:
            month = "july";
            break;
        case 7:
            month = "august";
            break;
        case 8:
            month = "september";
            break;
        case 9:
            month = "october";
            break;
        case 10:
            month = "november";
            break;
        case 11:
            month = "december";
    }
    return month
}

export const Week = (data)=>{
    let day
    switch (data) {
        case 0:
            day = "sunday";
            break;
        case 1:
            day = "monday";
            break;
        case 2:
            day = "tuesday";
            break;
        case 3:
            day = "wednesday";
            break;
        case 4:
            day = "thursday";
            break;
        case 5:
            day = "friday";
            break;
        case 6:
            day = "saturday";
    }
    return day
}

export const DateToUnity = (text)=>{
    let unity, day,month, week, date
    unity = new Date(text).getTime()/1000
    date = new Date(unity*1000)
    day = '0' + date.getDate()
    month = Month(date.getMonth())
    week = Week(date.getDay())
    return `${month} ${day.substr(-2)} ${week}`
}

export const UnityToDate = (dt, my_lang)=>{
    let D, M, Y, W, data
    data = new Date(dt*1000)
    D = '0' + data.getDate()
    M = my_lang === 'en'? Month(data.getMonth()) :
        my_lang === 'de' ? Monat(data.getMonth()) :
            Mesyats(data.getMonth())
    W = my_lang === 'en' ? Week(data.getDay()) :
        my_lang === 'de' ? WochenTage(data.getDay()) :
            DniNedeli(data.getDay())
    return `${M} ${D.substr(-2)} ${W}`
}

export const Temp = (Kalvin)=>
    Math.round(Kalvin-273.15)

export const Pressure = (hPa)=>
    Math.round(hPa*0.75006)

export const Wind = (speed)=>
    Math.round(speed)

export const Visibility = (data)=>
    Math.round(data)


export const Sun = (date)=> {
    let h,m
    h = '0' + new Date(date * 1000).getHours()
    m = "0" + new Date(date * 1000).getMinutes()
    return h.substr(-2) + ":" + m.substr(-2)
}

const FixDate = ()=>
    new Date().getDate() === 31 ? 0 : new Date().getDate()

const Filter = (arr)=>
    arr.filter(v=>v)

export const ConvertDate = (list, index)=>{
    // alert(JSON.stringify(list[0].dt))
    let arr =  list.map((v,i)=>{
        // alert(new Date(v.dt*1000).getDate() + ' - ' + (new Date().getDate() + index))
        return new Date(v.dt*1000).getDate() === FixDate() + index ?
            v : ''
    })
    return Filter(arr)
}