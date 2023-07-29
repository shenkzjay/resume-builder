export enum ActionTypes {
  UPADATE_NAME = "update-personal-details",
  UPDATE_SKILL = "update-skill",
  UPDATE_WORK_EXPERIENCE = "update-work-experience",
  DELETE_WORK_EXPERIENCE = "delete-work-experience",
  EDUCATION_HISTORY = "education-history",
  CERTIFICATE = "certificate",
  OBJECTIVES = "career-objective",
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
}

export interface eduHistory {
  schoolName: string;
  course: string;
  degreeTitle: string;
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

interface updateName {
  personalDetails: personalDetails;
  skills: skillUpdate[];
  workExperience: workExp[];
  educationHistory: eduHistory[];
  certification: updateCert[];
  objective: string;
  editorExperience: string;
}

export type update = updateName;
