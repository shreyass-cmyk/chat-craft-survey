import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { QuestionOption } from '@/data/surveyQuestions';

interface MultiSelectProps {
  options: QuestionOption[];
  maxSelections?: number;
  onSubmit: (values: string[], labels: string[]) => void;
}

export function MultiSelect({ options, maxSelections, onSubmit }: MultiSelectProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      }
      if (maxSelections && prev.length >= maxSelections) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const handleSubmit = () => {
    if (selected.length === 0) return;
    const labels = selected.map((id) => options.find((o) => o.id === id)?.label || id);
    onSubmit(selected, labels);
  };

  return (
    <div className="space-y-4 animate-fade-in-up">
      {maxSelections && (
        <p className="text-sm text-muted-foreground">
          Select up to {maxSelections} options
        </p>
      )}
      <div className="grid gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option.id);
          const isDisabled =
            maxSelections && selected.length >= maxSelections && !isSelected;

          return (
            <button
              key={option.id}
              onClick={() => !isDisabled && toggleOption(option.id)}
              disabled={isDisabled}
              className={`multi-choice-item ${isSelected ? 'multi-choice-item-selected' : ''} 
                         ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center 
                           transition-colors ${
                             isSelected
                               ? 'bg-primary border-primary'
                               : 'border-border'
                           }`}
              >
                {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
              </div>
              <span className="text-[15px]">{option.label}</span>
            </button>
          );
        })}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selected.length === 0}
        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground
                   font-medium transition-all hover:bg-primary/90 disabled:opacity-50 
                   disabled:cursor-not-allowed"
      >
        Continue
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
