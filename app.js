const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const step3 = document.querySelector(".step-3");
nextBtn.addEventListener("click", nextStep);
prevBtn.addEventListener("click", prevStep);

function prevStep() {
    const step1BorderColor = getComputedStyle(step1).borderColor;
    const step2BorderColor = getComputedStyle(step2).borderColor;
    const step3BorderColor = getComputedStyle(step3).borderColor;
    const line1Color = getComputedStyle(line1).borderColor;
    const line2Color = getComputedStyle(line2).borderColor;
    if (step1BorderColor === "rgb(210, 76, 92)" &&
        step2BorderColor === "rgb(210, 76, 92)" &&
        step3BorderColor === "rgb(198, 198, 198)") {
        line1.style.backgroundColor = "rgb(198, 198, 198)";
        step2.style.borderColor = "rgb(198, 198, 198)";
    } else if (step1BorderColor === "rgb(210, 76, 92)" &&
        step2BorderColor === "rgb(210, 76, 92)" &&
        step3BorderColor === "rgb(210, 76, 92)") {
        line2.style.backgroundColor = "rgb(198, 198, 198)";
        step3.style.borderColor = "rgb(198, 198, 198)";
    }

}

function nextStep() {
    const step1BorderColor = getComputedStyle(step1).borderColor;
    const step2BorderColor = getComputedStyle(step2).borderColor;
    const step3BorderColor = getComputedStyle(step3).borderColor;
    const line1Color = getComputedStyle(line1).borderColor;
    const line2Color = getComputedStyle(line2).borderColor;

    if (
        step1BorderColor === "rgb(210, 76, 92)" &&
        step2BorderColor === "rgb(198, 198, 198)" &&
        step3BorderColor === "rgb(198, 198, 198)"
    ) {
        line1.style.backgroundColor = "rgb(210, 76, 92)";
        step2.style.borderColor = "rgb(210, 76, 92)";
    } else if (
        step1BorderColor === "rgb(210, 76, 92)" &&
        step2BorderColor === "rgb(210, 76, 92)" &&
        step3BorderColor === "rgb(198, 198, 198)") {
        line2.style.backgroundColor = "rgb(210, 76, 92)";
        step3.style.borderColor = "rgb(210, 76, 92)";

    }
}