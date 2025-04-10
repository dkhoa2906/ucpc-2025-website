import { useState } from 'react';
import TeamForm from './TeamForm';
import MemberInfoForm from './MemberInfoForm';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object({
    teamName: Yup.string()
        .matches(/^[A-Z]/, "Chữ cái đầu tiên phải viết hoa")
        .required("Tên đội là bắt buộc."),
    instructor: Yup.string()
        .required("Họ và tên người hướng dẫn là bắt buộc.")
        .matches(
            /^([A-ZÀ-Ỹ][a-zà-ỹ]*)(\s[A-ZÀ-Ỹ][a-zà-ỹ]*)*$/,
            "Mỗi từ trong họ và tên phải viết hoa chữ cái đầu (kể cả có dấu)."
        ),
    level: Yup.string()
        .oneOf(["highschool", "university"], "Cấp độ không hợp lệ.") // Chỉ cho phép chọn "Trung học" hoặc "Đại học"
        .required("Cấp độ là bắt buộc."),
});// Định nghĩa schema cho bước 1

const validationSchema2 = Yup.object({
    members: Yup.array()
        .of(
            Yup.object().shape({
                fullName: Yup.string()
                    .required("Họ và tên là bắt buộc.")
                    .matches(
                        /^([A-ZÀ-Ỹ][a-zà-ỹ]*)(\s[A-ZÀ-Ỹ][a-zà-ỹ]*)*$/,
                        "Mỗi từ trong họ và tên phải viết hoa chữ cái đầu (kể cả có dấu)."
                    ),

                email: Yup.string()
                    .required("Email là bắt buộc")
                    .email("Email không hợp lệ"),
                phone: Yup.string()
                    .matches(/^\d{10}$/, "Số điện thoại cần có 10 số")
                    .required("Số điện thoại là bắt buộc"),
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
                    .test("ageMax", "Tuổi phải nhỏ hơn hoặc bằng 24.", (value) => {
                        if (!value) return false;

                        const today = new Date();
                        let age = today.getFullYear() - value.getFullYear();
                        const monthDiff = today.getMonth() - value.getMonth();

                        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < value.getDate())) {
                            age--;
                        }

                        return age <= 24;
                    }),


                university: Yup.string()
                    .matches(
                        /^Trường (THPT|THCS) [A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯàáâãèéêìíòóôõùúăđĩũơưẠ-ỹ\s-]+$/,
                        "Tên trường không hợp lệ. Viết đúng format ví dụ: Trường THPT/THCS <tên trường>"
                    )
                    .required("Trường học là bắt buộc."),
                studentId: Yup.string().required("Mã số sinh viên là bắt buộc"),
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
                        "Mỗi từ trong họ và tên phải viết hoa chữ cái đầu (kể cả có dấu)."
                    ),
                email: Yup.string()
                    .required("Email là bắt buộc")
                    .email("Email không hợp lệ"),
                phone: Yup.string()
                    .matches(/^\d{10}$/, "Số điện thoại cần có 10 số")
                    .required("Số điện thoại là bắt buộc"),
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

                birth: Yup.date()
                    .required("Ngày sinh là bắt buộc.")
                    .test("ageMax", "Tuổi phải nhỏ hơn hoặc bằng 24.", (value) => {
                        if (!value) return false;

                        const today = new Date();
                        let age = today.getFullYear() - value.getFullYear();
                        const monthDiff = today.getMonth() - value.getMonth();

                        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < value.getDate())) {
                            age--;
                        }

                        return age <= 24;
                    }),


                university: Yup.string().required("Tên học là bắt buộc"),

                studentId: Yup.string().required("Mã số sinh viên là bắt buộc"),
            })
        )
        .min(3, "Phải có ít nhất 3 thành viên")
        .max(3, "Phải có đúng 3 thành viên"),
});
// Validation schema cho trường hợp không là đại học

var values_tmp = null;
function UserForm() {
    const [step, setStep] = useState(1);

    const handleSubmit = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Submitted:', values);
    };

    return (
        <Formik
            initialValues={{
                teamName: '',
                instructor: '',
                level: '',
                members: [
                    { fullName: '', email: '', phone: '', birth: '', university: '', studentId: '' },
                    { fullName: '', email: '', phone: '', birth: '', university: '', studentId: '' },
                    { fullName: '', email: '', phone: '', birth: '', university: '', studentId: '' }
                ]
            }}
            validationSchema={step === 1 ? validationSchema : (values_tmp.level === "highschool" ? validationSchema2 : validationSchema3)}
            onSubmit={(values, { setSubmitting }) => {
                if (step === 1) {
                    console.log('Step 1:', values);
                    values_tmp = values;
                    setStep(2);
                    setSubmitting(false);
                } else {
                    console.log('Step 2:', values_tmp, values);
                    values_tmp = values;
                    handleSubmit(values).finally(() => setSubmitting(false));
                }
            }}
        >
            {({ isSubmitting, values }) => (
                <Form className={` rounded-xl shadow-lg flex flex-col gap-3 items-center justify-center backdrop-blur-md w-full ${step === 1 ? 'rounded-md max-w-md h-130 my-12' : 'border-none max-w-full h-screen bg-no'
                    } mx-auto border-2 bg-white/40  px-5 py-6`}>
                    {step === 1 && (
                        <>
                            <TeamForm />
                            <div className='btn-signup mt-3'>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`
              mt-4 w-full bg-[#770549] hover:bg-[#8b2366] text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
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
                            <MemberInfoForm

                                isUniversity={values.level === 'university'}
                            />
                            <div className={`btn-signup mt-3 ${step === 1 ? '' : ''}`}>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`
                    mt-4 w-full bg-[#770549] hover:bg-[#8b2366] text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                  `}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="w-4 h-4 border-2 text-gray-800 border-t-transparent rounded-full animate-spin"></span>
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
