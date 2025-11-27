document.addEventListener("DOMContentLoaded", () => {

    const subjectsDiv = document.getElementById("subjects");
    const addSubjectBtn = document.getElementById("addSubjectBtn");
    const calculateBtn = document.getElementById("calculateBtn");
    const resultDiv = document.getElementById("result");

    const gradeValues = {
        A: 4.0,
        A_minus: 3.7,
        B_plus: 3.3,
        B: 3.0,
        B_minus: 2.7,
        C_plus: 2.3,
        C: 2.0,
        C_minus: 1.7,
        D: 1.0,
        F: 0.0
    };

    function addSubject() {
        const row = document.createElement("div");
        row.className = "subject-row";

        row.innerHTML = `
            <input type="text" class="subName" placeholder="Subject Name">

            <select class="grade">
                <option value="">Grade</option>
                <option value="A">A</option>
                <option value="A_minus">A-</option>
                <option value="B_plus">B+</option>
                <option value="B">B</option>
                <option value="B_minus">B-</option>
                <option value="C_plus">C+</option>
                <option value="C">C</option>
                <option value="C_minus">C-</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>

            <input type="number" class="credit" placeholder="Credit Hours" min="1">

            <button class="removeBtn">X</button>
        `;

        row.querySelector(".removeBtn").addEventListener("click", () => {
            row.remove();
        });

        subjectsDiv.appendChild(row);
    }

    addSubjectBtn.addEventListener("click", addSubject);

    calculateBtn.addEventListener("click", () => {
        const grades = document.querySelectorAll(".grade");
        const credits = document.querySelectorAll(".credit");

        let totalPoints = 0;
        let totalCredits = 0;

        for (let i = 0; i < grades.length; i++) {
            const grade = grades[i].value;
            const credit = Number(credits[i].value);

            if (!grade || !credit) {
                resultDiv.textContent = "Fill all fields before calculating.";
                resultDiv.style.color = "#c62828";
                return;
            }

            totalPoints += gradeValues[grade] * credit;
            totalCredits += credit;
        }

        const gpa = totalPoints / totalCredits;
        resultDiv.textContent = `Your GPA: ${gpa.toFixed(2)}`;
        resultDiv.style.color = "#15314b";
    });

    addSubject();
});
