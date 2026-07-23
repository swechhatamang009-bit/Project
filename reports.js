// =============================
// Reports Page JavaScript
// =============================

// Buttons
const generateBtn = document.getElementById("generateBtn");
const exportBtn = document.querySelector(".download-btn");
const pdfBtn = document.querySelectorAll(".btn-group button")[1];
const excelBtn = document.querySelectorAll(".btn-group button")[2];

// Inputs
const reportType = document.querySelector("select");
const fromDate = document.querySelectorAll('input[type="date"]')[0];
const toDate = document.querySelectorAll('input[type="date"]')[1];

// Table Body
const tableBody = document.getElementById("tableBody");

// ------------------------------
// Generate Report
// ------------------------------
generateBtn.addEventListener("click", function () {

    if (fromDate.value === "" || toDate.value === "") {
        alert("Please select both From and To dates.");
        return;
    }

    if (fromDate.value > toDate.value) {
        alert("From date cannot be greater than To date.");
        return;
    }

    const report = reportType.value;

    const today = new Date();

    const date =
        today.getDate().toString().padStart(2, "0") + "-" +
        (today.getMonth() + 1).toString().padStart(2, "0") + "-" +
        today.getFullYear();

    const id = "R00" + (tableBody.rows.length + 1);

    const row = `
        <tr>
            <td>${id}</td>
            <td>${report}</td>
            <td>${date}</td>
            <td>Generated</td>
        </tr>
    `;

    tableBody.insertAdjacentHTML("beforeend", row);

    alert(report + " generated successfully!");

    fromDate.value = "";
    toDate.value = "";
});


// ------------------------------
// Export Report
// ------------------------------
exportBtn.addEventListener("click", function () {
    alert("Report exported successfully! (Frontend Demo)");
});


// ------------------------------
// PDF Button
// ------------------------------
pdfBtn.addEventListener("click", function () {
    alert("PDF downloaded successfully! (Frontend Demo)");
});


// ------------------------------
// Excel Button
// ------------------------------
excelBtn.addEventListener("click", function () {
    alert("Excel downloaded successfully! (Frontend Demo)");
});


// ------------------------------
// Highlight Pending Reports
// ------------------------------
function highlightPending() {

    const rows = tableBody.querySelectorAll("tr");

    rows.forEach(function (row) {

        const status = row.cells[3].textContent.trim();

        if (status === "Pending") {

            row.style.backgroundColor = "#fff3cd";
            row.style.color = "#856404";

        }

    });

}

highlightPending();

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){
        card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave",function(){
        card.style.transform = "translateY(0)";
    });

});