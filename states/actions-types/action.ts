import { ActionTypes } from ".";

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
