export const URL = {
PROD: 'https://p-gen-v.vercel.app/api/estimate',
LOCAL:"http://localhost:8080/estimate",
GENAI_LOCAL:"http://localhost:8090/askai",
GENAI_PROD_vercel:'https://p-gen-v.vercel.app/api/hello'
}

export const EmbeddedUrls = {
  IPACE:'https://ipace.w.moravia.com/Login'
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

  export interface ApiData {
    [key: string]: string;
}