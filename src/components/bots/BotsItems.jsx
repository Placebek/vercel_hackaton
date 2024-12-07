import React, { useState } from 'react';

function BotsItems({ props }) {
    const isActive = props.is_active ? 'green' : 'red';
    const [date, time] = props.created_at.split('T')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    return (
        <div className='mt-2'>
            <div className="border-2 border-slate-400 w-[60vw] md:w-[40vw] mt-[7vh] h-[5vh] rounded-md relative" onClick={toggleDropdown}>
                <div className="flex items-center">
                    <div className="h-[4.4vh] w-[6vw] ml-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill={isActive} className="bi bi-circle-fill" viewBox="0 0 16 16" >
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div className="ml-2 text-[2vh] font-medium text-slate-700/90">
                        {props.name}
                    </div>
                    <div className="flex absolute right-1 bottom-1 text-[1.5vh] font-medium text-slate-700/90">
                        {date}
                    </div>
                    {isDropdownOpen && (
                        <div className="mt-2 border border-gray-300 rounded-md bg-white shadow-lg p-2">
                            <button
                                // onClick={deactivateBot}
                                className="w-full text-left px-2 py-1 hover:bg-gray-100"
                                disabled={!isActive}
                            >
                                {isActive ? 'Деактивировать' : 'Уже деактивирован'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BotsItems;
