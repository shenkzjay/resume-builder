export enum ActionTypes {
  UPADATE_NAME = "update-name",
  UPDATE_SKILL = "update-skill",
  UPDATE_WORK_EXPERIENCE = "update-work-experience",
  DELETE_WORK_EXPERIENCE = "delete-work-experience",
  EDUCATION_HISTORY = "education-history",
  CERTIFICATE = "certificate",
}

interface skillUpdate {
  value: string;
  label: string;
}

export interface workExp {
  jobTitle: string;
  companyName: string;
  country: string;
}

export interface eduHistory {
  schoolName: string;
  course: string;
  degreeTitle: string;
}

export interface updateCert {
  value: string;
}

interface updateName {
  value: string | undefined;
  skills: skillUpdate[];
  workExperience: workExp[];
  educationHistory: eduHistory[];
  certification: updateCert[];
}

export type update = updateName;
