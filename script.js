const sentences = [
    "Portfolio Currently Being Updated 🔧",
    "Thank you for visiting!",
    "Feel free to reach out 🙂",
    "Have a great day!"
  ];
  
  let currentSentence = 0;
  let currentChar = 0;
  let isDeleting = false;
  const typingSpeed = 100; // typing speed per character
  const deletingSpeed = 55; // speed for deleting
  const delayBetweenSentences = 1500; // pause before deleting
  const typingElement = document.getElementById("typing-text");
  
  function type() {
    const sentence = sentences[currentSentence];
  
    if (isDeleting) {
      typingElement.textContent = sentence.substring(0, currentChar - 1);
      currentChar--;
  
      if (currentChar === 0) {
        isDeleting = false;
        currentSentence = (currentSentence + 1) % sentences.length; // loop back to first
      }
      setTimeout(type, deletingSpeed);
    } else {
      typingElement.textContent = sentence.substring(0, currentChar + 1);
      currentChar++;
  
      if (currentChar === sentence.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenSentences);
        return;
      }
      setTimeout(type, typingSpeed);
    }
  }
  
  // Start typing
  type();
// Resume modal
const openModalBtn = document.getElementById('open-resume-modal');
const modal = document.getElementById('resume-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'; // show modal
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // hide modal
});

// Close modal if user clicks outside modal-content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
  
