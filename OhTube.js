var scriptInjection = null;
console.log(chrome.extension.getURL("OhTube_on.png"));
if (window.location.href.indexOf('youtube.com') >= 0 || window.location.href.indexOf('youtu.be') >= 0) {
    scriptInjection = "var videoObject = document.getElementsByTagName('video')[0];\n"
            + "var searchBar = document.getElementById('masthead-search');\n"
            + "searchBar.style.width = '650px';\n"
            + "document.getElementById('page-container').style.marginTop = '30px';\n"

            + "var repeatButton = null;\n"
            + "var ON_SRC = '" + chrome.extension.getURL("OhTube_on.png") + "';\n"
            + "var OFF_SRC = '" + chrome.extension.getURL("OhTube_off.png") + "';\n"

            + "var videoController = document.createElement('div');\n"
            + "videoController.id = 'additionalElement';\n"
            + "videoController.style.display = 'inline-block';\n"
            + "var styleSheet = document.createElement('style');"
            + "styleSheet.innerHTML = \n"
            + "        '#additionalElement img {\\n'\n"
            + "        + '   cursor: pointer;\\n'\n"
            + "        + '   height: 82%;\\n'\n"
            + "        + '   margin-right: 2px;\\n'\n"
            + "        + '   width: auto;\\n'\n"
            + "        + '   transition: all .1s;\\n'\n"
            + "        + '}\\n'\n"
            + "        + '#additionalElement img:hover, ytp-button:hover {\\n'\n"
            + "        + '   filter: drop-shadow(0 0 1px #fff);\\n'\n"
            + "        + '   transform: scale(1.2, 1.2);\\n'\n"
            + "        + '}';\n"
            + "document.body.appendChild(styleSheet);\n"
            + "videoController.style.height = '100%';\n"
            + "videoController.style.padding = '.5%';\n"
            + "videoController.innerHTML = \"<img src='\" + ON_SRC + \"' id='repeatButton' onclick='repeatButtonClick()'/>\""
            + "        + \"<img src='" + chrome.extension.getURL("skip_ads.png") + "' onclick='skipAdsClick()' />\";\n"
            + "setInterval(function() {\n"
            + "    var container = document.getElementsByClassName('ytp-chrome-controls')[0];\n"
            + "    if (container != null && document.getElementById('additionalElement') == null) {\n"
            + "        container.insertBefore(videoController, container.childNodes[1]);\n"
            + "        repeatButton = document.getElementById('repeatButton');\n"
            + "        updateButtons();\n"
            + "    }\n"
            + "}, 1000);\n"
            + "updateButtons();\n"
            + "function updateButtons() {"
            + "    repeatButton = document.getElementById('repeatButton');\n"
            + "    if (repeatButton != null) {\n"
            + "        repeatButton.src = videoObject.loop ? ON_SRC : OFF_SRC;\n"
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
            + "    var container = document.getElementsByClassName('player-buttons-right')[0];\n"
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