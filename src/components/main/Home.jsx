import React, { useState } from 'react';

function validateInput(value) {
  const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;
  const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/;

  if (ipv4Regex.test(value)) {
    return { isValid: true, message: 'Введён корректный IP-адрес' };
  } else if (domainRegex.test(value)) {
    return { isValid: true, message: 'Введён корректный домен' };
  } else {
    return { isValid: false, message: 'Неверный формат. Введите IP-адрес или домен' };
  }
}

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [validationResult, setValidationResult] = useState({ isValid: true, message: '' });

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const result = validateInput(value);
    setValidationResult(result);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-center items-center mt-10 w-[80vw] h-[7vh] bg-slate-700 rounded-full md:w-[60vw] md:h-[7.5vh]'>
        <input
          placeholder='IP/домены'
          type="text"
          className={`bg-[#0000000] rounded-full pl-5 pr-5 h-[5vh] w-[75vw] md:w-[58.5vw] focus:outline-none font-medium placeholder:text-gray-600 placeholder:font-semibold ${validationResult.isValid ? '' : 'border border-red-500'
            }`}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      {!validationResult.isValid && (
        <p className='text-red-500 mt-2 font-medium'>{validationResult.message}</p>
      )}
      {validationResult.isValid && inputValue && (
        <p className='text-green-500 mt-2 font-medium'>{validationResult.message}</p>
      )}
    </div>
  );
}

export default Home;
