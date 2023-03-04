let terminal;
let content;

function on_load() {
    terminal = document.getElementById("Terminal")
    content = document.getElementById("Content")
    terminal.getElementsByTagName("input")[0].addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            command_handler(e.target.value)
        }
    });
}

function command_handler(command)
{
    content.innerHTML += "<br>$ " + command + "<br>"
    switch (command.toLowerCase()){
        case "help":
            help(content)
        case "clear":
            clear(content)
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
    console.innerHTML += "<br>List of commands<br><br>Help - Prints this message<br>Project - list out my projects<br>Links - Links to contact me or see things I have done<br>Clear - clear the screen<br>"
}
