function toggleTheme() {
  document.body.classList.toggle("dark");
}

const pdfInput = document.getElementById("pdfUpload");

pdfInput.addEventListener("change", function () {
  const file = pdfInput.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    window.open(url, "_blank");
  }
});
