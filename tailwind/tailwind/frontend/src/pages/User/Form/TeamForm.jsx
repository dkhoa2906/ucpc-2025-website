import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

// Một component bao bọc react-select để tích hợp với Formik

function TeamForm() {
  return (
    <div className="w-full gap-3 space-y-5">
      <h1 className="text-3xl font-bold mx-auto w-fit"> Đăng kí đội thi</h1>
      {/* Team Name*/}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="teamName">Tên đội thi:</label>
        <Field
          id="teamName"
          name="teamName"
          className="border-2 border-amber-700 px-3 py-2 rounded-md bg-gray-200"
        />
        <ErrorMessage name="teamName" component="p" className="error" />
      </div>

      {/* Người hướng dẫn: */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="instructor">Người hướng dẫn:</label>
        <Field
          id="instructor"
          name="instructor"
          className="border-2 border-amber-700 px-3 py-2 rounded-md bg-gray-200"
        />
        <ErrorMessage name="instructor" component="p" className="error" />
      </div>

      {/* Level, cấp độ, bảng thi */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="level">Cấp độ/Bảng thi:</label>
        <Field
          as="select"
          id="level"
          name="level"
          className="border-2 border-amber-700 px-3 py-2 rounded-md bg-gray-200"
        >
          <option value="">-- Chọn cấp độ --</option>
          <option value="0">Trung học</option>
          <option value="1">Đại học</option>
        </Field>
        <ErrorMessage name="level" component="p" className="error" />
      </div>
    </div>
  );
}

export default TeamForm;
