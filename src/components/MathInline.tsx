// Notice the import is from 'react-katex', not 'katex'
import { InlineMath } from 'react-katex'; 
import 'katex/dist/katex.min.css'; // Don't forget the CSS!

export const QuestionText = ({ text }: { text: string }) => {
  const parts = text.split('$');

  return (
    <h3 className='text-md font-semibold'>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          // This component knows how to talk to KaTeX for you
          return <InlineMath key={index} math={part} />;
        }
        return <span key={index}>{part}</span>;
      })}
    </h3>
  );
};