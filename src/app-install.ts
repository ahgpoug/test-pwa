let installPrompt : any;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  if (installButton) {
    installButton.removeAttribute("hidden");
  }
});

async function installButtonClick() {
    if (!installPrompt) {
        return;
    }
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    disableInAppInstallPrompt();
}

window.addEventListener("appinstalled", () => {
    disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
    installPrompt = null;
    if (installButton) {
        installButton.setAttribute("hidden", "");
    }
}
