import {SeriesHeader} from '../components/SeriesHeader'
import { useEffect, useState } from "react"
import axios from "axios"

const Series = () => {
    const [series, setSeries] = useState([])
    
    useEffect(() => {
        const response = axios.get('https://node-study-lucas.herokuapp.com/serie')
            .then((response) => setSeries(response.data))
    },[])

    return(
        <section class="hero is-danger is-fullheight">
            <SeriesHeader/>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns is-mobile">
                        <div class="column">
                        <p class="title is-4">Sitcom</p>
                            <ul>
                                {series.filter((item) => {
                                    if(item.type === 'Sitcom'){
                                        return item
                                    }
                                })
                                .map((item, key) => {
                                    return (
                                        <li key={key}><a href={item.path}>{item.name}</a></li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                        <div class="column">
                        <p class="title is-4">Action</p>
                            <ul>
                                {series.filter((item) => {
                                    if(item.type === 'Action'){
                                        return item
                                    }
                                })
                                .map((item, key) => {
                                    return (
                                        <li key={key}><a href={item.path}>{item.name}</a></li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                        <div class="column">
                        <p class="title is-4">Others</p>
                            <ul>
                                {series.filter((item) => {
                                    if(item.type === 'Others'){
                                        return item
                                    }
                                })
                                .map((item, key) => {
                                    return (
                                        <li key={key}><a href={item.path}>{item.name}</a></li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container has-text-centered">
                <a href="/"><button class="button is-light">Go home</button></a>
            </div>
        </section>
    )
}
export default Series