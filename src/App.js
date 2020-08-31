import React,{Component} from "react";
import {FetchData} from "./Components/FetchData";


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            getData: false,
        }
    }

    render() {
        let{getData} = this.state
        // alert(JSON.stringify(items.list))
        // alert(JSON.stringify(arr_of_date))
        return (
            <div>
                <FetchData/>
            </div>
        )
    }
}