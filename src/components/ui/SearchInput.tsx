import { useState, useRef, KeyboardEvent } from 'react'

function SearchInput() {
    const [content, setContent] = useState('');
    const inputRef = useRef<HTMLDivElement>(null);

    const handleInput = () => {
        if (inputRef.current) {
            setContent(inputRef.current.innerText);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            // Handle search submission here
            console.log('Search:', content);
        }
    };

    return (
        <div className="w-full">
            <div 
                ref={inputRef}
                contentEditable
                onInput={handleInput}
                onKeyDown={handleKeyDown}
                className="w-full p-2 rounded-md mt-5
                           bg-transparent
                           border border-gray-300 dark:border-gray-700 
                           text-black dark:text-white
                           text-left
                           focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
                           overflow-auto max-h-32
                           empty:before:content-[attr(data-placeholder)] 
                           empty:before:text-gray-400 
                           empty:before:pointer-events-none"
                role="textbox"
                aria-multiline="true"
                data-placeholder="Ask IntelliDocs"
            />

            <button
                type="button"
                className="w-full mt-3 rounded-md 
                           bg-black dark:bg-white
                           text-white dark:text-black
                           border border-gray-300 dark:border-gray-700
                           px-3 py-2 text-sm font-semibold 
                           shadow-sm 
                           hover:bg-gray-800 dark:hover:bg-gray-200 
                           focus-visible:outline focus-visible:outline-2 
                           focus-visible:outline-offset-2 
                           focus-visible:outline-gray-600 dark:focus-visible:outline-gray-400"
            >
                Search
            </button>
        </div>
    )
}

export default SearchInput;


