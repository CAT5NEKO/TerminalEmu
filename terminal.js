const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.querySelector(".terminal-output");

terminalInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = terminalInput.value.trim();

    if (command === "") {
      return;
    }

    const output = document.createElement("p");
    output.textContent = `$ ${command}`;
    terminalOutput.appendChild(output);

    switch (command) {
      case "help":
        const helpOutput = document.createElement("p");
        helpOutput.textContent = "nyago -僕が鳴きます  oa- -おあー";
        terminalOutput.appendChild(helpOutput);
        break;
      
      case "nyago":
        const nyagoOutput = document.createElement("p");
        nyagoOutput.textContent = "ﾝﾆｬｺﾞｺﾞｺﾞｺﾞｺﾞｺﾞｺﾞｺﾞ🐈";
        terminalOutput.appendChild(nyagoOutput);
        break;

        case "oa-":
        const oaoaOutput = document.createElement("p");
        oaoaOutput.textContent = "おあー";
        terminalOutput.appendChild(oaoaOutput);
        break;

      default:
        const errorOutput = document.createElement("p");
        errorOutput.textContent = `${command}: command not found`;
        terminalOutput.appendChild(errorOutput);
        break;
    }

    terminalInput.value = "";
  }
});

terminalInput.focus();