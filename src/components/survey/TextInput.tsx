import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

interface TextInputProps {
  placeholder?: string;
  validation?: 'email' | 'required';
  onSubmit: (value: string) => void;
}

export function TextInput({ placeholder, validation, onSubmit }: TextInputProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validate = (): boolean => {
    if (validation === 'required' && !value.trim()) {
      setError('This field is required');
      return false;
    }
    if (validation === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError('Please enter a valid email');
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in-up">
      <div className="flex gap-2">
        <div className="flex-1">
          <input
            type={validation === 'email' ? 'email' : 'text'}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError('');
            }}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground
                       placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                       focus:ring-ring focus:border-transparent transition-all"
            autoFocus
          />
          {error && <p className="text-destructive text-sm mt-1.5 ml-1">{error}</p>}
        </div>
        <button
          type="submit"
          className="px-4 py-3 rounded-xl bg-primary text-primary-foreground 
                     hover:bg-primary/90 transition-colors flex items-center justify-center"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
