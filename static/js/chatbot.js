document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("user-input");
  const messages = document.getElementById("chat-messages");

  // Simple rule-based responses
  function getBotResponse(text) {
    const msg = text.toLowerCase();

    // Very basic keyword-based logic
    if (msg.includes("fever") || msg.includes("temperature")) {
      return (
        "It seems you mentioned fever. " +
        "You can drink plenty of fluids, take rest, and monitor your temperature. " +
        "If high fever lasts more than 2–3 days or is very high, please consult a doctor."
      );
    }

    if (
      msg.includes("cold") ||
      msg.includes("cough") ||
      msg.includes("throat")
    ) {
      return (
        "You might be experiencing common cold or throat irritation. " +
        "Try warm fluids, steam inhalation, and avoid very cold food or drinks. " +
        "If breathing is difficult or symptoms worsen, contact a doctor."
      );
    }

    if (msg.includes("headache") || msg.includes("migraine")) {
      return (
        "For headache, you can rest in a quiet place, stay hydrated, and avoid long screen time. " +
        "If the pain is sudden, very severe, or associated with vision problems or weakness, seek medical help."
      );
    }

    if (
      msg.includes("stomach") ||
      msg.includes("acidity") ||
      msg.includes("gas")
    ) {
      return (
        "Stomach discomfort or acidity can be reduced by eating light meals, avoiding spicy/oily food, " +
        "and not lying down immediately after eating. If severe or persistent, please visit a doctor."
      );
    }

    if (
      msg.includes("diarrhoea") ||
      msg.includes("loose motion") ||
      msg.includes("loose motions")
    ) {
      return (
        "For diarrhoea, it is very important to prevent dehydration. Drink ORS and plenty of clean water. " +
        "Avoid street food and heavy/oily items. If there is blood in stool, high fever, or weakness, seek urgent care."
      );
    }

    if (
      msg.includes("tired") ||
      msg.includes("stress") ||
      msg.includes("anxiety") ||
      msg.includes("sad")
    ) {
      return (
        "It sounds like you may be feeling stressed or low. Try to take short breaks, talk to someone you trust, " +
        "and ensure you are sleeping and eating properly. If this continues for a long time, consider talking to a professional."
      );
    }

    // Default fallback
    return (
      "Thank you for sharing your symptoms. Based on your message, I can only give general suggestions. " +
      "Please rest well, stay hydrated, and monitor your condition. " +
      "For a proper diagnosis, always consult a qualified doctor."
    );
  }

  function appendMessage(text, sender) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("msg", sender === "bot" ? "bot" : "user");

    const p = document.createElement("p");
    p.textContent = text;
    wrapper.appendChild(p);

    const timeSpan = document.createElement("span");
    timeSpan.classList.add("time");
    timeSpan.textContent = sender === "bot" ? "Bot" : "You";
    wrapper.appendChild(timeSpan);

    messages.appendChild(wrapper);
    messages.scrollTop = messages.scrollHeight; // auto scroll
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const userText = input.value.trim();
    if (!userText) return;

    // Show user message
    appendMessage(userText, "user");
    input.value = "";

    // Small delay for bot response
    setTimeout(() => {
      const botReply = getBotResponse(userText);
      appendMessage(botReply, "bot");
    }, 400);
  });
});
