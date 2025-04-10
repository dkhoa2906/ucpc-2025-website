import { Field, useFormikContext, ErrorMessage } from 'formik';
import React, { useEffect, useState } from 'react';
import Universities from './UniversitySelect';



var values_tmp = null;
function MemberInfoForm({ isUniversity }) {
  
  const { values, touched } = useFormikContext();
  const [universityList, setUniversityList] = useState([]);
  values_tmp = values;
  console.log('values -> ', values_tmp);
  useEffect(() => {
    if (isUniversity) {
      fetch('./data/university_names.json')
        .then(res => res.json())
        .then(data => {
          const formatted = (Array.isArray(data) ? data : []).map(name => ({
            label: name,
            value: name,
          }));
          setUniversityList(formatted);
        })

        .catch(err => {
          console.error('Failed to fetch universities:', err);
        });
    }
  }, [isUniversity]);
  return (
    <div className=" w-full">
      <h2 className="text-gray-300 text-3xl font-bold mb-4 text-center">Thông tin các thành viên</h2>
      <div className="flex flex-row flex-wrap gap-20 justify-center w-full">
        {values.members.map((_, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg bg-white shadow-md w-80 flex flex-col gap-2"
          >
            <h2 className="font-semibold text-xl mb-1 text-center">Thành viên {index + 1}</h2>

            {/* Họ và tên */}
            <div className="relative mt-1">
              <Field
                id={`members[${index}].fullName`}
                name={`members[${index}].fullName`}
                placeholder=" "
                className="peer w-full border border-gray-300 rounded px-3 pt-5 pb-2 hover:border-pink-400 focus:ring-2 focus:ring-pink-400 transition"
              />
              {touched.members?.[index]?.fullName && (
              <div className=" mt-1">
                
                  <ErrorMessage name={`members[${index}].fullName`}>
                    {(msg) => <div className="text-red-500 text-sm mt-1 font-style: italic">{msg}</div>}
                  </ErrorMessage>
                
              </div>
            )}

              <label
                htmlFor={`members[${index}].fullName`}
                className="absolute left-3 top-1 text-sm text-gray-500 transition-all 
      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400"
              >
                Họ và tên
              </label>

            </div>

            {/* Email */}
            <div className="relative mt-1">
              <Field
                id={`members[${index}].email`}
                name={`members[${index}].email`}
                type="email"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded px-3 pt-5 pb-2 focus:ring-2 focus:ring-pink-400 transition"
              />
              {touched.members?.[index]?.email && (
              <div className=" mt-1">
                <ErrorMessage name={`members[${index}].email`}>
                  {(msg) => <div className="text-red-500 text-sm mt-1 font-style: italic">{msg}</div>}
                </ErrorMessage>
              </div>
            )}  
              <label
                htmlFor={`members[${index}].email`}
                className="absolute left-3 top-1 text-sm text-gray-500 transition-all 
      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400"
              >
                Email
              </label>
            </div>

            {/* Số điện thoại */}
            <div className="relative mt-1">
              <Field
                id={`members[${index}].phone`}
                name={`members[${index}].phone`}
                type="tel"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded px-3 pt-5 pb-2 focus:ring-2 focus:ring-pink-400 transition"
              />
              {touched.members?.[index]?.phone && (
              <div className=" mt-1">
                <ErrorMessage name={`members[${index}].phone`}>
                  {(msg) => <div className="text-red-500 text-sm mt-1">{msg}</div>}
                </ErrorMessage>
                
              </div>
            )}
              <label
                htmlFor={`members[${index}].phone`}
                className="absolute left-3 top-1 text-sm text-gray-500 transition-all 
      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400"
              >
                Số điện thoại
              </label>
            </div>

            {/* Ngày sinh */}
            <div className="relative mt-1">
              <Field
                id={`members[${index}].birth`}
                name={`members[${index}].birth`}
                type="date"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
              {touched.members?.[index]?.birth && (  
              <div className=" mt-1">
                <ErrorMessage name={`members[${index}].birth`}>
                  {(msg) => <div className="text-red-500 text-sm mt-1 font-style: italic">{msg}</div>}
                </ErrorMessage>
              </div>
            )}
              <label
                htmlFor={`members[${index}].birth`}
                className="absolute left-3 top-1 text-sm text-gray-500 bg-white px-1
      transition-all pointer-events-none
      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400"
              >
                Ngày sinh
              </label>
            </div>

            {/* Trường học */}
            {isUniversity ? (
              <Universities
                name={`members[${index}].university`}
                options={universityList}
              />
            ) : (
              <div className="relative mt-1">
                <Field
                  id={`members[${index}].university`}
                  name={`members[${index}].university`}
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded px-3 pt-5 pb-2 focus:ring-2 focus:ring-pink-400 transition"
                />
                {touched.members?.[index]?.university && (
                <div className=" mt-1">
                  
                  <ErrorMessage name={`members[${index}].university`}>
                    {(msg) => <div className="text-red-500 text-sm mt-1 font-style: italic">{msg}</div>}
                  </ErrorMessage>
                </div>
              )}
                <label
                  htmlFor={`members[${index}].university`}
                  className="absolute left-3 top-1 text-sm text-gray-500 transition-all 
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
        peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400"
                >
                  Trường
                </label>
              </div>
            )}

            {/* MSSV/CCCD */}

            <div className="relative mt-1">
              <Field
                id={`members[${index}].studentId`}
                name={`members[${index}].studentId`}
                placeholder=" "
                className="peer w-full border border-gray-300  rounded px-3 pt-5 pb-2 focus:ring-2 focus:ring-pink-400 transition"
              />
              {touched.members?.[index]?.studentId && (
              <div className=" mt-1">
                
                <ErrorMessage name={`members[${index}].studentId`}>
                  {(msg) => <div className="text-red-500 text-sm mt-1 font-style: italic">{msg}</div>}
                </ErrorMessage>
              </div>
            )}
              <label
                htmlFor={`members[${index}].studentId`}
                className="absolute left-3 top-1 text-sm text-gray-500 transition-all 
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
        peer-focus:top-1 peer-focus:text-sm peer-focus:text-pink-400"
              >
                MSSV/CCCD
              </label>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
}

console.log('values_tmp 2-> ', values_tmp);

export default MemberInfoForm;
