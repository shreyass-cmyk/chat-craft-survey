import { CheckCircle2, RotateCcw } from 'lucide-react';

interface CompletionScreenProps {
  onRestart?: () => void;
}

export function CompletionScreen({ onRestart }: CompletionScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <CheckCircle2 className="w-10 h-10 text-primary" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
      <p className="text-muted-foreground max-w-sm mb-8">
        Your feedback helps us improve DBSync Cloud Workflow for teams like yours.
      </p>
      {onRestart && (
        <button
          onClick={onRestart}
          className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border
                     text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Take Survey Again
        </button>
      )}
    </div>
  );
}
