import { QuizQuestion } from '../types';

export const quizData: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Identify the tense: "She has been working here for five years."',
    options: ['Present Perfect', 'Present Perfect Continuous', 'Past Continuous', 'Simple Past'],
    correctAnswer: 'Present Perfect Continuous',
    type: 'identify'
  },
  {
    id: 'q2',
    question: 'Identify the tense: "They will have finished the project by tomorrow."',
    options: ['Future Perfect', 'Simple Future', 'Future Continuous', 'Present Perfect'],
    correctAnswer: 'Future Perfect',
    type: 'identify'
  },
  {
    id: 'q3',
    question: 'Identify the tense: "I was watching TV when the phone rang."',
    options: ['Simple Past', 'Past Perfect', 'Past Continuous', 'Present Continuous'],
    correctAnswer: 'Past Continuous',
    type: 'identify'
  },
  {
    id: 'q4',
    question: 'Convert to Reported Speech: "I like ice cream," she said. -> She said that she ___ ice cream.',
    options: ['likes', 'liked', 'has liked', 'had liked'],
    correctAnswer: 'liked',
    type: 'convert'
  },
  {
    id: 'q5',
    question: 'Convert to Reported Speech: "We are playing football," they said. -> They said that they ___ football.',
    options: ['are playing', 'were playing', 'had played', 'played'],
    correctAnswer: 'were playing',
    type: 'convert'
  },
  {
    id: 'q6',
    question: 'Convert to Reported Speech: "I have finished my homework," he said. -> He said that he ___ his homework.',
    options: ['finished', 'has finished', 'had finished', 'was finishing'],
    correctAnswer: 'had finished',
    type: 'convert'
  },
  {
    id: 'q7',
    question: 'Identify the tense: "He had already left when I arrived."',
    options: ['Past Simple', 'Past Perfect', 'Present Perfect', 'Past Continuous'],
    correctAnswer: 'Past Perfect',
    type: 'identify'
  },
  {
    id: 'q8',
    question: 'Convert to Reported Speech: "I will call you tomorrow," she promised. -> She promised that she ___ me the next day.',
    options: ['will call', 'would call', 'called', 'had called'],
    correctAnswer: 'would call',
    type: 'convert'
  }
];
