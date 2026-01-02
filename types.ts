
export interface UserProfile {
  fullName: string;
  birthDate: string;
  birthTime?: string;
  gender: string;
  seeking: string;
  interests: string;
  personality: string;
  handwritingData?: string; // Base64 image data from the canvas
}

export interface PredictionResult {
  loverDescription: string;
  numerologyReading: string;
  astrologyInsight: string;
  graphologyInsight: string; 
  meetingStory: string;
  compatibilityScore: number;
  visualPrompt: string;
}

export enum AppState {
  WELCOME = 'WELCOME',
  AUTH = 'AUTH',
  INPUT = 'INPUT',
  LOADING = 'LOADING',
  RESULT = 'RESULT'
}
