import comics from "./comics"
import AppCard from "./AppCards"
function Main() {
    return <main className="main">
        <div className="container">
            <button className="main-btn"><a href="">CURRENT SERIES</a></button>
            {/* CARDS */}
            <div className="cards">
                <div className="flex-card">
                    {comics.map((curCard) => (
                        <AppCard 
                        key = {`${curCard.id}`}
                        title = {curCard.title}
                        series = {curCard.series}
                        thumb = {curCard.thumb}
                        />
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