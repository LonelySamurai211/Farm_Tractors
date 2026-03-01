const preansweredQuestions = [
    {
      question: 'How much is the price',
      answer:
        "I'm sorry, I can't provide fixed prices as they can vary. Please contact us at (+63) 9550916511 or email us at philiptanfarmtractors@gmail.com."
    },
    { question: 'Hello', answer: 'Hello, How may I help you?' },
    {
      question: 'Where are you located',
      answer:
        'We are located at 59 C3 Road cor. Dagat-dagatan Avenue, Caloocan City, Metro Manila. '
    }
  ]
  
  function findMostSimilarQuestion(input) {
    let maxSimilarity = -1
    let mostSimilarAnswer = ''
  
    preansweredQuestions.forEach(item => {
      const similarity = similarityScore(input, item.question)
      if (similarity > maxSimilarity) {
        maxSimilarity = similarity
        mostSimilarAnswer = item.answer
      }
    })
  
    return mostSimilarAnswer
  }
  
  function similarityScore(input, question) {
    const lowerInput = input.toLowerCase()
    const lowerQuestion = question.toLowerCase()
  
    let similarity = 0
    for (let i = 0; i < lowerInput.length; i++) {
      if (lowerQuestion.includes(lowerInput[i])) {
        similarity++
      }
    }
  
    return similarity
  }
  
  function displayMessage(userInput, botResponse) {
    const chatBox = document.getElementById('chat-box')
    chatBox.innerHTML += `<strong>You:</strong> ${userInput}<br>`
    chatBox.innerHTML += `<strong>Bot:</strong> ${botResponse}<br><br>`
  
    const messages = chatBox.getElementsByTagName('strong')
    if (messages.length > 4) { 
      while (chatBox.getElementsByTagName('strong').length > 4) {
        chatBox.removeChild(chatBox.firstChild)
      }
    }
  
    chatBox.scrollTop = chatBox.scrollHeight
  }
  
  document.getElementById('input-box').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const userInput = e.target.value.trim()
      if (userInput !== '') {
        const botResponse = findMostSimilarQuestion(userInput)
        displayMessage(userInput, botResponse)
        e.target.value = ''
      }
    }
  })