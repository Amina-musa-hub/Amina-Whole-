import React, { useState } from 'react';
export default function Colored() {
          const [color, setColor] = useState('#ffffffff');

    return (
        <>
            <div className='flex flex-col items-center m-4 '>
              <h1 className='text-3xl mb-4 font-bold'>Color Picker</h1>
              <div className='w-[300px] h-[300px] items-center justify-center flex border-5 rounded-lg border-gray-200 transition ease-in-out delay-150 ' style={{backgroundColor: color}}>
                  <p >Selected Color: {color}</p>
              </div>
              <label className='font-bold m-4'>Select a color:</label>
              <input className='w-[90px] h-[35px] rounded-[40px] ' type='color' value={color} onChange={(e) => setColor(e.target.value)}/>
            </div>
        </>
    );
}