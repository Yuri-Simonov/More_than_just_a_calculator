export const errorPrompt = (message) => {
    const body = document.querySelector("body");
    const newError = document.createElement("div");
    newError.classList.add("error-prompt");
    const p = document.createElement("p");
    newError.append(p);
    p.textContent = message;
    body.append(newError);

    setTimeout(() => {
        newError.remove();
    }, 3000);
};
