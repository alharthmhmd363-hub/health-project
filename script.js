function calculate() {
    let age = parseInt(document.getElementById("age").value);
    let height = parseInt(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let gender = document.getElementById("gender").value;
    let activity = parseFloat(document.getElementById("activity").value);
    let goal = document.getElementById("goal").value;

    let BMR = gender === "male"
        ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
        : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);

    let TDEE = BMR * activity;

    let calories = goal === "loss" ? TDEE - 300 :
                   goal === "gain" ? TDEE + 300 : TDEE;

    let water = weight * 0.035;

    let targetWeight = goal === "loss" ? weight - 5 :
                       goal === "gain" ? weight + 5 : weight;

    let weeks = Math.abs(targetWeight - weight);

    document.getElementById("results").innerHTML = `
        <h3>نتائجك:</h3>
        السعرات اليومية: ${calories.toFixed(0)} سعرة<br>
        كمية الماء: ${water.toFixed(2)} لتر<br>
        الوزن المستهدف: ${targetWeight} كجم<br>
        المدة المتوقعة: ${weeks} أسابيع
    `;
}
