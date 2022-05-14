import { SongsHeader } from "../components/SongsHeader"
import { useEffect, useState } from "react"
import axios from "axios"

const Songs = () => {

    const [music, setMusic] = useState([])
    
    useEffect(() => {
        const response = axios.get('https://node-study-lucas.herokuapp.com/music')
            .then((response) => setMusic(response.data))
    },[])

    return(
        <section class="hero is-danger is-fullheight">
            <SongsHeader/>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns is-mobile">
                        <div class="column">
                            <p class="title is-4">Trap/Rap</p>
                            <ul>
                                {music.filter((item) => {
                                    if(item.type === 'Trap/Rap'){
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
                                <p class="title is-4">MPB</p>
                                <ul>
                                {music.filter((item) => {
                                    if(item.type === 'MPB'){
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
                                <p class="title is-4">Samba/Pagode</p>
                                <ul>
                                {music.filter((item) => {
                                    if(item.type === 'Samba/Pagode'){
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

export default Songs