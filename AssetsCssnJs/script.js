function toggleTheme() {
        var element = document.body;
        element.classList.toggle("dark-mode");
  }


//   Form Functionality

function submitform() {
      const forename = document.getElementById('udin').value;
      const surname = document.getElementById('udin2').value;
      const email = document.getElementById('udin3').value;
      const textarea = document.getElementById('udin4').value;

      const dataOne = forename && surname ? true : false ;
      const dataTwo = email && textarea ? true: false ;

      if (dataOne && dataTwo) {
            alert("Sent successfully!! ₍₍⚞(˶˃ ᵕ ˂˶)⚟⁾⁾");
      } else {
            alert("All field must be filled out.. ˙◠˙");
      }
}