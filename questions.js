// Definimos un arreglo con las preguntas y sus respuestas
const questions = [
    {
        question: "What is the past tense of the verb 'swim'?",
        options: ["Swam", "Swimmed", "Swum"],
        correctAnswer: 2,
      },
      {
        question: "Which tense is used to talk about an action that will be completed before a certain point in the future?",
        options: ["Future Perfect", "Past Simple", "Present Continuous", "Present Perfect"],
        correctAnswer: 0,
      },
      {
        question: "Choose the correct form of the verb: 'I _____ to the beach tomorrow.'",
        options: ["will goes", "will going", "am going to go", "will go"],
        correctAnswer: 3,
      },
      {
        question: "What is the past participle of the verb 'run'?",
        options: ["running", "runned", "ran", "run"],
        correctAnswer: 3,
      },
      {
        question: "Which sentence is in the Present Perfect tense?",
        options: [
          "She has been studying for her exam yesterday.",
          "They will have arrived by the time you get there.",
          "We had already finished the project.",
          "He has lived in this city for five years.",
        ],
        correctAnswer: 3,
      },
      {
        question: "Choose the correct form of 'have' for the pronoun 'she'.",
        options: ["has", "have", "had", "having"],
        correctAnswer: 0,
      },
      {
        question: "What is the future perfect form of the verb 'learn'?",
        options: ["will learning", "will learned", "will have learned", "will learn"],
        correctAnswer: 2,
      },
      {
        question: "Complete the sentence: 'There _______ many people at the concert.'",
        options: ["is", "was", "were", "has"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct form of 'have been' for the pronoun 'I'?",
        options: ["have been", "has been", "had been", "having been"],
        correctAnswer: 0,
      },
      {
        question: "Which sentence is in the Past Simple tense?",
        options: [
          "He will be finishing his work soon.",
          "We have been living here for three years.",
          "They are going to visit their grandparents.",
          "She played tennis yesterday.",
        ],
        correctAnswer: 3,
      },
      {
        question: "Choose the correct form of 'there' for a singular noun.",
        options: ["there", "there's", "theirs", "theres"],
        correctAnswer: 1,
      },
      {
        question: "Choose the correct form of the verb: She _____ a book every week.",
        options: ["reads", "read", "reading", "is reading"],
        correctAnswer: 0,
      },
      {
        question: "What is the plural form of 'child'?",
        options: ["Childs", "Children", "Childes", "Child's"],
        correctAnswer: 1,
      },
      {
        question: "Choose the correct pronoun: _____ is my sister.",
        options: ["She", "Her", "Hers", "He"],
        correctAnswer: 0,
      },
      {
        question: "Which sentence is in the Present Continuous tense?",
        options: [
          "They have visited the museum yesterday.",
          "I will study for the exam tomorrow.",
          "We are watching a movie now.",
          "She had finished her homework before dinner.",
        ],
        correctAnswer: 2,
      },
      {
        question: "Choose the correct form of 'be' for the pronoun 'I'.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 0,
      },
      {
        question: "What is the comparative form of the adjective 'good'?",
        options: ["Better", "Best", "More good", "Gooder"],
        correctAnswer: 0,
      },
      {
        question: "Complete the sentence: '______ is my friend from Spain.'",
        options: ["He", "She", "It", "This"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct form of the verb 'go' in the Past Simple tense?",
        options: ["Go", "Went", "Gone", "Going"],
        correctAnswer: 1,
      },
      {
        question: "Choose the correct form of 'have' for the pronoun 'they'.",
        options: ["has", "have", "had", "having"],
        correctAnswer: 1,
      },
      {
        question: "Which sentence is in the Future Simple tense?",
        options: [
          "I am going to the gym right now.",
          "He has been working on the project for days.",
          "We will visit our grandparents on the weekend.",
          "She had already finished her assignment.",
        ],
        correctAnswer: 2,
      },
      {
        question: "Choose the correct form of the verb: They _____ to the park every Sunday.",
        options: ["go", "goes", "going", "is going"],
        correctAnswer: 0,
      },
      {
        question: "What is the past tense of the verb 'eat'?",
        options: ["Eat", "Ate", "Eaten", "Eating"],
        correctAnswer: 1,
      },
      {
        question: "Choose the correct form of the verb in the Present Continuous tense: He _____ to the store right now.",
        options: ["go", "goes", "going", "is going"],
        correctAnswer: 3,
      },
      {
        question: "What is the Past Continuous tense of the verb 'play'?",
        options: ["Play", "Played", "Playing", "Was playing"],
        correctAnswer: 3,
      },
      {
        question: "Choose the correct pronoun: _____ are going to the party tonight.",
        options: ["He", "She", "They", "We"],
        correctAnswer: 2,
      },
      {
        question: "Which sentence is in the Future Continuous tense?",
        options: [
          "I was studying when he called.",
          "She will write an email after lunch.",
          "They are going to the movies tonight.",
          "We will be having dinner at 7 pm.",
        ],
        correctAnswer: 3,
      },
      {
        question: "Choose the correct form of 'be' in the Present Continuous tense for the pronoun 'you'.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 2,
      },
      {
        question: "What is the Present Continuous tense of the verb 'sleep'?",
        options: ["Sleeps", "Slept", "Sleeping", "Is sleeping"],
        correctAnswer: 3,
      },
      {
        question: "Complete the sentence: '______ are studying for the exam.'",
        options: ["He", "She", "It", "They"],
        correctAnswer: 3,
      },
      {
        question: "What is the Past Continuous tense of the verb 'run'?",
        options: ["Run", "Ran", "Running", "Was running"],
        correctAnswer: 3,
      },
      {
        question: "Choose the correct form of 'be' in the Future Continuous tense for the pronoun 'she'.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 1,
      },
      {
        question: "Which sentence is in the Past Continuous tense?",
        options: [
          "I am watching a movie now.",
          "She will be playing tennis tomorrow.",
          "They were dancing at the party last night.",
          "He has been cooking dinner for an hour.",
        ],
        correctAnswer: 2,
      },
      {
        question: "Choose the correct pronoun: _____ is my best friend.",
        options: ["He", "Him", "His", "Himself"],
        correctAnswer: 0,
      },
      {
        question: "Which sentence is in the Present Simple tense?",
        options: [
          "We are going to the movies tonight.",
          "She has written a letter to her grandparents.",
          "They have been studying for the test.",
          "He likes to play soccer on weekends.",
        ],
        correctAnswer: 3,
      },
      {
        question: "Choose the correct form of 'be' for the pronoun 'she'.",
        options: ["am", "is", "are", "be"],
        correctAnswer: 1,
      },
      {
        question: "What is the comparative form of the adjective 'small'?",
        options: ["Smaller", "Smallerer", "Smalliest", "More small"],
        correctAnswer: 0,
      },
      {
        question: "Complete the sentence: '______ is my favorite color.'",
        options: ["He", "She", "It", "This"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct form of the verb 'do' in the Past Simple tense?",
        options: ["Do", "Did", "Done", "Doing"],
        correctAnswer: 1,
      },
      {
        question: "Choose the correct form of 'have' for the pronoun 'we'.",
        options: ["has", "have", "had", "having"],
        correctAnswer: 1,
      },
      {
        question: "Which sentence is in the Future Continuous tense?",
        options: [
          "I will finish my work before lunch.",
          "She has been singing all day.",
          "They are going to the beach tomorrow.",
          "He will be sleeping at this time tomorrow.",
        ],
        correctAnswer: 3,
      },
  ];
  