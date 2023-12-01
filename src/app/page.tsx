'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    // api: '/api/session',
  });

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden mt-24">
      <div className="p-4 space-y-4">
        {messages.length > 0 ? messages.map(m => (
          <div key={m.id} className={`p-2 ${m.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'} rounded-lg`}>
            <span className={`font-bold ${m.role === 'user' ? 'text-blue-600' : 'text-gray-800'}`}>{m.role}:</span> {m.content}
          </div>
        )) : (
          <div className="p-6"></div>
        )
        }
      </div>

      <form onSubmit={handleSubmit} className="flex border-t border-gray-200">
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
          className="flex-1 p-2 border-none focus:ring-0"
        />
        <button
          type="submit"
          className="px-4 bg-blue-500 text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
}
