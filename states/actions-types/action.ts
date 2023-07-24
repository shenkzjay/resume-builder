import { ActionTypes } from ".";

interface UpdateAction {
  type: ActionTypes.UPADATE_NAME;
  payload: string;
}

interface skillUpdateAction {
  type: ActionTypes.UPDATE_SKILL;
  payload: {
    value: string;
    label: string;
  };
}

interface workExpData {
  jobTitle: string;
  companyName: string;
  country: string;
}

interface educationHistory {
  schoolName: string;
  course: string;
  degreeTitle: string;
}

interface educationHistoryAction {
  type: ActionTypes.EDUCATION_HISTORY;
  payload: {
    index: number;
    data: educationHistory[];
  };
}

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

export type {
  UpdateAction,
  skillUpdateAction,
  workExperienceAction,
  educationHistoryAction,
  certificateActions,
};

export const deleteWorkExperienceAction = (index: number) => ({
  type: ActionTypes.DELETE_WORK_EXPERIENCE,
  payload: index,
});
