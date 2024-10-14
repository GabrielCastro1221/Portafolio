function downloadPDF() {
  const element = document.querySelector(".resume_wrapper");
  const images = element.querySelectorAll("img");
  const loadImages = Array.from(images).map((img) => {
    return new Promise((resolve) => {
      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
        img.onerror = resolve;
      }
    });
  });
  Promise.all(loadImages).then(() => {
    html2pdf(element, {
      margin: [0, 0, 0, 0],
      filename: "Curriculum_Gabriel_Castro.pdf",
      image: { type: "png", quality: 1 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  });
}
