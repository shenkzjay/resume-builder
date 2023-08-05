import { ActionTypes, workExp } from ".";

interface UpdateAction {
  type: ActionTypes.UPADATE_NAME;
  payload: {
    name: string;
    profession: string;
    country: string;
    state: string;
    email: string;
    phone: string;
  };
}

interface skillUpdateAction {
  type: ActionTypes.UPDATE_SKILL;
  payload: {
    value: string;
    label: string;
  };
}

interface workExpData {
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

interface educationHistory {
  school_name: string;
  school_location: string;
  degree_program: string;
  field_of_study: string;
  graduation_month: string;
  graduation_year: string;
}

interface educationHistoryAction {
  type: ActionTypes.EDUCATION_HISTORY;
  payload: {
    index: number;
    data: educationHistory[];
  };
}

export interface updateProject {
  projectName: string;
  projectLink: string;
  projectDescription: string;
}

interface updateProjectActions {
  type: ActionTypes.UPDATE_PROJECT;
  payload: {
    index: number;
    data: updateProject[];
  };
}

export const updateObjectiveAction = (content: string) => ({
  type: ActionTypes.OBJECTIVES,
  payload: content,
});

interface workExperienceAction {
  type: ActionTypes.UPDATE_WORK_EXPERIENCE;
  payload: {
    index: number;
    data: workExpData[];
  };
}

interface certificateActions {
  type: ActionTypes.CERTIFICATE;
  payload: {
    value: string;
  };
}

interface editorExperienceActions {
  type: ActionTypes.UPDATE_WORK_EXPERIENCE;
  payload: string;
}

interface searchSuggestionsActions {
  type: ActionTypes.AI_SEARCH;
  payload: string;
}

type AddWorkExperienceAction = {
  type: string;
  payload: {
    workExperience: workExp;
    updateObjective: string; // Add the new property here
  };
};

export interface updateLinks {
  github: string;
  linkedIn: string;
  twitter: string;
}

interface updateSocialLinksActions {
  type: ActionTypes.UPDATE_SKILL;
  payload: {
    github: string;
    linkedIn: string;
    twitter: string;
  };
}

export type {
  UpdateAction,
  skillUpdateAction,
  workExperienceAction,
  educationHistoryAction,
  certificateActions,
  editorExperienceActions,
  searchSuggestionsActions,
  AddWorkExperienceAction,
  updateProjectActions,
  updateSocialLinksActions,
};

export const deleteWorkExperienceAction = (index: number) => ({
  type: ActionTypes.DELETE_WORK_EXPERIENCE,
  payload: index,
});

export const addWorkExperience = (
  data: workExp,
  updateObjective: string
): AddWorkExperienceAction => {
  return {
    type: ActionTypes.ADD_WORK_EXPERIENCE,
    payload: {
      workExperience: data,
      updateObjective, // Include the new property in the payload
    },
  };
};
