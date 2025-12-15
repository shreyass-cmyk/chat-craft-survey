interface BotMessageProps {
  content: string;
}

export function BotMessage({ content }: BotMessageProps) {
  return (
    <div className="flex items-start gap-3 animate-fade-in-up">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
        <span className="text-primary-foreground text-sm font-semibold">D</span>
      </div>
      <div className="chat-bubble-bot max-w-md">
        <p className="text-[15px] leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
