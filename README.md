# HealthEase – Basic Health Awareness Web App

HealthEase is a minor project web application that provides basic health awareness
features such as a symptom chatbot, diseases & remedies information, health tips,
emergency help and simple health tools (BMI calculator, mood checker, sleep checker).

> **Note:** This project is for educational purposes only. It does not provide
> medical diagnosis and cannot replace a qualified doctor.

---

## Team

- **Vaibhav** – MCA 1B, Enrollment No: **11317704425**
- **Joy Madan** – MCA 1B, Enrollment No: **08917704425**

---

## Features

- **Landing Page**

  - Quick cards for Chatbot, Health Tips, Diseases & Remedies, Emergency Help.
  - Embedded Google Maps frame for nearest hospitals.

- **Chatbot**

  - Simple rule-based chatbot implemented in JavaScript (`static/js/chatbot.js`).
  - Responds to common symptom keywords (fever, cold, headache, acidity, diarrhoea, stress).

- **Diseases & Remedies**

  - Card-based view for common conditions (Common Cold, Acidity, Diarrhoea, Migraine, Skin Rash).
  - Search bar + category chips (Cold & Flu, Stomach, Headache, Skin).
  - Filtering handled in `static/js/diseases.js`.

- **Health Tips**

  - Grid of tips for nutrition, hydration, physical activity, sleep, mental well-being, hygiene.

- **Emergency Help**

  - First-aid guide cards for common situations.
  - Larger hospital map section with “Open in Google Maps” button.

- **Health Tools**

  - **BMI Calculator** – calculates BMI and shows category + suggestion.
  - **Mood Checker** – quick mood selection with supportive suggestions.
  - **Sleep Quality Checker** – evaluates daily sleep hours.
  - Tools are opened from cards and displayed one at a time (UX-friendly).
  - Logic in `static/js/tools.js`.

- **About Page**
  - Project overview, objectives, key features, tech stack, disclaimer, future scope.
  - Project contributors section.

---

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Python **Flask**
- **Templating:** Jinja2 (base layout + page templates)
- **Maps:** Embedded Google Maps iframe
- **Environment:** Python virtualenv, `requirements.txt` for dependencies

---

## Project Structure (Simplified)

```text
HealthEase/
├─ app.py
├─ requirements.txt
├─ templates/
│  ├─ base.html
│  ├─ index.html
│  ├─ chatbot.html
│  ├─ diseases.html
│  ├─ tips.html
│  ├─ emergency.html
│  ├─ tools.html
│  └─ about.html
└─ static/
   ├─ css/
   │  └─ style.css
   ├─ js/
   │  ├─ chatbot.js
   │  ├─ tools.js
   │  └─ diseases.js
   └─ images/
      └─ (logo and other assets)
```
