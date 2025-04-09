import { Field, useFormikContext, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import Universities from "./UniversitySelect";


function MemberInfoForm({ isUniversity }) {
  const { values } = useFormikContext();

  const [universityList, setUniversityList] = useState([]);

  useEffect(() => {
    if (isUniversity) {
      fetch("./data/university_names.json")
        .then((res) => res.json())
        .then((data) => {
          const formatted = (Array.isArray(data) ? data : []).map((name) => ({
            label: name,
            value: name,
          }));
          setUniversityList(formatted);
        })

        .catch((err) => {
          console.error("Failed to fetch universities:", err);
        });
    }
  }, [isUniversity]);
  return (
    <div className=" w-full">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Thông tin các thành viên
      </h2>
      <div className="flex flex-row flex-wrap gap-20 justify-center w-full">
        {values.members.map((_, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg bg-white shadow-md w-80 flex flex-col gap-2"
          >
            <h3 className="font-semibold text-lg mb-1 text-center">
              Thành viên {index + 1}
            </h3>

            <Field
              name={`members[${index}].fullName`}
              placeholder="Họ và tên"
              className="border rounded px-3 py-2 w-full"
            />
            <ErrorMessage
              name={`members[${index}].fullName`}
              component="p"
              className="error"
            />

            <Field
              name={`members[${index}].email`}
              placeholder="Email"
              className="border rounded px-3 py-2 w-full"
              type="email"
            />
            <ErrorMessage
              name={`members[${index}].email`}
              component="p"
              className="error"
            />

            <Field
              name={`members[${index}].phone`}
              placeholder="Số điện thoại"
              className="border rounded px-3 py-2 w-full"
              type="tel"
            />
            <ErrorMessage
              name={`members[${index}].phone`}
              component="p"
              className="error"
            />
            <Field
              name={`members[${index}].birth`}
              placeholder="Địa chỉ"
              className="border rounded px-3 py-2 w-full"
            />
            <ErrorMessage
              name={`members[${index}].birth`}
              component="p"
              className="error"
            />

            {isUniversity ? (
              <>
                <Universities
                  name={`members[${index}].university`}
                  options={universityList}
                />
                <ErrorMessage
                  name={`members[${index}].university`}
                  component="p"
                  className="error"
                />
              </>
            ) : (
              <>
                <Field
                  name={`members[${index}].university`}
                  placeholder="Trường THPT ABCXYZ"
                  className="border rounded px-3 py-2 w-full"
                />
                <ErrorMessage
                  name={`members[${index}].university`}
                  component="p"
                  className="error"
                />
              </>
            )}

            {isUniversity && (
              <>
                <Field
                  name={`members[${index}].studentId`}
                  placeholder="MSSV/CCCD"
                  className="border rounded px-3 py-2 w-full"
                />
                <ErrorMessage
                  name={`members[${index}].studentId`}
                  component="p"
                  className="error"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberInfoForm;
