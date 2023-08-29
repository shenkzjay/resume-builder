import React, { useState } from "react";

export const useNavigation = () => {
  const [step, setStep] = useState(0);

  return {
    step,
    setStep,
  };
};
