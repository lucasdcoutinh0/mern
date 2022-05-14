import {MoviesHeader} from '../components/MoviesHeader'
import { useEffect, useState } from "react"
import axios from "axios"

const Movies = () => {
    const [series, setSeries] = useState([])
    
    useEffect(() => {
        const response = axios.get('https://node-study-lucas.herokuapp.com/movie')
            .then((response) => setSeries(response.data))
    },[])

    return(
        <section class="hero is-danger is-fullheight">
            <MoviesHeader/>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns is-mobile">
                        <div class="column">
                        <p class="title is-4">Drama</p>
                            <ul>
                                {series.filter((item) => {
                                    if(item.type === 'Drama'){
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
                        <p class="title is-4">Brasileiro</p>
                            <ul>
                                {series.filter((item) => {
                                    if(item.type === 'Brasileiro'){
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
                        <p class="title is-4">Commedy</p>
                            <ul>
                                {series.filter((item) => {
                                    if(item.type === 'Commedy'){
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
export default Movies