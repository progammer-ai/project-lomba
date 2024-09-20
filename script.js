function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatWindow = document.getElementById("chatWindow");
  
    if (userInput.value.trim() !== "") {
      // Add user message to chat
      const userMessage = document.createElement("div");
      userMessage.classList.add("message", "user-message");
      userMessage.innerText = userInput.value;
      chatWindow.appendChild(userMessage);
  
      // Scroll to the bottom
      chatWindow.scrollTop = chatWindow.scrollHeight;
  
      // Clear input field
      const userMessageText = userInput.value.toLowerCase();
      userInput.value = "";
  
      // Simulate AI response after 1 second
      setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
  
        // Simple AI logic with if-else statements
        if (userMessageText.includes("hello") || userMessageText.includes("hi")) {
          botMessage.innerText = "Hallo saya medicine.ai,ada yang bisa saya bantu?";
        } else if (userMessageText.includes("apa nama obat pilek")) {
          botMessage.innerText = "untuk obat pilek bernama  demacolin";
        } else if (userMessageText.includes("lalu apa yang harus saya lakukan agar tetap sehat")) {
          botMessage.innerText = "anda harus istirahat yang cukup dan makan makanan sehat";
        } else if (userMessageText.includes("bye")) {
          botMessage.innerText = "Goodbye! Have a great day!";
        } else {
          botMessage.innerText = "saya tidak paham maksud anda,bisa ulangi sekali lagi";
        }
  
        chatWindow.appendChild(botMessage);
  
        // Scroll to the bottom
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }, 1000);
    }
  }