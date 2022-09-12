const center = document.getElementsByClassName('FPdoLc lJ9FBc');
const child = document.createElement('div');
child.className = "item-container";

child.innerHTML = `
            <a href="https://youtube.com">
                <div class="item">
                    <div class="iner-circle">
                        <img class="icon" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png" alt="icon">
                    </div>
                    <span class='span'>YouTube</span>
                </div>
            </a>
            <a href="https://github.com/">
                <div class="item">
                    <div class="iner-circle">
                        <img class="icon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="icon">
                    </div>
                    <span class='span'>GitHub</span>
                </div>
            </a>
            <a href="https://robinhood.com/us/en/">
                <div class="item">
                    <div class="iner-circle">
                        <img class="icon" src="https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/607ffb8c2ecf99895f70bf7a_rh.png" alt="icon">
                    </div>
                    <span class='span'>Robinhood</span>
                </div>
            </a>
            <a href="https://www.amazon.com/">
                <div class="item">
                    <div class="iner-circle">
                        <img class="icon" src="https://cdn.freebiesupply.com/logos/large/2x/amazon-icon-logo-png-transparent.png" alt="icon">
                    </div>
                    <span class='span'>Amazon</span>
                </div>
            </a>
            <a href="https://www.netflix.com/browse">
                <div class="item">
                    <div class="iner-circle">
                        <img class="icon" src="https://yoolk.ninja/wp-content/uploads/2020/06/Apps-Netflix-1024x1024.png" alt="icon">
                    </div>
                    <span class='span'>Netflix</span>
                </div>
            </a>
            <a href="https://fmovies.ps/home">
                <div class="item">
                    <div class="iner-circle">
                        <img class="icon" src="https://icons.iconarchive.com/icons/zhoolego/material/512/Movies-icon.png" alt="icon">
                    </div>
                    <span class='span'>Free Movies</span>
                </div>
            </a>
            <a href="https://open.spotify.com/">
                <div class="item">
                    <div class="iner-circle">
                        <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png" alt="icon">
                    </div>
                    <span class='span'>Spotify</span>
                </div>
            </a>
            <a href="https://web.whatsapp.com/">
                <div class="item">
                    <div class="iner-circle">
                        <img class="icon" src="https://cliply.co/wp-content/uploads/2021/08/372108180_WHATSAPP_ICON_400.png" alt="icon">
                    </div>
                    <span class='span'>What's App</span>
                </div>
            </a> 
            <a href="http://localhost:3000/">
                <div class="item">
                    <div class="iner-circle">
                        <img class="icon" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="icon">
                    </div>
                    <span class='span'>localhost-3000</span>
                </div>
            </a> 
            <a href="http://localhost:8080/">
                <div class="item">
                    <div class="iner-circle">
                        <img class="icon" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="icon">
                    </div>
                    <span class='span'>localhost-8080</span>
                </div>
            </a> 
`;
center[0].appendChild(child);