import { QuestionOption } from '@/data/surveyQuestions';

interface SingleChoiceProps {
  options: QuestionOption[];
  onSelect: (value: string, label: string) => void;
}

export function SingleChoice({ options, onSelect }: SingleChoiceProps) {
  return (
    <div className="flex flex-wrap gap-3 animate-fade-in-up">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id, option.label)}
          className="choice-pill"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
