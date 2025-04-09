import { useState } from "react";
import TeamForm from "./TeamForm";
import MemberInfoForm from "./MemberInfoForm";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  teamName: Yup.string()
    .matches(/^[A-Z]/, "Chữ cái đầu tiên phải viết hoa")
    .required("Tên đội là bắt buộc."),
  instructor: Yup.string()
    .matches(/^[A-Z]/, "Chữ cái đầu tiên phải viết hoa")
    .required("Tên người hướng dẫn là bắt buộc."),
  level: Yup.string()
    .oneOf(["0", "1"], "Cấp độ không hợp lệ.") // Chỉ cho phép chọn "Trung học" hoặc "Đại học"
    .required("Cấp độ là bắt buộc."),
});
const validationSchema2 = Yup.object({
  members: Yup.array()
    .of(
      Yup.object().shape({
        fullName: Yup.string().required("Họ và tên là bắt buộc."),
        email: Yup.string()
          .required("Email là bắt buộc")
          .email("Email không hợp lệ"),
        phone: Yup.string()
          .matches(/^\d{10}$/, "Số điện thoại cần có 10 số")
          .required("Số điện thoại là bắt buộc"),
        birth: Yup.string()
          .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Ngày sinh không hợp lệ.") // Kiểm tra định dạng ngày sinh (dd/mm/yyyy)
          .required("Ngày sinh là bắt buộc.")
          .test("ageRange", "Tuổi phải nằm trong khoảng dưới .", (value) => {
            if (!value) return false; // Trường bỏ trống
            const [day, month, year] = value.split("/"); // Tách ngày, tháng, năm từ chuỗi
            const birthDate = new Date(`${year}-${month}-${day}`);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (
              monthDiff < 0 ||
              (monthDiff === 0 && today.getDate() < birthDate.getDate())
            ) {
              return age - 1 <= 24; // Kiểm tra tuổi giảm đi 1 khi chưa qua ngày sinh
            }
            return age <= 24; // Tuổi phải nằm trong khoảng 18 đến 60
          }),
        // university: Yup.string().when("level", {
        //   is: "1", // Nếu level là 1 (Đại học)
        //   then: Yup.string().required("Trường học là bắt buộc."),
        //   otherwise: Yup.string()
        //     .matches(
        //       /^Trường (THPT|THCS) [A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯàáâãèéêìíòóôõùúăđĩũơưẠ-ỹ\s-]+$/,
        //       "Tên trường không hợp lệ. Viết đúng format ví dụ: Trường THPT/THCS <tên trường>"
        //     )
        //     .required("Trường học là bắt buộc."),
        // }),
        university: Yup.string().required("Tên trường là bắt buộc"),
        studentId: Yup.string().required("Mã số sinh viên là bắt buộc"),
      })
    )
    .min(3, "Phải có ít nhất 3 thành viên")
    .max(3, "Phải có đúng 3 thành viên"),
});
// const validationSchema3 = Yup.object({
//   members: Yup.array()
//     .of(
//       Yup.object().shape({
//         fullName: Yup.string().required("Họ và tên là bắt buộc."),
//         email: Yup.string()
//           .required("Email là bắt buộc")
//           .email("Email không hợp lệ"),
//         phone: Yup.string()
//           .matches(/^\d{10}$/, "Số điện thoại cần có 10 số")
//           .required("Số điện thoại là bắt buộc"),
//         birth: Yup.string()
//           .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Ngày sinh không hợp lệ.") // Kiểm tra định dạng ngày sinh (dd/mm/yyyy)
//           .required("Ngày sinh là bắt buộc.")
//           .test("ageRange", "Tuổi phải nằm trong khoảng dưới .", (value) => {
//             if (!value) return false; // Trường bỏ trống
//             const [day, month, year] = value.split("/"); // Tách ngày, tháng, năm từ chuỗi
//             const birthDate = new Date(`${year}-${month}-${day}`);
//             const today = new Date();
//             const age = today.getFullYear() - birthDate.getFullYear();
//             const monthDiff = today.getMonth() - birthDate.getMonth();
//             if (
//               monthDiff < 0 ||
//               (monthDiff === 0 && today.getDate() < birthDate.getDate())
//             ) {
//               return age - 1 <= 24; // Kiểm tra tuổi giảm đi 1 khi chưa qua ngày sinh
//             }
//             return age <= 24; // Tuổi phải nằm trong khoảng 18 đến 60
//           }),
//         university: Yup.string().required("Trường học là bắt buộc"),

//         studentId: Yup.string().required("Mã số sinh viên là bắt buộc"),
//       })
//     )
//     .min(3, "Phải có ít nhất 3 thành viên")
//     .max(3, "Phải có đúng 3 thành viên"),
// });

function UserForm() {
  const [step, setStep] = useState(1);

  const handleSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Submitted:", values);
  };

  return (
    <Formik
      initialValues={{
        teamName: "",
        instructor: "",
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
        step === 1 ? validationSchema : value.level?validationSchema2:
        // : validationSchema3
      }
      onSubmit={(values, { setSubmitting }) => {
        if (step === 1) {
          setStep(2);
          setSubmitting(false);
        } else {
          handleSubmit(values).finally(() => setSubmitting(false));
        }
      }}
    >
      {({ isSubmitting, values }) => (
        <Form
          className={`flex flex-col gap-3 items-center justify-center bg-gray-200 w-full ${
            step === 1 ? "max-w-md h-130" : "max-w-full h-screen"
          } mx-auto border-2 border-amber-700 rounded-md px-5 py-6`}
        >
          {step === 1 && (
            <>
              <TeamForm />
              <div className="btn-signup mt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    px-6 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2
                    ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Đang xử lý...</span>
                    </>
                  ) : (
                    <span>Tiếp tục</span>
                  )}
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <MemberInfoForm isUniversity={values.level === "1"} />
              <div className={`btn-signup mt-3 ${step === 1 ? "" : ""}`}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    px-6 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2
                    ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Đang đăng kí...</span>
                    </>
                  ) : (
                    <span>Đăng kí</span>
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
