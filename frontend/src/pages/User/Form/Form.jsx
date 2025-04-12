import { useState } from "react";
import TeamForm from "./TeamForm";
import MemberInfoForm from "./MemberInfoForm";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  teamName: Yup.string().required("Tên đội là bắt buộc."), //không có regex vì không cần thiết
  instructorName: Yup.string()
    .required("Họ và tên người hướng dẫn là bắt buộc.") // Không được để trống
    .matches(
      /^([A-ZÀ-Ỹ][a-zà-ỹ]*)(\s[A-ZÀ-Ỹ][a-zà-ỹ]*)*$/,
      "Ghi họ tên theo định dạng, Ví dụ: Nguyễn Văn A"
    ),
  level: Yup.string()
    .oneOf(["highschool", "university"], "Cấp độ không hợp lệ.") // Chỉ cho phép chọn "Trung học" hoặc "Đại học"
    .required("Phần bắt buộc."),
  instructorEmail: Yup.string()
    .required("Email là bắt buộc.")
    .email("Email không hợp lệ"),
  instructorPhone: Yup.string()
    .matches(/^\d{10}$/, "Số điện thoại cần có 10 số")
    .required("SĐT là bắt buộc."),
}); // Định nghĩa schema cho bước 1

const validationSchema2 = Yup.object({
  members: Yup.array()
    .of(
      Yup.object().shape({
        fullName: Yup.string()
          .required("Họ và tên là bắt buộc.")
          .matches(
            /^([A-ZÀ-Ỹ][a-zà-ỹ]*)(\s[A-ZÀ-Ỹ][a-zà-ỹ]*)*$/,
            "Ghi họ tên theo định dạng, Ví dụ: Nguyễn Văn A"
          ),

        email: Yup.string()
          .required("Email là bắt buộc.")
          .email("Email không hợp lệ"),

        phone: Yup.string()
          .matches(/^\d{10}$/, "Số điện thoại cần có 10 số")
          .required("Số điện thoại là bắt buộc."),

        // birth: Yup.date()
        // .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Ngày sinh không hợp lệ. Định dạng: dd/mm/yyyy")
        // .required("Ngày sinh là bắt buộc."),
        // .test("ageMax", "Tuổi phải nhỏ hơn hoặc bằng 24.", (value) => {
        //   if (!value) return false;

        //   const [day, month, year] = value.split("/");
        //   const birthDate = new Date(`${year}-${month}-${day}`);
        //   const today = new Date();

        //   let age = today.getFullYear() - birthDate.getFullYear();
        //   const monthDiff = today.getMonth() - birthDate.getMonth();

        //   // Nếu chưa tới sinh nhật trong năm nay thì giảm 1 tuổi
        //   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        //     age--;
        //   }

        //   return age <= 24;
        // }),

        birth: Yup.date()
          .required("Ngày sinh là bắt buộc.")
          .test("ageValid", "Ngày tháng năm sinh không hợp lệ.", (value) => {
            if (!value) return false;

            const today = new Date();

            // Không cho ngày sinh trong tương lai
            if (value > today) return false;

            let age = today.getFullYear() - value.getFullYear();
            const monthDiff = today.getMonth() - value.getMonth();

            if (
              monthDiff < 0 ||
              (monthDiff === 0 && today.getDate() < value.getDate())
            ) {
              age--;
            }

            return age >= 1 && age <= 24;
          }),

        university: Yup.string()
          .matches(
            /^Trường (THPT|THCS|PT|Phổ) [A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯàáâãèéêìíòóôõùúăđĩũơưẠ-ỹ\s-]+$/,
            "Tên trường không hợp lệ. Viết đúng format ví dụ: Trường THPT/THCS <tên trường>"
          )
          .required("Trường học là bắt buộc."),
        studentId: Yup.string().required("Mã số sinh viên là bắt buộc."),
      })
    )
    .min(3, "Phải có ít nhất 3 thành viên")
    .max(3, "Phải có đúng 3 thành viên"),
});
// Validation schema cho trường hợp không là đại học
const validationSchema3 = Yup.object({
  members: Yup.array()
    .of(
      Yup.object().shape({
        fullName: Yup.string()
          .required("Họ và tên là bắt buộc.")
          .matches(
            /^([A-ZÀ-Ỹ][a-zà-ỹ]*)(\s[A-ZÀ-Ỹ][a-zà-ỹ]*)*$/,
            "Ghi họ tên theo định dạng, Ví dụ: Nguyễn Văn A"
          ),
        email: Yup.string()
          .required("Email là bắt buộc.")
          .email("Email không hợp lệ"),
        phone: Yup.string()
          .matches(/^\d{10}$/, "Số điện thoại cần có 10 số")
          .required("Số điện thoại là bắt buộc."),
        //   birth: Yup.date()
        //   .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Ngày sinh không hợp lệ. Định dạng: dd/mm/yyyy")
        //   .required("Ngày sinh là bắt buộc."),
        //   .test("ageMax", "Tuổi phải nhỏ hơn hoặc bằng 24.", (value) => {
        //     if (!value) return false;

        //     const [day, month, year] = value.split("/");
        //     const birthDate = new Date(`${year}-${month}-${day}`);
        //     const today = new Date();

        //     let age = today.getFullYear() - birthDate.getFullYear();
        //     const monthDiff = today.getMonth() - birthDate.getMonth();

        //     // Nếu chưa tới sinh nhật trong năm nay thì giảm 1 tuổi
        //     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        //       age--;
        //     }

        //     return age <= 24;
        //   }),

        birth: Yup.string()
          .required("Ngày sinh là bắt buộc.")
          .test("ageValid", "Ngày tháng năm sinh không hợp lệ.", (value) => {
            if (!value) return false;

            const birthDate = new Date(value); // ISO string => Date
            const today = new Date();

            if (birthDate > today) return false;

            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();

            if (
              monthDiff < 0 ||
              (monthDiff === 0 && today.getDate() < birthDate.getDate())
            ) {
              age--;
            }
            console.log("age:", age);
            return age >= 1 && age <= 24;
          }),

        university: Yup.string().required("Tên học là bắt buộc."),

        studentId: Yup.string().required("Mã số sinh viên là bắt buộc."),
      })
    )
    .min(3, "Phải có ít nhất 3 thành viên")
    .max(3, "Phải có đúng 3 thành viên"),
});
// Validation schema cho trường hợp không là đại học

