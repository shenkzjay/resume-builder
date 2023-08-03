import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "@/states/store";
import axios from "axios";

const UseSuggestions = () => {
  const searchSuggestions = useSelector(
    (state: RootState) => state.updateTextName.searchSuggestions
  );

  const searchData = {
    phrase: searchSuggestions,
  };

  console.log(searchSuggestions);
  const { isLoading, error, data } = useQuery<{ data: any }, Error>({
    queryKey: ["suggestions", searchSuggestions],
    queryFn: async () => {
      console.log("API call started...");
      const response = await axios.get("/api/suggestion-ai", {
        params: searchData,
      });

      const data = await response.data;

      return { data };
    },
  });

  // if (data) {
  //   console.log("The data is:", data.data.output);
  // }

  return {
    data: data?.data.output,
    isLoading,
    error,
  };
};

export default UseSuggestions;
