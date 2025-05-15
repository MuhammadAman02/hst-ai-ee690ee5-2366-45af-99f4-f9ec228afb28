const medicalResponses: { [key: string]: string } = {
  headache: "For a headache, try resting in a quiet, dark room and staying hydrated. Over-the-counter pain relievers may help. If the headache is severe or persistent, consult a doctor.",
  "sore throat": "For a sore throat, gargle with warm salt water, drink warm liquids, and use throat lozenges. If symptoms persist for more than a week or are accompanied by a fever, see a doctor.",
  dizzy: "If you're feeling dizzy, sit or lie down immediately. Avoid sudden movements and stay hydrated. If dizziness persists or is accompanied by other symptoms, seek medical attention.",
  fever: "For a fever, rest and drink plenty of fluids. Over-the-counter fever reducers can help. If the fever is high (above 103°F or 39.4°C) or lasts more than three days, consult a healthcare provider.",
  default: "I'm sorry, I don't have specific information about that condition. It's best to consult with a healthcare professional for personalized medical advice.",
};

export const getMedicalResponse = (input: string): string => {
  const lowercaseInput = input.toLowerCase();
  for (const [keyword, response] of Object.entries(medicalResponses)) {
    if (lowercaseInput.includes(keyword)) {
      return response;
    }
  }
  return medicalResponses.default;
};