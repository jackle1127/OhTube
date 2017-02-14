var scriptInjection = null;
if (window.location.href.indexOf('youtube.com') >= 0 || window.location.href.indexOf('youtu.be') >= 0) {
    scriptInjection = "var videoObject = document.getElementsByTagName('video')[0];\n"
            + "var searchBar = document.getElementById('masthead-search');\n"
            + "searchBar.style.width = '650px';\n"
            + "document.getElementById('page-container').style.marginTop = '30px';\n"

            + "var repeatButton = null;\n"
            + "var ON_COLOR = 'radial-gradient(#a6ffee, #70f2ff)';\n"
            + "var OFF_COLOR = 'radial-gradient(#287eb9, #77c8e6)';\n"

            + "var videoController = document.createElement('div');\n"
            + "videoController.id = 'additionalElement';\n"
            + "videoController.style.display = 'inline-block';\n"
            + "var styleSheet = document.createElement('style');"
            + "styleSheet.innerHTML = \n"
            + "        '#additionalElement button {'\n"
            + "        + '    -webkit-tap-highlight-color: rgba(0,0,0,0);'\n"
            + "        + '    background: rgba(0,0,0,0.8);'\n"
            + "        + '    border: 1px solid rgba(255,255,255,0.5);'\n"
            + "        + '    border-right: 0;'\n"
            + "        + '    box-sizing: content-box;'\n"
            + "        + '    color: #fff;'\n"
            + "        + '    cursor: pointer;'\n"
            + "        + '    direction: ltr;'\n"
            + "        + '    font-size: 18px;'\n"
            + "        + '    min-width: 150px;'\n"
            + "        + '    padding: 10px 7px;'\n"
            + "        + '    text-align: center;'\n"
            + "        + '}'\n"
            + "document.body.appendChild(styleSheet);\n"
            + "videoController.innerHTML = \"<button id='repeatButton' onclick='repeatButtonClick()' style='padding: 10px 12px 10px 12px; font-size: 90%; margin: 3px; min-width: auto; background: \" + OFF_COLOR + \"'>Repeat</button>\""
            + "        + \"<button onclick='skipAdsClick()' style='padding: 10px 12px 10px 12px; font-size: 90%; margin: 3px; min-width: auto;'>Skip Ads</button>\";\n"
            + "setInterval(function() {\n"
            + "    var container = document.getElementsByClassName('ytp-chrome-controls')[0];\n"
            + "    if (container != null && document.getElementById('additionalElement') == null) {\n"
            + "        container.insertBefore(videoController, container.childNodes[1]);\n"
            + "        repeatButton = document.getElementById('repeatButton');\n"
            + "    }\n"
            + "}, 1000);\n"
            + "updateButtons();\n"
            + "function updateButtons() {"
            + "    if (repeatButton != null) {\n"
            + "        repeatButton.style.background = videoObject.loop ? ON_COLOR : OFF_COLOR;"
            + "    }\n"
            + "}\n"

            + "function repeatButtonClick() {"
            + "    videoObject = document.getElementsByTagName('video')[0];"
            + "    videoObject.loop = !videoObject.loop;"
            + "    updateButtons();"
            + "}\n"

            + "function skipAdsClick() {"
            + "    videoObject = document.getElementsByTagName('video')[0];"
            + "    videoObject.currentTime = 9999999999999;"
            + "}\n"
} else if (window.location.href.indexOf('www.twitch.tv/') >= 0) {
    scriptInjection = "var styleSheet = document.createElement('style');\n"
            + "styleSheet.innerHTML = \n"
            + "        '#additionalElement button {'\n"
            + "      + '    margin-right: 6px;'\n"
            + "      + '    padding: 5px 10px 5px 14px'\n"
            + "      + '}';\n"
            + "document.body.appendChild(styleSheet);\n"
            + "var skipAdsDiv = document.createElement('div');\n"
            + "skipAdsDiv.style.float = 'right';\n"
            + "skipAdsDiv.id = 'additionalElement';\n"
            + "skipAdsDiv.innerHTML = \"<button onclick='skipAdsClick()' class='follow-button button'>Skip Ads&nbsp;&nbsp;&nbsp;<img src='https://static-cdn.jtvnw.net/emoticons/v1/25/1.0' /></button>\";\n"
            + "skipAdsDiv.style.float = 'right';"
            + "setInterval(function() {\n"
            + "    var container = document.getElementsByClassName('card__title')[0];\n"
            + "    if (container != null && document.getElementById('additionalElement') == null) {\n"
            + "        container.appendChild(skipAdsDiv);\n"
            + "    }\n"
            + "}, 2000);\n"
            + "function skipAdsClick() {"
            + "    var videoElements = document.getElementsByTagName('video');\n"
            + "    for (var i = 0; i < videoElements.length; i++) {\n"
            + "        videoElements[i].currentTime = 9999999999999;\n"
            + "    }\n"
            + "}\n";
}

    
  
if (scriptInjection != null) {
    var newScript = document.createElement('script');
    newScript.innerHTML = scriptInjection;
    document.body.appendChild(newScript);
}