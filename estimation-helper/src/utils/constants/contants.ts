export const URL = {
PROD: 'https://estimate-efforts.onrender.com/estimate',
LOCAL:"http://localhost:8080/estimate",
GENAI_LOCAL:"http://localhost:8090",
GENAI_PROD:'https://generative-ai-0y8e.onrender.com'
}

export const initialFormData = {
    effortDays: 0,
    numberOfResource: 0,
    numberOfTester: 0,
    numberOfProjectManager: 0,
    projectName: '',
    assumptions: [''],
    queries: [''],
  }