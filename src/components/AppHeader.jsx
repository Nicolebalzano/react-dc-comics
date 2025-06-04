function Header(){
    const menuVoices = [
        {
            title : "Character"
        },
          {
            title : "Comics"
        },
          {
            title : "Movies"
        },
          {
            title : "TV"
        },
          {
            title : "Games"
        },
          {
            title : "Collectibles"
        },
        {
            title : "Fans"
        },
          {
            title : "News"
        },
          {
            title : "Shop"
        }
    ]
    return <header className="header">
        <div className="container">
            <div className="flex-col">
        <img src="/dc-logo.png" alt="" className= "col-30"/>
        <ul className= "col-70">
            {menuVoices.map((curVoice) =>
            <li><div><a href="">{curVoice.title}</a></div></li> 
            )}
        </ul>
        </div>
        </div>
    </header>
}
export default Header