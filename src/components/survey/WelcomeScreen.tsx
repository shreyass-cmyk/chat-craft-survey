import { ArrowRight, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in-up">
      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
        <Sparkles className="w-8 h-8 text-primary-foreground" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        DBSync Cloud Workflow Survey
      </h1>
      <p className="text-lg text-muted-foreground max-w-md mb-8">
        Help us understand your needs better. This personalized survey takes about 3-5 minutes.
      </p>
      <button
        onClick={onStart}
        className="flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground
                   font-semibold text-lg transition-all hover:bg-primary/90 hover:gap-3
                   shadow-lg hover:shadow-xl"
      >
        Start Survey
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
