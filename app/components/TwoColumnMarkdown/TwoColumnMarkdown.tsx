import ReactMarkdown from 'react-markdown';
// import { ColumnContent } from './ColumnContent';

// export function TwoColumnMarkdown({ text }: { text: string }) {
//   // Split all words while preserving paragraph breaks
//   const words = text.split(/(\n\n)/).map(part => 
//     part === '\n\n' ? part : part.split(/\s+/)
//   ).flat();
  
//   const midPoint = Math.floor(words.filter(w => w !== '\n\n').length / 2);
  
//   let leftWords = [];
//   let rightWords = [];
//   let wordCount = 0;
  
//   // Distribute words and paragraph breaks
//   for (const word of words) {
//     if (word === '\n\n') {
//       if (wordCount < midPoint) {
//         leftWords.push(word);
//       } else {
//         rightWords.push(word);
//       }
//     } else {
//       if (wordCount < midPoint) {
//         leftWords.push(word);
//         wordCount++;
//       } else {
//         rightWords.push(word);
//         wordCount++;
//       }
//     }
//   }

//   const columns = [
//     leftWords.join(' ').replace(/ \n\n /g, '\n\n'),
//     rightWords.join(' ').replace(/ \n\n /g, '\n\n')
//   ];

//   return (
//     <div className="w-full flex gap-4">
//       <ColumnContent content={columns[0]} />
//       <ColumnContent content={columns[1]} />
//     </div>
//   );
// }

export function TwoColumnMarkdown({ text }: { text: string }) {
    return (
      <div className="lg:columns-2 gap-6 leading-normal">
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="mb-6 last:mb-0">{children}</p>
            ),
            strong: ({ children }) => (
              <span className="font-semibold">{children}</span>
            ),
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    );
  }