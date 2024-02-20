function createAccount() {
  alert("Accout creat with success!");
}

function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", function() {
 
  document.getElementById("psychologicalIssuesYes").addEventListener("change", function() {
    document.getElementById("psycholDetails").style.display = this.checked ? "block" : "none";
  });

  document.getElementById("medicaYes").addEventListener("change", function() {
    document.getElementById("medicationDetail").style.display = this.checked ? "block" : "none";
  });
});
