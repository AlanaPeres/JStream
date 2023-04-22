import { useState } from 'react';

type Title = {
    name: string;
    classAba: string;
    handleClick: () => void;
};

export const Tab = (prop: Title) => {
    return (
        <li key={prop.name} className={prop.classAba} onClick={prop.handleClick}>
            {prop.name}
        </li>
    );
};
