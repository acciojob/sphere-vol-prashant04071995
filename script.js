function volume_sphere() {
  // Retrieve the radius value entered by the user
  const radiusInput = document.getElementById("radius");
  const radiusValue = parseFloat(radiusInput.value);

  // Validate the input
  if (isNaN(radiusValue) || radiusValue < 0) {
    document.getElementById("volume").value = "NaN"; // Display 'NaN' for invalid input
    return false; // Prevent form submission
  }

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radiusValue, 3);

  // Display the calculated volume rounded to four decimal places
  document.getElementById("volume").value = volume.toFixed(4);

  return false; // Prevent form submission
}

window.onload = function () {
  const form = document.getElementById('MyForm');
  form.onsubmit = volume_sphere;
};
