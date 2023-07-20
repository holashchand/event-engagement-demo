export interface Exhibit {
  did: string,
  name: string,
  shortDescription: string,
  fullDescription: string,
  logoURL: string,
  videoURL: string,
  boothNumber: string,
  startDate: string,
  endDate: string,
  organization: string,
  qrId: string,
  quizConfig: {
    title: string,
    description: string,
    questions: [
      {
        question: string,
        correctAnswer: string,
        options: [
          string
        ]
      }
    ]
  },
  additionalProp1: {
    visited: boolean
  }
}

export interface ExhibitDetailsResponse {
  exhibitDetails: {
    name: string,
    mobileNumber: string,
    shortDescription: string,
    fullDescription: string,
    logoURL: string,
    videoURL: string,
    boothNumber: string,
    startDate: string,
    endDate: string,
    organization: string,
    qrId: string
  },
  quizConfig: {
    title: string,
    description: string,
    noOfQuestionPerQuiz: 5,
    thresholdLimit: 4,
    questions: [
      {
        osid: string,
        question: string,
        correctAnswer: string,
        options: [
          string
        ]
      }
    ]
  }
}