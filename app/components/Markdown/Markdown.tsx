import ReactMarkdown from 'react-markdown';

export default function Markdown ({ children }: { children: string }) {
    return (
        <ReactMarkdown
        components={{
            p: ({ children }) => <p className="mb-6 last:mb-0 leading-normal">{children}</p>,
            strong: ({ children }) => (
                <span className="font-medium">{children}</span>
            ),
            em: ({ children }) => (
                <span className="font-medium opacity-60">{children}</span>
            ),
            a: ({ children }) => <a className='font-medium transition-all hover:underline'>{children}</a>,
            ul: ({ children }) => (
                <ul className="font-light pl-4 mb-6 last:mb-0 [&>li]:before:content-['-'] [&>li]:before:mr-2 [&>li]:flex">{children}</ul>

            ),            
        }}
        >
            {children}
        </ReactMarkdown>
    )
}