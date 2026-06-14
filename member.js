document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const table = document.getElementById("nameTable");

    // SEARCH FUNCTION
    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLowerCase();
        const rows = table.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) { // Skip header row
            const name = rows[i].cells[1].textContent.toLowerCase();
            const email = rows[i].cells[2].textContent.toLowerCase();

            if (name.includes(filter) || email.includes(filter)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    });

    // DELETE MEMBER
    document.querySelectorAll(".delete").forEach(button => {
        button.addEventListener("click", function () {
            const row = this.closest("tr");

            if (confirm("Are you sure you want to delete this member?")) {
                row.remove();
                updateSerialNumbers();
            }
        });
    });

    
        const rowCount = table.rows.length;

        const newRow = table.insertRow();

        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${joinDate}</td>
            <td>
                <button class="edit">
                    ✏️
                </button>
                <button class="delete">
                    🗑️
                </button>
            </td>
        `;

        attachEvents();
    });

    
    // UPDATE SERIAL NUMBERS
    function updateSerialNumbers() {
        const rows = table.querySelectorAll("tr");

        for (let i = 1; i < rows.length; i++) {
            rows[i].cells[0].textContent = i;
        }
    }

    attachEvents();