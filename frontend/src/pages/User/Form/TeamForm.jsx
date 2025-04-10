import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

// Một component bao bọc react-select để tích hợp với Formik


function TeamForm() {

  return (
    <div className='w-full gap-1.5 space-y-3'>
      <h1 style={{ fontFamily: 'Inter, sans-serif' }} className="text-gray-800 text-3xl font-bold mx-auto w-fit font-"> Đăng kí đội thi</h1>
      {/* Team Name*/}
      <div className="flex flex-col gap-1.5 mt-0 w-full max-w-md py-0">
        <label htmlFor="teamName" className="text-lg font-bold text-gray-700">
          Tên đội thi
        </label>

        <Field
          id="teamName"
          name="teamName"
          placeholder="Ví dụ: Chicken_Winner"
          className="hover:border-[#895593] duration-300 border-2 w-full  border-gray-300 rounded px-5 py-2 bg-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
        
        <div className="h-8 mt-0">
          <ErrorMessage name={'teamName'}>
            {(msg) => <div className="text-red-800 text-sm mt-1 font-style: italic">{msg}</div>}
          </ErrorMessage>
        </div>


      </div>


      {/* Người hướng dẫn: */}
      <div className="flex flex-col gap-1.5 mt-0 w-full max-w-md">
        <label htmlFor="instructor" className="text-lg font-bold text-gray-700">
          Huấn luyện viên  
        </label>
        <Field
          id="instructor"
          name="instructor"
          placeholder="Ví dụ: Nguyễn Văn A"
          className="hover:border-[#895593] duration-300 border-2 w-full border-gray-300 rounded px-5 py-2 bg-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
        <div className="h-8 mt-0">
          <ErrorMessage name={'instructor'}>
            {(msg) => <div className="text-red-800 text-sm mt-1 font-style: italic">{msg}</div>}
          </ErrorMessage>
        </div>

      </div>



      {/* Level, cấp độ, bảng thi */}
      <div className="flex flex-col gap-1.5 mt-0 w-full max-w-md">    
        <label htmlFor="level" className="text-lg font-bold text-gray-700">
          Cấp độ / Bảng thi
        </label>
        <Field
          as="select"
          id="level"
          name="level"
          className="hover:border-[#895593] duration-300 border-2 w-full border-gray-300 rounded px-5 py-2 bg-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        >
          <option value="">-- Chọn cấp độ --</option>
          <option value="highschool">Trung học</option>
          <option value="university">Đại học</option>
        </Field>
        <div className="h-8 mt-0">
          <ErrorMessage name={'level'}>
            {(msg) => <div className="text-red-800 text-sm mt-1 font-style: italic">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>





    </div>
  );
}

export default TeamForm;
