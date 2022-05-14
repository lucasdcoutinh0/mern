export const Cards = () => {
    return(
    <div className="columns">
        <div className="column mx-6">
            <div className="card">
                <div className="card-content">
                    <p className="title is-5 has-text-dark">
                    "Foram vinte e cinco anos pra" eu me achar lindo
                    <br/>
                    Sempre tive o mesmo rosto
                    <br/>
                    A moda que mudou de gosto
                    </p>
                    <p className="subtitle has-text-grey-dark">
                    Baco Exu Do Blues
                    </p>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item">
                    <a href="/songs"><span>See My Favorite Songs</span></a>
                    </p>
                </footer>
            </div>
        </div>
        <div className="column mx-6">
        <div className="card">
                <div className="card-content">
                    <p className="title is-5 has-text-dark">
                    Of all the gin joints <br/> in all the towns <br/> in all the world, <br/> she walks into mine.
                    </p>
                    <p className="subtitle has-text-grey-dark">
                    Casablanca
                    </p>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item">
                    <a href="/movies"><span>See My Favorite Movies</span></a>
                    </p>
                </footer>
            </div>
        </div>
        <div className="column mx-6">
        <div className="card">
                <div className="card-content">
                    <p className="title is-5 has-text-dark">
                    "How you doin'?"
                    <br/>
                    "We are on a Break!"
                    <br/>
                    “Joey doesn’t share food!”
                    <br/>
                    “I don’t even have a ‘pla.’ ”
                    </p>
                    <p className="subtitle has-text-grey-dark">
                    Friends
                    </p>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item">
                    <a href="/series"><span>See My Favorite Series</span></a>
                    </p>
                </footer>
            </div>
        </div>
    </div>
    )
}