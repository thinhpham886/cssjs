function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/>MUON COPY THI VAO DAY DANG KY : <a href='https://docs.google.com/forms/d/e/1FAIpQLSfR3aC9moI3mJknvP1l2258ah7u6OElaShY-UhfUvG0sQGB8w/viewform/'>https://docs.google.com/forms/d/e/1FAIpQLSfR3aC9moI3mJknvP1l2258ah7u6OElaShY-UhfUvG0sQGB8w/viewform/</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;