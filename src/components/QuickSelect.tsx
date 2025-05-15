import React from 'react';
import { Button } from "@/components/ui/button"

interface QuickSelectProps {
  onSelect: (scenario: string) => void;
}

const QuickSelect: React.FC<QuickSelectProps> = ({ onSelect }) => {
  const scenarios = [
    "I have a headache",
    "My throat is sore",
    "I'm feeling dizzy",
    "I have a fever",
  ];

  return (
    <div className="p-4 bg-gray-100 flex flex-wrap justify-center gap-2">
      {scenarios.map((scenario, index) => (
        <Button
          key={index}
          variant="outline"
          onClick={() => onSelect(scenario)}
          className="text-sm"
        >
          {scenario}
        </Button>
      ))}
    </div>
  );
};

export default QuickSelect;