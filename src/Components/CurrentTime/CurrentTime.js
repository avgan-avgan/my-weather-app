const getCurrentTime = ()=> new Date()

const abstractClockTime = date=>
    ({
        minutes: date.getMinutes(),
        hours: date.getHours()
    })



const compose = (...func)=>
    (arg)=>
        func.reduce((composed, f)=>
            f(composed), arg)

const prependZero = key =>
    clockTime => (
        {
            ...clockTime,
            [key]: clockTime[key] < 10 ?
                '0' + clockTime[key] : clockTime[key]
        }
    )

const DoubleDigits = compose(
    prependZero("hours"),
    prependZero("minutes")
)

export const CurrentTime = compose(
    getCurrentTime,
    abstractClockTime,
    DoubleDigits
)