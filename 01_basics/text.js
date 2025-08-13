document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let weight = document.getElementById("weight").value.trim();
    let height = document.getElementById("height").value.trim();
    let valid = true;

    // Reset errors
    document.getElementById("weightError").innerText = "";
    document.getElementById("heightError").innerText = "";
    document.getElementById("result").innerText = "";

    // Validation
    if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weightError").innerText = "Enter valid weight (> 0)";
        valid = false;
     }
     if (height === "" || isNaN(height) || height <= 0) {
     document.getElementById("heightError").innerText = "Enter valid height (> 0)";
        valid = false;
     }

    // Calculation
    if (valid) {
        let heightInMeters = parseFloat(height) / 100;
        let bmi = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
        let category = "";

        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 24.9) category = "Normal weight";
        else if (bmi < 29.9) category = "Overweight";
        else category = "Obese";

         document.getElementById("result").innerText = `Your BMI is ${bmi} (${category})`;
    }

}
);