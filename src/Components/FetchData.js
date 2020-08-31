import React, {Component, useEffect} from "react";
import {City, MyAPIKey, StateCode} from "../Constants/constants";
import {Investigating} from "./Investigating-data";
import {MyLinks} from "./LinksDirectory/MyLinks";
import {ChooseLang} from "./Choose_Lang/ChooseLang";
import "../mystyle/my_links.css"
import "../mystyle/my_media_queries.css"


export class FetchData extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fetched_data: {},
            updated_data: [],
            data_loading: false,
            forecast: true,
            forecast_chosen: false,
            options: ['one', 'two', 'three', 'four', 'five'],
            my_lang: 'ru'
        }
    }

    onClick = (str)=>
        this.setState({
            my_lang : str
        })
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.my_lang !== this.state.my_lang){
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${City},${StateCode}&lang=${this.state.my_lang}&appid=${MyAPIKey}`)
                .then(response => response.json())
                .then(
                    data =>
                        this.setState({
                            data_loading: true,
                            fetched_data: data
                        }),
                    err =>
                        this.setState({
                            data_loading: true,
                            error: err
                        })
                )
        }
    }

    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${City},${StateCode}&lang=${this.state.my_lang}&appid=${MyAPIKey}`)
            .then(response => response.json())
            .then(
                data =>
                    this.setState({
                        data_loading: true,
                        fetched_data: data
                    }),
                err =>
                    this.setState({
                        data_loading: true,
                        error: err
                    })
            )
    }

    render() {
        let{fetched_data, my_lang} = this.state
        // alert(my_lang)
        return(
            <div>
                {fetched_data.cod ?
                    <div>
                        <ChooseLang my_lang={my_lang} onClick={(lang)=>this.onClick(lang)}/>
                        <MyLinks
                            fetched_data={fetched_data}
                            my_lang={my_lang}
                        />
                    </div>
                    :
                    'Please waite...'
                }
            </div>
        )
    }

}
