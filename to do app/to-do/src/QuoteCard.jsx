import { useState, useEffect, useRef } from "react";

const quotes = [
  "الإصرار يصنع المعجزات.",
  "لا يوجد فشل، فقط تجارب.",
  "الأحلام لا تعمل إلا إذا عملت أنت.",
  "كل يوم هو فرصة جديدة.",
];

export default function QuoteCard() {
  const [index, setIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const nextBtnRef = useRef();

  useEffect(() => {
    nextBtnRef.current.focus();
  }, []);

  
  useEffect(() => {
    document.title = `اقتباس اليوم: ${quotes[index]}`;
  }, [index]);

  function nextQuote() {
    setIndex((prev) => (prev + 1) % quotes.length);
    setLikes(0);
  }

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md text-center">
      <p className="text-lg mb-4 text-gray-700">{quotes[index]}</p>
      <p className="mb-4 font-bold text-blue-500">الإعجابات: {likes}</p>
      <div className="space-x-2">
        <button
          onClick={() => setLikes((l) => l + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Like 👍
        </button>
        <button
          onClick={nextQuote}
          ref={nextBtnRef}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next ➡️ 
        </button>
      </div>
    </div>
  );
}
