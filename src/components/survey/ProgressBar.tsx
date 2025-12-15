interface ProgressBarProps {
  progress: number;
  currentSection: number;
}

const sectionLabels: Record<number, string> = {
  1: 'Basic Info',
  2: 'Awareness',
  3: 'Tech Stack',
  4: 'Industry',
  5: 'Tools',
  6: 'Automation',
  7: 'Feedback',
};

export function ProgressBar({ progress, currentSection }: ProgressBarProps) {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground font-medium">
          {sectionLabels[currentSection] || 'Survey'}
        </span>
        <span className="text-muted-foreground">{progress}% complete</span>
      </div>
      <div className="w-full h-1.5 bg-progress-track rounded-full overflow-hidden">
        <div
          className="h-full bg-progress-fill rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
