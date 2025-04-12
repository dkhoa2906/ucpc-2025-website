import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

// Một component bao bọc react-select để tích hợp với Formik
// color: 'text-[#492A51]', bg-[#492A51]

function TeamForm() {

  return (
    <div className='w-full gap-1.5 space-y-3'>
      <h1  className="text-[#492A51] text-3xl font-bold mx-auto w-fit font-"> Đăng kí đội thi</h1>
      {/* Team Name*/}
      <div className="flex flex-col gap-1.5 mt-0 w-full max-w-md py-0">
        <label htmlFor="teamName" className="text-lg font-bold text-[#492A51]">
          Tên đội thi
        </label>

        <Field
          id="teamName"
          name="teamName"
          placeholder="VD: Chicken_Winner"
          className="hover:border-[#AD2971] text-lg duration-200 border-2 w-full  border-gray-300 rounded px-2 py-2 bg-white focus:ring-2 focus:ring-[#8A65AC] focus:outline-none transition"
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
          <label htmlFor="instructorName" className="text-lg font-bold text-[#492A51]">
            Người đại diện 
          </label>
          <Field
            id="instructorName"
            name="instructorName"
            placeholder="VD: Nguyễn Văn A"
            className="hover:border-[#AD2971] text-lg duration-200 border-2 w-full border-gray-300 rounded px-2 py-2 bg-white focus:ring-2 focus:ring-[#8A65AC] focus:outline-none transition"
          />
          <div className=" mt-0">
            <ErrorMessage name={'instructorName'}>
              {(msg) => <div className="text-red-800 text-sm mt-1 font-style: italic">{msg}</div>}
            </ErrorMessage>
          </div>

        </div>



        {/* Level, cấp độ, bảng thi */}
        <div className="flex flex-col gap-1.5 mt-0 w-full max-w-md flex-[3]">
          <label htmlFor="level" className="text-lg font-bold text-[#492A51]">
             Bảng thi
          </label>
          <Field
            as="select"
            id="level"
            name="level"
            className="hover:border-[#AD2971] text-lg  duration-200 border-2 w-full border-gray-300 rounded px-1 py-2 bg-white focus:ring-2 focus:ring-[#8A65AC] focus:outline-none transition"
          >
            <option value="">--------</option>
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
      <div className="flex flex-col  gap-1.5 mt-0 w-full max-w-md flex-[6]">
        <label htmlFor="instructorEmail" className="text-lg font-bold text-[#492A51]">
          Email
        </label>
        <Field
          id="instructorEmail"
          name="instructorEmail"
          placeholder="VD: abc@gmail.com"
          className="hover:border-[#AD2971] text-lg  duration-200 border-2 w-full border-gray-300 rounded px-2 py-2 bg-white focus:ring-2 focus:ring-[#8A65AC] focus:outline-none transition"
        />
        <div className="h-4 mt-0">
          <ErrorMessage name={'instructorEmail'}>
            {(msg) => <div className="text-red-800 text-sm mt-1 font-style: italic">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 mt-0 w-full max-w-md flex-[3]">

        <label htmlFor="instructorPhone" className="text-lg font-bold text-[#492A51]">
          SĐT
        </label>
        <Field
          id="instructorPhone"
          name="instructorPhone"
          placeholder="VD: 0123456789"
          className="hover:border-[#AD2971] text-lg duration-200 border-2 w-full border-gray-300 rounded px-2 py-2 bg-white focus:ring-2 focus:ring-[#8A65AC] focus:outline-none transition"
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
