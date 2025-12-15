import { Question } from '@/data/surveyQuestions';
import { TextInput } from './TextInput';
import { SingleChoice } from './SingleChoice';
import { MultiSelect } from './MultiSelect';
import { IndustrySelect } from './IndustrySelect';

interface QuestionInputProps {
  question: Question;
  onSubmit: (value: string | string[], displayValue?: string) => void;
}

export function QuestionInput({ question, onSubmit }: QuestionInputProps) {
  switch (question.type) {
    case 'text':
      return (
        <TextInput
          placeholder={question.placeholder}
          validation={question.validation}
          onSubmit={(value) => onSubmit(value)}
        />
      );

    case 'single':
      return (
        <SingleChoice
          options={question.options || []}
          onSelect={(value, label) => onSubmit(value, label)}
        />
      );

    case 'multi':
      return (
        <MultiSelect
          options={question.options || []}
          maxSelections={question.maxSelections}
          onSubmit={(values, labels) => onSubmit(values, labels.join(', '))}
        />
      );

    case 'industry':
      return <IndustrySelect onSelect={(value, label) => onSubmit(value, label)} />;

    default:
      return null;
  }
}
