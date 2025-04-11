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
          className="hover:border-[#895593] duration-300 border-2 w-full  border-gray-300 rounded px-2 py-2 bg-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />

        <div className="h-4 mt-0">
          <ErrorMessage name={'teamName'}>
            {(msg) => <div className="text-red-800 text-sm mt-1 font-style: italic">{msg}</div>}
          </ErrorMessage>
        </div>


      </div>

      <div className="flex flex-row gap-1.5 mt-0 w-full max-w-md py-0">
        {/* Người hướng dẫn: */}
        <div className="flex flex-col gap-1.5 mt-0 w-full max-w-md flex-[7]">
          <label htmlFor="instructorName" className="text-lg font-bold text-gray-700">
            Người đại diện 
          </label>
          <Field
            id="instructorName"
            name="instructorName"
            placeholder="Ví dụ: Nguyễn Văn A"
            className="hover:border-[#895593] duration-300 border-2 w-full border-gray-300 rounded px-2 py-2 bg-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
          />
          <div className=" mt-0">
            <ErrorMessage name={'instructorName'}>
              {(msg) => <div className="text-red-800 text-sm mt-1 font-style: italic">{msg}</div>}
            </ErrorMessage>
          </div>

        </div>



        {/* Level, cấp độ, bảng thi */}
        <div className="flex flex-col gap-1.5 mt-0 w-full max-w-md flex-[3]">
          <label htmlFor="level" className="text-lg font-bold text-gray-700">
             Bảng thi
          </label>
          <Field
            as="select"
            id="level"
            name="level"
            className="hover:border-[#895593] duration-300 border-2 w-full border-gray-300 rounded px-2 py-2 bg-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
          >
            <option value=""> Cấp độ</option>
            <option value="highschool">Trung học</option>
            <option value="university">Đại học</option>
          </Field>
          <div className="h-4 mt-0">
            <ErrorMessage name={'level'}>
              {(msg) => <div className="text-red-800 text-sm mt-1 font-style: italic">{msg}</div>}
            </ErrorMessage>
          </div>
        </div>
      </div>


      {/* Thông tin người đại diện */}
<div className="flex flex-row gap-1.5 mt-0 w-full max-w-md py-0">
      <div className="flex flex-col  gap-1.5 mt-0 w-full max-w-md">
        <label htmlFor="instructorEmail" className="text-lg font-bold text-gray-700">
          Email
        </label>
        <Field
          id="instructorEmail"
          name="instructorEmail"
          placeholder="Vd: ABC@gmail.com"
          className="hover:border-[#895593] duration-300 border-2 w-full border-gray-300 rounded px-2 py-2 bg-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
        <div className="h-4 mt-0">
          <ErrorMessage name={'instructorEmail'}>
            {(msg) => <div className="text-red-800 text-sm mt-1 font-style: italic">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 mt-0 w-full max-w-md">

        <label htmlFor="instructorPhone" className="text-lg font-bold text-gray-700">
          SĐT
        </label>
        <Field
          id="instructorPhone"
          name="instructorPhone"
          placeholder="Vd: 0123456789"
          className="hover:border-[#895593] duration-300 border-2 w-full border-gray-300 rounded px-2 py-2 bg-white focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
        <div className="h-4 mt-0">
          <ErrorMessage name={'instructorPhone'}>
            {(msg) => <div className="text-red-800 text-sm mt-1 font-style: italic">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
      </div>





    </div>
  );
}

export default TeamForm;
