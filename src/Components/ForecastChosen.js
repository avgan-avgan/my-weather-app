import React, {Component} from "react";
import {Sun, Wind, Pressure, Temp, UpperCase, Visibility} from "./LinksDirectory/helpers/ConvertDate";
import {CurrentTime} from "./CurrentTime/CurrentTime";

export class ForecastChosen extends Component{
    constructor(props) {
        super(props);
        this.state = CurrentTime()
    }

    componentDidMount() {
        this.interval = setInterval(
            ()=>
                this.setState(CurrentTime()), 1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {
        let{items, fetched_data, my_language} = this.props
        let {hours, minutes} = this.state
        let {dt,main, weather, visibility, wind} = items
        let[arr_items] = weather
        let {temp, feels_like, min, max, sunset, sunrise, pressure, humidity, visible, w_d, time, m_m, k_m, m_s} = my_language
        // console.log(weather)
        let {city} = fetched_data

        return(
            <main>
                <header>
                    <div>
                        {temp} {Temp(main.temp)}&#8451;
                        <br/>
                        {feels_like} {Temp(main.feels_like)}&#8451;
                    </div>
                </header>
                <section className={`middle`}>
                    <aside>
                        <div>{min} {Temp(main.temp_min)}&#8451;</div>
                        <hr/>
                        <div>{sunset} {Sun(city.sunset)}</div>
                        <hr/>
                        <div>{pressure} {Pressure(main.pressure)}{m_m}</div>
                        <hr/>
                        <div>{visible} {Visibility(visibility/1000)}{k_m}</div>
                    </aside>
                    <aside className={`state_box`}>
                        <section>
                            <div>
                                <img src={`http://openweathermap.org/img/wn/${arr_items.icon}@2x.png`} alt={`image`}/>
                            </div>
                        </section>
                    </aside>
                    <aside>
                        <div>{max} {Temp(main.temp_max)}&#8451;</div>
                        <hr/>
                        <div>{sunrise} {Sun(city.sunrise)}</div>
                        <hr/>
                        <div>{humidity} {main.humidity}&#37;</div>
                    </aside>
                </section>
                <footer>
                    <div>{w_d} {Wind(wind.speed)}{m_s}</div>
                    <div>{time} {hours} : {minutes}</div>
                    <div>{UpperCase(arr_items.description)}</div>
                </footer>
            </main>
        )
    }

}