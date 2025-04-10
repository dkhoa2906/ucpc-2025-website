import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

// Một component bao bọc react-select để tích hợp với Formik


function TeamForm() {

  return (
    <div className='w-full gap-3 space-y-5'>
      <h1 style={{ fontFamily: 'Inter, sans-serif' }} className="text-gray-800 text-3xl font-bold mx-auto w-fit font-"> Đăng kí đội thi</h1>
      {/* Team Name*/}
      <div className="flex flex-col gap-1.5 mt-6 w-full max-w-md">
        <label htmlFor="teamName" className="text-sm font-medium text-gray-700">
          Tên đội thi
        </label>
        <Field
          id="teamName"
          name="teamName"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
        <ErrorMessage name={'teamName'}>
          {(msg) => <div className="text-red-500 text-sm mt-1">{msg}</div>}
        </ErrorMessage>
      </div>


      {/* Người hướng dẫn: */}
      <div className="flex flex-col gap-1.5 mt-6 w-full max-w-md">
        <label htmlFor="instructor" className="text-sm font-medium text-gray-700">
          Huấn luyện viên (Viết hoa chữ cái đầu mỗi từ)
        </label>
        <Field
          id="instructor"
          name="instructor"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
        <ErrorMessage name={'instructor'}>
          {(msg) => <div className="text-red-500 text-sm mt-1">{msg}</div>}
        </ErrorMessage>
      </div>



      {/* Level, cấp độ, bảng thi */}
      <div className="flex flex-col gap-1.5 mt-6 w-full max-w-md">
        <label htmlFor="level" className="text-sm font-medium text-gray-700">
          Cấp độ / Bảng thi
        </label>
        <Field
          as="select"
          id="level"
          name="level"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        >
          <option value="">-- Chọn cấp độ --</option>
          <option value="highschool">Trung học</option>
          <option value="university">Đại học</option>
        </Field>
        <ErrorMessage name={'level'}>
          {(msg) => <div className="text-red-500 text-sm mt-1">{msg}</div>}
        </ErrorMessage>
      </div>





    </div>
  );
}

export default TeamForm;
