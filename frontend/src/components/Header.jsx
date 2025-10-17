import React from 'react';
import { NAV_ITEMS } from '../config/navigation.js';

const Header = ({ selected, onSelect }) => {
    const items = NAV_ITEMS;

    return (
        <header className="w-full flex items-center">
            <h2 className="pl-8 text-2xl">FINTRIX</h2>
            <nav className="ml-auto pr-8 flex gap-4 justify-end">
                {items.map(({ key, label }) => (
                    <button
                        key={key}
                        type="button"
                        onClick={() => onSelect?.(key)}
                        className={[
                            'bg-transparent p-0 m-0 border-none appearance-none',
                            'text-sm cursor-pointer transition-colors',
                            selected === key ? 'text-white' : 'text-gray-400 hover:text-white',
                            'focus:outline-none focus:underline'
                        ].join(' ')}
                        aria-pressed={selected === key}
                    >
                        {label}
                    </button>
                ))}
            </nav>
        </header>
    );
};

export default Header;