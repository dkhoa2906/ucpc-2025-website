import { useState } from 'react';
import TeamForm from './TeamForm';
import MemberInfoForm from './MemberInfoForm';
import { Formik, Form } from 'formik';

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
                <Form className={` rounded-xl shadow-lg flex flex-col gap-3 items-center justify-center backdrop-blur-md w-full ${step === 1 ? 'rounded-md max-w-md h-130 my-12' : 'border-none max-w-full h-screen bg-none'
                    } mx-auto border-2 bg-white/50  px-5 py-6`}>
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
