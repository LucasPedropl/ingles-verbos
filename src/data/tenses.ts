import { TenseRule } from '../types';

export const tensesData: TenseRule[] = [
  {
    id: 'present-simple',
    name: 'Simple Present',
    affirmative: 'Subject + V1 (s/es for he/she/it)',
    negative: 'Subject + do/does + not + V1',
    interrogative: 'Do/Does + Subject + V1?',
    reportedSpeech: 'Simple Past',
    example: 'She plays tennis every weekend.',
    keywords: ['always', 'usually', 'often', 'every day', 'sometimes', 'never']
  },
  {
    id: 'present-continuous',
    name: 'Present Continuous',
    affirmative: 'Subject + am/is/are + V-ing',
    negative: 'Subject + am/is/are + not + V-ing',
    interrogative: 'Am/Is/Are + Subject + V-ing?',
    reportedSpeech: 'Past Continuous',
    example: 'They are studying for the exam right now.',
    keywords: ['now', 'right now', 'at the moment', 'currently', 'today']
  },
  {
    id: 'past-simple',
    name: 'Simple Past',
    affirmative: 'Subject + V2 (ed or irregular)',
    negative: 'Subject + did + not + V1',
    interrogative: 'Did + Subject + V1?',
    reportedSpeech: 'Past Perfect',
    example: 'He visited Paris last year.',
    keywords: ['yesterday', 'last week', 'last month', 'ago', 'in 2010']
  },
  {
    id: 'past-continuous',
    name: 'Past Continuous',
    affirmative: 'Subject + was/were + V-ing',
    negative: 'Subject + was/were + not + V-ing',
    interrogative: 'Was/Were + Subject + V-ing?',
    reportedSpeech: 'Past Perfect Continuous',
    example: 'I was reading a book when the phone rang.',
    keywords: ['while', 'when', 'at 8 PM yesterday', 'all day yesterday']
  },
  {
    id: 'present-perfect',
    name: 'Present Perfect',
    affirmative: 'Subject + have/has + V3',
    negative: 'Subject + have/has + not + V3',
    interrogative: 'Have/Has + Subject + V3?',
    reportedSpeech: 'Past Perfect',
    example: 'We have finished our homework.',
    keywords: ['already', 'yet', 'just', 'ever', 'never', 'since', 'for', 'recently']
  },
  {
    id: 'past-perfect',
    name: 'Past Perfect',
    affirmative: 'Subject + had + V3',
    negative: 'Subject + had + not + V3',
    interrogative: 'Had + Subject + V3?',
    reportedSpeech: 'Past Perfect (No change)',
    example: 'She had already left when I arrived.',
    keywords: ['before', 'after', 'by the time', 'already', 'until']
  },
  {
    id: 'future-simple',
    name: 'Simple Future (Will)',
    affirmative: 'Subject + will + V1',
    negative: "Subject + will + not (won't) + V1",
    interrogative: 'Will + Subject + V1?',
    reportedSpeech: 'Conditional (Would)',
    example: 'I will call you tomorrow.',
    keywords: ['tomorrow', 'next week', 'next year', 'in the future', 'soon', 'later']
  }
];
