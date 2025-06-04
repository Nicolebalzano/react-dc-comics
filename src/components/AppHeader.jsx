function Header(){
   const menuVoices = [
        {
          id: 1,
            title : "Character"
        },
          {
              id: 2,
            title : "Comics"
        },
          {
              id: 3,
            title : "Movies"
        },
          {
              id: 4,
            title : "TV"
        },
          {
              id: 5,
            title : "Games"
        },
          {
              id: 6,
            title : "Collectibles"
        },
        {
            id: 7,
            title : "Fans"
        },
          {
              id: 8,
            title : "News"
        },
          {
              id: 9,
            title : "Shop"
        }
    ]
    return <header className="header">
        <div className="container">
            <div className="flex-col">
        <img src="/dc-logo.png" alt="" className= "col-30"/>
        <ul className= "col-70">
            {menuVoices.map((curVoice, index) =>
            <li key={`${curVoice.id}`}>
              <div>
                <a href="">{curVoice.title}</a>
                </div>
              </li> 
            )}
        </ul>
        </div>
        </div>
        
    </header>
}
export default Header