document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    // Get values
    const memberId = document.querySelector('input[placeholder="e.g. M001"]').value;
    const fullName = document.querySelector('input[placeholder="Enter full name"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[placeholder="Enter phone number"]').value;
    const address = document.querySelector('input[placeholder="Enter address"]').value;
    const department = document.querySelector('input[placeholder="Faculty"]').value;
    const gender = document.querySelector("select").value;
    const photo = document.querySelector('input[type="file"]').files[0];

    // Simple validation
    if (!memberId || !fullName || !email) {
      alert("Member ID, Full Name and Email are required!");
      return;
    }

    // Create object
    const memberData = {
      memberId,
      fullName,
      email,
      phone,
      address,
      department,
      gender,
      photoName: photo ? photo.name : null
    };

    console.log("Member Data:", memberData);

    alert("Member saved successfully!");
    form.reset();
  });
});