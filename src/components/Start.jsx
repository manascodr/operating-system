import "../utils/css/Start.css"

const Start = () => {
  return (
    <div className="container">
      <div className="start-menu-cont">
        <div className="comps">
          <div className="search-cont">
            <div className="search">
              <img src="../assets/icons/ui/search.png" alt="" />
              <input type="search" className="search" />
            </div>
          </div>

          <div className="apps">
            <div className="title">
              <span>Pinned</span>
              <span className="all">All <img src="../assets/icons/right.svg" alt="" /></span>
              
            </div>
            <div className="apps-cont">
              <div className="app">
                <img src="../assets/icons/explorer.png" alt="" />
                <span>File Explorer</span>
              </div>
              <div className="app">
                <img src="../assets/icons/settings.png" alt="" />
                <span>Settings</span>
              </div>
              <div className="app">
                <img src="../assets/icons/edge.png" alt="" />
                <span>Microsoft Edge</span>
              </div>
              <div className="app">
                <img src="../assets/icons/store.png" alt="" />
                <span>Microsoft Store</span>
              </div>
              <div className="app">
                <img src="../assets/icons/spotify.png" alt="" />
                <span>Spotify</span>
              </div>
              <div className="app">
                <img src="../assets/icons/minecraft.png" alt="" />
                <span>Minecraft</span>
              </div>
              <div className="app">
                <img src="../assets/icons/msoffice.png" alt="" />
                <span>Microsoft Office</span>
              </div>
              <div className="app">
                <img src="../assets/icons/outlook.png" alt="" />
                <span>Microsoft Outlook</span>
              </div>
              <div className="app">
                <img src="../assets/icons/code.png" alt="" />
                <span>VS Code</span>
              </div>
            </div>
              
            </div>
        </div>
      </div>
        <div className="user-cont">
          <div className="user">
            <img src="../assets/icons/user.jpeg" alt="" />
            <span>Manas Singh</span>
          </div>
          <div className="power-btn">
            <img src="../assets/icons/ui/power.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Start