function downloadCV() {
    const link = document.createElement("a");
    link.href = "./resume/EJEMAR-MALOLOY-ON-RESUME.pdf";
    link.download = "EJEMAR-MALOLOY-ON-RESUME.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}