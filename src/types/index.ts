export interface VerbDef {
  base: string;
  v2: string;
  v3: string;
  translation: string;
  type: 'regular' | 'irregular';
}

export interface TenseRule {
  id: string;
  name: string;
  affirmative: string;
  negative: string;
  interrogative: string;
  reportedSpeech: string;
  example: string;
  keywords: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  type: 'identify' | 'convert';
}
