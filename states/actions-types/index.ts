export enum ActionTypes {
  UPADATE_NAME = "update-personal-details",
  UPDATE_SKILL = "update-skill",
  UPDATE_WORK_EXPERIENCE = "update-work-experience",
  DELETE_WORK_EXPERIENCE = "delete-work-experience",
  EDUCATION_HISTORY = "education-history",
  CERTIFICATE = "certificate",
  OBJECTIVES = "career-objective",
  AI_SEARCH = "aisearch",
  ADD_WORK_EXPERIENCE = "add-wor-experience",
}

interface skillUpdate {
  value: string;
  label: string;
}

export interface workExp {
  job_title: string;
  company_name: string;
  country: string;
  state: string;
  start_month: string;
  start_year: string;
  end_month: string;
  end_year: string;
  description: string;
  checkboxstatus: boolean;
}

export interface eduHistory {
  school_name: string;
  school_location: string;
  degree_program: string;
  field_of_study: string;
  graduation_month: string;
  graduation_year: string;
}

export interface updateCert {
  value: string;
}

export interface personalDetails {
  name: string;
  profession: string;
  country: string;
  state: string;
  email: string;
  phone: string;
}

export interface trial {
  workexperience: workExp[];
  updateObjectives: string;
}

interface updateName {
  personalDetails: personalDetails;
  skills: skillUpdate[];
  workExperience: workExp[];
  educationHistory: eduHistory[];
  certification: updateCert[];
  objective: string;
  editorExperience: string;
  searchSuggestions: string;
}

export type update = updateName;
