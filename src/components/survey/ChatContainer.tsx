import { useEffect, useRef } from 'react';
import { useSurvey } from '@/hooks/useSurvey';
import { BotMessage } from './BotMessage';
import { UserMessage } from './UserMessage';
import { TypingIndicator } from './TypingIndicator';
import { QuestionInput } from './QuestionInput';
import { ProgressBar } from './ProgressBar';
import { WelcomeScreen } from './WelcomeScreen';
import { CompletionScreen } from './CompletionScreen';

export function ChatContainer() {
  const {
    started,
    messages,
    currentQuestion,
    progress,
    currentSection,
    isTyping,
    isComplete,
    startSurvey,
    submitAnswer,
  } = useSurvey();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-screen bg-chat">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-md border-b border-border px-4 py-3">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">DB</span>
            </div>
            <span className="font-semibold text-foreground">DBSync Survey</span>
          </div>
          {started && !isComplete && (
            <ProgressBar progress={progress} currentSection={currentSection} />
          )}
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {!started ? (
            <WelcomeScreen onStart={startSurvey} />
          ) : (
            <>
              {messages.map((msg) =>
                msg.type === 'bot' ? (
                  <BotMessage key={msg.id} content={msg.content} />
                ) : (
                  <UserMessage key={msg.id} content={msg.content} />
                )
              )}

              {isTyping && <TypingIndicator />}

              {isComplete && <CompletionScreen />}

              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </main>

      {/* Input Area */}
      {started && currentQuestion && !isTyping && !isComplete && (
        <footer className="sticky bottom-0 bg-card/80 backdrop-blur-md border-t border-border px-4 py-4">
          <div className="max-w-2xl mx-auto">
            {currentQuestion.subtext && (
              <p className="text-sm text-muted-foreground mb-3">
                {currentQuestion.subtext}
              </p>
            )}
            <QuestionInput question={currentQuestion} onSubmit={submitAnswer} />
          </div>
        </footer>
      )}
    </div>
  );
}
