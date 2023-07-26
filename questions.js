// Definimos un arreglo con las preguntas y sus respuestas
const questions = [
  {
    question: "Which word is a synonym for 'abundant'?",
    options: ["Scarcity", "Limited", "Ample", "Scarce"],
    correctAnswer: 2
  },
  {
    question: "Choose the correct form of the verb to complete the sentence: The cat _______ on the windowsill.",
    options: ["Sleep", "Is sleeping", "Slept", "Sleeps"],
    correctAnswer: 1
  },
  {
    question: "Identify the correct plural form of the word: 'Child'",
    options: ["Childs", "Children", "Childes", "Child's"],
    correctAnswer: 1
  },
  {
    question: "Which sentence is grammatically incorrect?",
    options: ["She don't like coffee.", "He plays the piano very well.", "They're going to the mall.", "We have been to Paris."],
    correctAnswer: 0
  },
  {
    question: "Select the appropriate word to complete the sentence: I have _______ to the beach.",
    options: ["Gone", "Go", "Went", "Going"],
    correctAnswer: 0
  },
  {
    question: "Choose the correct spelling: 'Receiv'",
    options: ["Recieve", "Receve", "Receive", "Receiv"],
    correctAnswer: 2
  },
  {
    question: "What is the capital of Australia?",
    options: ["Melbourne", "Sydney", "Canberra", "Perth"],
    correctAnswer: 2
  },
  {
    question: "Select the correct passive form of the sentence: 'They build houses.'",
    options: ["Houses are built by them.", "Houses were being built by them.", "Houses have been built by them.", "Houses had been built by them."],
    correctAnswer: 0
  },
  {
    question: "Which word is a synonym for 'joyful'?",
    options: ["Gloomy", "Happy", "Sad", "Ecstatic"],
    correctAnswer: 1
  },
  {
    question: "Identify the correct superlative form of the adjective 'tall'.",
    options: ["Taller", "Tallest", "More tall", "Talliest"],
    correctAnswer: 1
  },
  {
    question: "What does the idiom 'to break the ice' mean?",
    options: ["To melt something frozen.", "To start a conversation in a social setting.", "To play a game on ice.", "To fix a broken relationship."],
    correctAnswer: 1
  },
  {
    question: "Choose the correct form of the verb to complete the sentence: The sun _______ in the east.",
    options: ["Rises", "Rose", "Risen", "Rising"],
    correctAnswer: 0
  },
  {
    question: "Identify the correct plural form of the word: 'Person'",
    options: ["Persons", "People", "Persones", "People's"],
    correctAnswer: 1
  },
  {
    question: "Which sentence is in the Passive Voice?",
    options: ["The teacher is explaining the lesson.", "John eats apples.", "The book was written by Mark.", "We are going to the park."],
    correctAnswer: 2
  },
  {
    question: "Select the correct word to complete the sentence: She _____ a book when I saw her.",
    options: ["Reading", "Reads", "Has read", "Read"],
    correctAnswer: 0
  },
  {
    question: "Choose the correct form of 'to be' to complete the sentence: She _____ a doctor.",
    options: ["Is", "Are", "Am", "Be"],
    correctAnswer: 0
  },
  {
    question: "What is the past tense of the verb 'go'?",
    options: ["Go", "Went", "Gone", "Going"],
    correctAnswer: 1
  },
  {
    question: "Select the correct form of the pronoun to complete the sentence: _____ is a nice day.",
    options: ["I", "Me", "We", "Us"],
    correctAnswer: 0
  },
  {
    question: "Identify the correct comparative form of the adjective 'small'.",
    options: ["Smaller", "Smallier", "More small", "Smallest"],
    correctAnswer: 0
  },
  {
    question: "Which word is a synonym for 'brave'?",
    options: ["Fearful", "Cowardly", "Bold", "Timid"],
    correctAnswer: 2
  },
  {
    question: "Choose the correct phrasal verb that means 'to postpone': They decided to _____ the meeting until next week.",
    options: ["Call off", "Put off", "Carry on", "Turn down"],
    correctAnswer: 1
  },
  {
    question: "What is the correct order of adjectives in this sentence? 'She bought a beautiful, small, Italian handbag.'",
    options: ["beautiful, small, Italian", "Italian, beautiful, small", "small, Italian, beautiful", "Italian, small, beautiful"],
    correctAnswer: 1
  },
  {
    question: "Select the correct word to complete the sentence: The company's profits have _____ increased this year.",
    options: ["Significantly", "Slightly", "Moderately", "Gradually"],
    correctAnswer: 0
  },
  {
    question: "Identify the correct form of the verb to complete the sentence: By the time we got to the theater, the movie _______.",
    options: ["Has started", "Had started", "Will start", "Would start"],
    correctAnswer: 1
  },
  {
    question: "Choose the correct sentence with an inverted conditional: ",
    options: ["If I had studied harder, I will pass the exam.", "If I studied harder, I will pass the exam.", "If I had studied harder, I would have passed the exam.", "If I studied harder, I would have passed the exam."],
    correctAnswer: 2
  },
  {
    question: "What does the idiom 'to hit the nail on the head' mean?",
    options: ["To hit a nail with a hammer.", "To miss an important point.", "To do something dangerous.", "To describe something perfectly or identify the exact issue."],
    correctAnswer: 3
  },
  {
    question: "Select the correct form of the verb to complete the sentence: He wishes he _____ a better job.",
    options: ["Has", "Had", "Have", "Having"],
    correctAnswer: 1
  },
  {
    question: "Choose the correct word to complete the sentence: Her success is the result of her hard work and _____.",
    options: ["Dedicate", "Dedicates", "Dedicating", "Dedication"],
    correctAnswer: 3
  },
  {
    question: "What is the correct reported speech of the direct speech: 'I will finish the project.'",
    options: ["He said he will finish the project.", "He said he would finish the project.", "He said he finishes the project.", "He said he finished the project."],
    correctAnswer: 1
  },
  {
    question: "Identify the correct word to complete the sentence: The new regulations will _____ to all employees starting next month.",
    options: ["Apply", "Applies", "Applying", "Applicable"],
    correctAnswer: 0
  },
  {
    question: "Choose the correct word to complete the sentence: The ballet performance was so _____ that the audience gave a standing ovation.",
    options: ["Bored", "Boring", "Bore", "Boredom"],
    correctAnswer: 1
  },
  {
    question: "What is the correct passive voice of the sentence: 'They will build a new stadium.'",
    options: ["A new stadium is built by them.", "A new stadium will be built by them.", "A new stadium was built by them.", "A new stadium will have been built by them."],
    correctAnswer: 1
  },
  {
    question: "Identify the correct form of the adjective to complete the sentence: The weather today is _____ than yesterday.",
    options: ["Good", "Better", "Best", "Goodest"],
    correctAnswer: 1
  },
  {
    question: "Select the correct word to complete the sentence: The team's performance was outstanding, _____ they didn't win the championship.",
    options: ["However", "Moreover", "Therefore", "Consequently"],
    correctAnswer: 0
  },
  {
    question: "What is the plural form of the word 'ox'?",
    options: ["Oxes", "Oxen", "Ox's", "Oxies"],
    correctAnswer: 1
  },
  {
    question: "Choose the correct form of the verb to complete the sentence: Maria, along with her friends, _____ going to the concert.",
    options: ["Is", "Are", "Has", "Have"],
    correctAnswer: 0
  },
  {
    question: "Identify the correct word to complete the sentence: The thief managed to _____ without being noticed.",
    options: ["Steal", "Stole", "Stolen", "Stealing"],
    correctAnswer: 3
  },
  {
    question: "Select the correct word to complete the sentence: She spoke to him _____, hoping to get a positive response.",
    options: ["Pleasant", "Pleasure", "Pleasantly", "Please"],
    correctAnswer: 2
  },
  {
    question: "What is the correct order of the following sentence? 'Books / she / has / reading / been'",
    options: ["She has been books reading.", "Books she has reading been.", "She has been reading books.", "Reading has she been books."],
    correctAnswer: 2
  },
  {
    question: "Choose the correct word to complete the sentence: The students were asked to write a _____ essay on climate change.",
    options: ["Two-thousand-word", "Two-thousands-word", "Two-thousand-words", "Two-thousands-words"],
    correctAnswer: 0
  },
  {
    question: "Choose the correct word to complete the sentence: She has been working here _____ five years.",
    options: ["since", "for", "during", "from"],
    correctAnswer: 1
  },
  {
    question: "Identify the correct word to complete the sentence: The mountain climbers reached the _____ of the peak.",
    options: ["summit", "summons", "summary", "summer"],
    correctAnswer: 0
  },
  {
    question: "Select the correct word to complete the sentence: The musician played the violin _____.",
    options: ["marvelous", "marvelously", "marvel", "marvelled"],
    correctAnswer: 1
  },
  {
    question: "What is the correct passive voice of the sentence: 'They have built a new bridge.'",
    options: ["A new bridge was built by them.", "A new bridge is built by them.", "A new bridge has been built by them.", "A new bridge has built by them."],
    correctAnswer: 2
  },
  {
    question: "Choose the correct word to complete the sentence: The novel was so _____ that I couldn't put it down.",
    options: ["captivate", "captivated", "captivating", "captivation"],
    correctAnswer: 2
  },
  {
    question: "What does the phrase 'to beat around the bush' mean?",
    options: ["To be direct and honest.", "To avoid discussing the main topic.", "To give up easily.", "To work hard to achieve a goal."],
    correctAnswer: 1
  },
  {
    question: "Select the correct word to complete the sentence: The police are _____ for the missing child.",
    options: ["looking", "looking after", "looking into", "looking up"],
    correctAnswer: 2
  },
  {
    question: "Identify the correct word to complete the sentence: The chef prepared a delicious meal with _____ ingredients.",
    options: ["freshest", "more fresh", "fresher", "fresh"],
    correctAnswer: 0
  },
  {
    question: "Choose the correct word to complete the sentence: The conference was attended by people from various _____ backgrounds.",
    options: ["culture", "cultural", "cultures", "culturally"],
    correctAnswer: 2
  },
  {
    question: "What is the correct reported speech of the direct speech: 'I will meet you at the café.'",
    options: ["He said he will meet me at the café.", "He said he will meet you at the café.", "He said he would meet me at the café.", "He said he would meet you at the café."],
    correctAnswer: 3
  }

  ];
