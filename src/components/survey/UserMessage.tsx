interface UserMessageProps {
  content: string;
}

export function UserMessage({ content }: UserMessageProps) {
  return (
    <div className="flex items-start justify-end animate-fade-in-up">
      <div className="chat-bubble-user max-w-md">
        <p className="text-[15px] leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
