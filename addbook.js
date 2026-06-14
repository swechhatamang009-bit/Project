document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const book = document.querySelector("input[placeholder='e.g. C-Programming']").value.trim();
    const code = document.querySelector("input[placeholder='e.g. E1280298']").value.trim();
    const semester = document.querySelector("input[placeholder='e.g. 3']").value.trim();
    const department = document.querySelector("input[placeholder='e.g. IT']").value.trim();

    // Simple validation
    if (!book || !code || !semester || !department) {
      alert("Please fill in all fields!");
      return;
    }

    if (isNaN(semester) || semester <= 0) {
      alert("Semester must be a valid number!");
      return;
    }

    // Create book object
    const newBook = {
      book,
      code,
      semester,
      department,
      createdAt: new Date().toLocaleString()
    };

    // Get existing books from localStorage
    let books = JSON.parse(localStorage.getItem("books")) || [];

    // Add new book
    books.push(newBook);

    // Save back to localStorage
    localStorage.setItem("books", JSON.stringify(books));

    alert("Book added successfully!");

    // Reset form
    form.reset();

    console.log("Saved Books:", books);
  });
});