document.addEventListener("DOMContentLoaded", function () {
  // Hide all tool sections on load
  const toolSections = document.querySelectorAll(".tool-detail");
  toolSections.forEach((sec) => {
    sec.style.display = "none";
  });

  // ===== BMI CALCULATOR =====
  const bmiForm = document.getElementById("bmi-form");
  const bmiResultDiv = document.getElementById("bmi-result");

  if (bmiForm && bmiResultDiv) {
    bmiForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const heightCm = parseFloat(document.getElementById("height").value);
      const weightKg = parseFloat(document.getElementById("weight").value);

      if (
        isNaN(heightCm) ||
        isNaN(weightKg) ||
        heightCm <= 0 ||
        weightKg <= 0
      ) {
        bmiResultDiv.innerHTML =
          "<p>Please enter valid positive values for height and weight.</p>";
        return;
      }

      const heightM = heightCm / 100;
      const bmi = weightKg / (heightM * heightM);
      const bmiRounded = bmi.toFixed(1);

      let category = "";
      let advice = "";

      if (bmi < 18.5) {
        category = "Underweight";
        advice =
          "Consider a balanced diet with sufficient calories. Seek guidance if needed.";
      } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal (Healthy weight)";
        advice =
          "Maintain your current lifestyle with regular activity and balanced diet.";
      } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
        advice =
          "Consider more physical activity and mindful eating to gradually reduce weight.";
      } else {
        category = "Obese";
        advice =
          "Consult a healthcare provider for a safe weight-management plan.";
      }

      bmiResultDiv.innerHTML = `
        <h3>Your BMI Result</h3>
        <p><strong>BMI:</strong> ${bmiRounded}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p class="advice">${advice}</p>
      `;
    });
  }

  // ===== MOOD CHECKER =====
  const moodButtons = document.querySelectorAll(".mood-btn");
  const moodHiddenInput = document.getElementById("mood-value");
  const moodForm = document.getElementById("mood-form");
  const moodResultDiv = document.getElementById("mood-result");

  if (moodButtons && moodHiddenInput && moodForm && moodResultDiv) {
    moodButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        moodButtons.forEach((b) => b.classList.remove("selected-mood"));
        btn.classList.add("selected-mood");
        moodHiddenInput.value = btn.dataset.mood;
      });
    });

    moodForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const moodValue = moodHiddenInput.value;

      if (!moodValue) {
        moodResultDiv.innerHTML = "<p>Please select a mood option first.</p>";
        return;
      }

      let heading = "";
      let message = "";

      if (moodValue === "very_stressed") {
        heading = "You seem very stressed.";
        message =
          "Try to take a short break, breathe slowly, and talk to someone you trust. Reduce screen time for a while and give yourself permission to rest. If this feeling continues for many days, consider speaking to a professional.";
      } else if (moodValue === "stressed") {
        heading = "You seem a bit stressed.";
        message =
          "You can try light exercise, a walk, or listening to calming music. Break big tasks into smaller steps and take regular short breaks while studying or working.";
      } else if (moodValue === "okay") {
        heading = "You are doing okay.";
        message =
          "Keep maintaining a balance between work, rest and hobbies. Staying connected with friends or family and taking out time for small enjoyable activities can help keep your mood stable.";
      } else if (moodValue === "good") {
        heading = "Glad to know you’re feeling good!";
        message =
          "Continue your healthy habits. You can also support others by listening to them and sharing positivity.";
      }

      moodResultDiv.innerHTML = `
        <h3>Mood Suggestion</h3>
        <p><strong>${heading}</strong></p>
        <p class="advice">${message}</p>
      `;
    });
  }

  // ===== WATER INTAKE TRACKER =====
  const waterForm = document.getElementById("water-form");
  const waterResultDiv = document.getElementById("water-result");

  if (waterForm && waterResultDiv) {
    waterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const goal = parseFloat(document.getElementById("water-goal").value);
      const consumed = parseFloat(
        document.getElementById("water-consumed").value
      );

      if (
        isNaN(goal) ||
        isNaN(consumed) ||
        goal <= 0 ||
        consumed < 0 ||
        goal > 10 ||
        consumed > 10
      ) {
        waterResultDiv.innerHTML =
          "<p>Please enter realistic values (goal > 0, both between 0 and 10 litres).</p>";
        return;
      }

      const percentage = (consumed / goal) * 100;
      const roundedPercent = Math.round(percentage);

      let status = "";
      let advice = "";

      if (percentage < 50) {
        status = "Low water intake";
        advice =
          "You have completed less than half of your daily goal. Try to sip water regularly through the day instead of drinking a lot at once.";
      } else if (percentage >= 50 && percentage < 90) {
        status = "Getting there";
        advice =
          "You are on the way to your goal. Keep a bottle near you and take small sips during work or study.";
      } else if (percentage >= 90 && percentage <= 110) {
        status = "Goal almost/fully achieved";
        advice =
          "Your water intake seems close to your goal. Maintain this healthy habit and listen to your body’s thirst.";
      } else {
        status = "Above your set goal";
        advice =
          "You have crossed your planned goal. In normal health this may be okay, but if you have any medical conditions, follow your doctor’s recommendation.";
      }

      waterResultDiv.innerHTML = `
        <h3>Your Water Intake</h3>
        <p><strong>Goal:</strong> ${goal} litres</p>
        <p><strong>Consumed:</strong> ${consumed} litres</p>
        <p><strong>Completion:</strong> ${roundedPercent}%</p>
        <p><strong>Status:</strong> ${status}</p>
        <p class="advice">${advice}</p>
      `;
    });
  }

  // ===== SLEEP QUALITY CHECKER =====
  const sleepForm = document.getElementById("sleep-form");
  const sleepResultDiv = document.getElementById("sleep-result");

  if (sleepForm && sleepResultDiv) {
    sleepForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const sleepHours = parseFloat(
        document.getElementById("sleep-hours").value
      );

      if (isNaN(sleepHours) || sleepHours < 0 || sleepHours > 24) {
        sleepResultDiv.innerHTML =
          "<p>Please enter a valid number of hours between 0 and 24.</p>";
        return;
      }

      let status = "";
      let advice = "";

      if (sleepHours < 5) {
        status = "Very Low Sleep";
        advice =
          "Your sleep duration seems too low. Try to increase your sleep and maintain a regular schedule. If this continues, consider consulting a doctor.";
      } else if (sleepHours >= 5 && sleepHours < 7) {
        status = "Slightly Low Sleep";
        advice =
          "You are sleeping less than the commonly recommended 7–9 hours. Try to add a little more rest if possible.";
      } else if (sleepHours >= 7 && sleepHours <= 9) {
        status = "Healthy Sleep Range";
        advice =
          "Your sleep duration seems to be in a commonly recommended range. Maintain a regular sleep routine.";
      } else if (sleepHours > 9 && sleepHours <= 12) {
        status = "Higher than Usual Sleep";
        advice =
          "You are sleeping more than average. If you often feel tired even after long sleep, consider discussing it with a healthcare professional.";
      } else {
        status = "Very High Sleep Duration";
        advice =
          "Very long sleep duration on a regular basis may need medical attention. Please consult a doctor if you feel unwell.";
      }

      sleepResultDiv.innerHTML = `
        <h3>Your Sleep Result</h3>
        <p><strong>Sleep per day:</strong> ${sleepHours} hours</p>
        <p><strong>Category:</strong> ${status}</p>
        <p class="advice">${advice}</p>
      `;
    });
  }

  // ===== HEALTH QUIZ =====
  const quizForm = document.getElementById("quiz-form");
  const quizResultDiv = document.getElementById("quiz-result");

  if (quizForm && quizResultDiv) {
    quizForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const answers = {
        q1: "b", // sleep
        q2: "b", // temperature
        q3: "b", // eggs
        q4: "a", // water
      };

      let score = 0;
      const total = Object.keys(answers).length;

      Object.keys(answers).forEach((q) => {
        const selected = quizForm.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
          score++;
        }
      });

      let feedback = "";
      if (score === total) {
        feedback = "Excellent! You have good basic health awareness.";
      } else if (score >= total / 2) {
        feedback =
          "Good job! A little more reading can make your health knowledge stronger.";
      } else {
        feedback =
          "Don't worry! Health awareness grows with time. Try reading more health tips.";
      }

      quizResultDiv.innerHTML = `
        <h3>Your Quiz Result</h3>
        <p><strong>Score:</strong> ${score} / ${total}</p>
        <p class="advice">${feedback}</p>
      `;
    });
  }
});

// ====== GLOBAL FUNCTIONS FOR BUTTONS ======
function openTool(toolId) {
  const tools = document.querySelectorAll(".tool-detail");
  tools.forEach((tool) => {
    tool.style.display = "none";
  });

  const target = document.getElementById(toolId);
  if (target) {
    target.style.display = "block";
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function closeTools() {
  const tools = document.querySelectorAll(".tool-detail");
  tools.forEach((tool) => {
    tool.style.display = "none";
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.openTool = openTool;
window.closeTools = closeTools;
