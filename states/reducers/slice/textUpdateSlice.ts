import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  UpdateAction,
  skillUpdateAction,
  certificateActions,
  updateObjectiveAction,
  editorExperienceActions,
  searchSuggestionsActions,
} from "../../actions-types/action";
import {
  update,
  workExp as InputItem,
  eduHistory,
  updateCert,
} from "@/states/actions-types";

const initialState: update = {
  personalDetails: {
    name: "",
    profession: "",
    country: "",
    state: "",
    email: "",
    phone: "",
  },

  objective: "",
  editorExperience: "",
  searchSuggestions: "",

  skills: [
    {
      value: "React",
      label: "React",
    },

    {
      value: "Angular",
      label: "Angular",
    },
  ],

  workExperience: [
    {
      job_title: "",
      company_name: "",
      country: "",
      state: "",
      start_month: "",
      start_year: "",
      end_month: "",
      end_year: "",
      description: "",
      checkboxstatus: false,
    },
  ],

  educationHistory: [
    {
      school_name: "",
      school_location: "",
      degree_program: "",
      field_of_study: "",
      graduation_month: "",
      graduation_year: "",
    },
  ],

  certification: [
    {
      value: "",
    },
  ],
};

export const textUpdateSlice = createSlice({
  name: "updatetext",
  initialState,
  reducers: {
    updateName(
      state: update = initialState,
      action: PayloadAction<UpdateAction["payload"]>
    ) {
      const updatePersonalDetails = {
        name: action.payload.name,
        profession: action.payload.profession,
        country: action.payload.country,
        state: action.payload.state,
        email: action.payload.email,
        phone: action.payload.phone,
      };
      state.personalDetails = { ...updatePersonalDetails };
    },

    updateSkills(
      state: update = initialState,
      action: PayloadAction<skillUpdateAction["payload"]>
    ) {
      const skill = {
        value: action.payload.value,
        label: action.payload.label,
      };
      state.skills = [...state.skills, skill];
    },

    deleteSkill(
      state: update = initialState,
      action: PayloadAction<skillUpdateAction["payload"]>
    ) {
      state.skills = state.skills.filter(
        (skill) => skill.value !== action.payload.value
      );
    },

    updateWorkExperience(
      state: update = initialState,
      action: PayloadAction<{ index: number; data: InputItem }>
    ) {
      const { index, data } = action.payload;
      const updatedWorkExperience = [...state.workExperience];
      updatedWorkExperience[index] = data;
      return { ...state, workExperience: updatedWorkExperience };
    },
    addWorkExperience(
      state: update = initialState,
      action: PayloadAction<InputItem>
    ) {
      state.workExperience.push({ ...action.payload });
    },

    deleteWorkExperience(
      state: update = initialState,
      action: PayloadAction<number>
    ) {
      const index = action.payload;
      state.workExperience.splice(index, 1);
    },

    updateEducationHistory(
      state: update = initialState,
      action: PayloadAction<{ index: number; data: eduHistory }>
    ) {
      const { index, data } = action.payload;
      const updateEducationHistory = [...state.educationHistory];
      updateEducationHistory[index] = data;
      return { ...state, educationHistory: updateEducationHistory };
    },

    addEducationHistory(
      state: update = initialState,
      action: PayloadAction<eduHistory>
    ) {
      state.educationHistory.push({ ...action.payload });
    },

    deleteEducationHistory(
      state: update = initialState,
      action: PayloadAction<number>
    ) {
      const index = action.payload;
      state.educationHistory.splice(index, 1);
    },

    updateCertification(
      state: update = initialState,
      action: PayloadAction<{ index: number; value: string }>
    ) {
      const { index, value } = action.payload;
      state.certification[index].value = value;
    },

    addCertification(
      state: update = initialState,
      action: PayloadAction<certificateActions["payload"]>
    ) {
      state.certification.push({ value: "" });
    },
    deleteCertification(
      state: update = initialState,
      action: PayloadAction<number>
    ) {
      const index = action.payload;
      state.certification.splice(index, 1);
    },

    updateObjective(
      state: update = initialState,
      action: PayloadAction<string>
    ) {
      state.objective = action.payload;
    },

    search(
      state: update,
      action: PayloadAction<searchSuggestionsActions["payload"]>
    ) {
      state.searchSuggestions = action.payload;
    },
  },
});

export const {
  updateName,
  updateSkills,
  deleteSkill,
  updateWorkExperience,
  addWorkExperience,
  deleteWorkExperience,
  updateEducationHistory,
  addEducationHistory,
  deleteEducationHistory,
  updateCertification,
  addCertification,
  deleteCertification,
  updateObjective,
  search,
} = textUpdateSlice.actions;

export default textUpdateSlice.reducer;
