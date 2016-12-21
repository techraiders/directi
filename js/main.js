/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openSideMenu() {
    document.getElementById("sideMenu").style.width = "210px";
    document.getElementById("main").style.marginLeft = "210px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("openBtn").style.display = 'none';
    document.getElementById("closeBtn").style.display = 'block';
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeSideMenu() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("openBtn").style.display = 'block';
    document.getElementById("closeBtn").style.display = 'none';
}