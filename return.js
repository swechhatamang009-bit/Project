const searchInput = document.getElementById("search");
const rows = document.querySelectorAll("#bookTable tr");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    rows.forEach(row => {

        const text = row.textContent.toLowerCase();

        if (text.includes(value)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

document.querySelectorAll(".return-btn").forEach(button => {

    button.addEventListener("click", () => {

        const row = button.closest("tr");

        alert(
            "Book returned successfully!"
        );

        row.remove();
    });
});