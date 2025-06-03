import comics from "./comics"
function Main() {
    return <main className="main">
        <div className="container">
            <button className="main-btn"><a href="">CURRENT SERIES</a></button>
            {/* CARDS */}
            <div className="cards">
                <div className="flex-card">
                    {comics.map((curCard) => (
                        <div className="col-2" key={`${curCard.id}`}>
                            <div className="thumb"><img src={curCard.thumb} alt={curCard.title} /></div>
                            <div className="card-title">{curCard.series}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* /CARDS */}
            <div className="flex-more-btn">
                <button className="more-btn"><a href="">LOAD MORE</a></button>
                </div>
        </div>

    </main>
}
export default Main