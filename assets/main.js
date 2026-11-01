"use strict";
const copyButton = document.querySelector("[data-copy-email]");
if (copyButton) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    const status = document.querySelector("#copy-status");
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText("mohammadats00@gmail.com");
      status.textContent = "Email address copied.";
    } catch {
      status.textContent = "Please copy the address above, or click it to open your email app.";
    }
  });
}
