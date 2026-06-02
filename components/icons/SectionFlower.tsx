import * as React from 'react';

interface Props {
    className?: string;
    width?: number;
}

const SectionFlower = ({ className, width = 25 }: Props) => {
    return (
        <svg
            width={width}
            height={width}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 2L13.09 8.26L19 7L15.45 11.73L19 16.27L13.09 14.74L12 21L10.91 14.74L5 16.27L8.55 11.73L5 7L10.91 8.26L12 2Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default SectionFlower;
