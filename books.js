const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let filter = searchInput.value.toLowerCase();

    let rows = document.querySelectorAll("#bookTable tbody tr");

    rows.forEach(row => {

        let text = row.textContent.toLowerCase();

        if(text.includes(filter)){
            row.style.display = "";
        }else{
            row.style.display = "none";
        }
    });
});