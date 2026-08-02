function downloadCV() {
    const link = document.createElement("a");
    link.href = "./resume/EJEMAR MALOLOY-ON _ RESUME.pdf";
    link.download = "EJEMAR MALOLOY-ON _ RESUME.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}