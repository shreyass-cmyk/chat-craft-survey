export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 animate-fade-in-up">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
        <span className="text-primary-foreground text-sm font-semibold">D</span>
      </div>
      <div className="chat-bubble-bot flex items-center gap-1 py-4">
        <div className="w-2 h-2 bg-muted-foreground/60 rounded-full typing-dot" />
        <div className="w-2 h-2 bg-muted-foreground/60 rounded-full typing-dot" />
        <div className="w-2 h-2 bg-muted-foreground/60 rounded-full typing-dot" />
      </div>
    </div>
  );
}
