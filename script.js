let terminal;
let content;

function on_load() {
    terminal = document.getElementById("Terminal")
    content = document.getElementById("Content")
    terminal.getElementsByTagName("form")[0].onsubmit = function () {
        command_handler(terminal.getElementsByTagName("input")[0].value)
        terminal.getElementsByTagName("input")[0].value = ""
        return false;
    };
}

projects = {
    "This portfolio": "https://github.com/carson-coder/carson-coder.gtihub.io",
    "Pygame Display. For better python pygame designing": "https://github.com/carson-coder/Pygame-Display",
    "WLED light controler for controling your cool wled lights": "https://pypi.org/project/WLED-light-controller/",
    "Audio streamer test. Just a test for streaming audio": "https://github.com/carson-coder/Server-Client-Audio-Transfer"
}

links = {
    "Discord": "https://discord.gg/r7uNdCamGK",
    "Github": "https://github.com/carson-coder",
    "Stack Overflow": "https://stackoverflow.com/users/16367635/carson-coder",
}

function command_handler(command)
{
    content.innerHTML += "<br>$ " + command + "<br>"
    switch (command.toLowerCase()){
        case "help":
            help(content)
            break
        case "clear":
            clear(content)
            break
        case "links": 
            for (let e in links) {
                content.innerHTML += `<a href="${links[e]}">${e}</a><br>`
            }
            break
        case "projects":
            for (let e in projects) {
                content.innerHTML += `<a href="${projects[e]}">${e}</a><br>`
            }
            break
        default:
            content.innerHTML += "Error: Unknown command. try help<br>"
    }
}

function clear(console)
{
    console.innerHTML = "";
}

function help(console)
{
    console.innerHTML += "<br>List of commands<br><br>Help - Prints this message<br>Projects - list out my projects<br>Links - Links to contact me or see things I have done<br>Clear - clear the screen<br>"
}