var values_tmp = null;
function  UserForm() {
  const waitTwoSeconds = async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  };
  const [step, setStep] = useState(1);

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/update-info", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), // có thể là values từ bước 2
      });

      if (!response.ok) throw new Error("Lỗi khi gửi dữ liệu");

      const result = await response.json();
      console.log("Gửi thành công:", result);
    } catch (error) {
      console.error("Lỗi khi gửi:", error.message);
    }
    await new Promise((resolve) => setTimeout(resolve, 0));
    console.log("Submitted:", values);
  };

  return (
    <Formik
      initialValues={{
        teamName: "",
        instructorName: "",
        instructorEmail: "",
        instructorPhone: "",
        level: "",
        members: [
          {
            fullName: "",
            email: "",
            phone: "",
            birth: "",
            university: "",
            studentId: "",
          },
          {
            fullName: "",
            email: "",
            phone: "",
            birth: "",
            university: "",
            studentId: "",
          },
          {
            fullName: "",
            email: "",
            phone: "",
            birth: "",
            university: "",
            studentId: "",
          },
        ],
      }}
      validationSchema={
        step === 1
          ? validationSchema
          : values_tmp.level === "highschool"
          ? validationSchema2
          : validationSchema3
      }
      onSubmit={async (values, { setSubmitting, setTouched }) => {
        if (step === 1) {
          console.log("Step 1:", values);
          values_tmp = values;
          await waitTwoSeconds();
          setTouched({});
          setStep(2);
          setSubmitting(false);
        } else {
          console.log("Step 2:", values_tmp, values);
          values_tmp = values;
          try {
            await handleSubmit(values);
          } finally {
            setSubmitting(false);
          }
        }
      }}
      validateOnBlur={true}
      validateOnChange={true}
    >
      {({ isSubmitting, values }) => (
        <Form
          className={` font-bevietnam select-none flex flex-col gap-0 items-center justify-center w-full ${
            step === 1
              ? " backdrop-blur-xl max-w-md h-150 my-12 border-none rounded-xl bg-[#EDEAD2] shadow-xl ring-1 ring-white/10"
              : "border-none bg-transparent "
          } mx-auto border-2   px-5 py-6`}
        >
         
          {step === 1 && (
            <>
              <TeamForm />
              <div className="btn-signup mt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
              mt-0 w-full bg-[#492A51] hover:bg-[#8b2366] hover:scale-105 text-[#EDEAD2] font-semibold py-2 px-4 rounded-xl 
              transition duration-400 
                    ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                      <span className = "text-lg">Đang xử lý...</span>
                    </>
                  ) : (
                    <span className = "text-lg">Tiếp tục</span>
                  )}
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <MemberInfoForm isUniversity={values.level === "university"} />
              <div className={`btn-signup mt-3 ${step === 1 ? "" : ""}`}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    mt-4 w-full bg-[#492A51]  hover:bg-[#AD2971] hover:scale-105 text-[#EDEAD2] font-semibold py-2 px-4 rounded-xl  transition duration-200
                    ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                      <span className = "text-lg">Đang đăng kí...</span>
                    </>
                  ) : (
                    <span className = "text-lg">Đăng kí</span>
                  )}
                </button>
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
