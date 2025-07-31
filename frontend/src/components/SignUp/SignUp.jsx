import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faLock,
    faEye,
    faEyeSlash,
    faTimes,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpModal({ isOpen, onClose }) {
    const [Step, setStep] = useState(1);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Mật khẩu nhập lại không khớp.");
            toast.error("Mật khẩu nhập lại không khớp.");
            return;
        }

        setError("");

        try {
            toast.info("Đang gửi yêu cầu đăng ký...");

            const res = await axios.post("https://api.khoacd.io.vn/register/email-verify", {email});

            toast.success("Đã gửi mã xác minh đến email của bạn. Vui lòng kiểm tra hộp thư đến.");
            setStep(2);
            console.log("Send OTP to ", res.data);
        } catch (err) {
            const message = err.response?.data?.message || "Có lỗi xảy ra khi đăng ký.";
            setError(message);
            toast.error(message);
            console.error("Lỗi đăng ký:", err);
        }
    };
    const createUser = async () => {
        try {
            const res = await axios.post("https://api.khoacd.io.vn/register/register-user", {
                email,
                password,
                fullName: username,
                pinCode: otp});
            toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
            console.log("User created successfully:", res.data);
            onClose();
        } catch (err) {
            const message = err.response?.data?.message || "Có lỗi xảy ra khi tạo người dùng.";
            setError(message);
            toast.error(message);
            
            console.error("Lỗi tạo người dùng:", err.response?.data);
            
            setStep(1); // Reset to the first step
            setOtp(""); // Reset OTP input
        }
    };  
    const handleOTP = async (e) => {
        e.preventDefault();
        try {
            toast.info("Đang xác thực OTP...");
            const res = await axios.post("https://api.khoacd.io.vn/register/pin-verify", {
                email,
                pinCode: otp});
            createUser();
            setStep(1); // Reset to the first step
            setOtp(""); // Reset OTP input
            console.log("OTP verified successfully:", res.data);
            onClose();
        } catch (err) {
            const message = err.response?.data?.message || "Có lỗi xảy ra khi xác thực OTP.";
            setError(message);
            toast.error(message);
            console.error("Lỗi xác thực OTP:", err);
            setOtp(""); // Reset OTP input on error
            setStep(1); // Reset to the first step
        }
    };

    if (!isOpen) return null;

    return (
        <div
            style={styles.overlay}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div style={styles.modal}>
                <FontAwesomeIcon
                    icon={faTimes}
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white cursor-pointer hover:text-red-400 text-xl"
                />
                {Step === 1 && ( <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-3xl pb-10 font-bold text-center">Đăng ký</h2>

                    <div className="relative">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                        />
                        <input
                            type="text"
                            placeholder="Tên đăng nhập"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-purple-600 text-base"
                        />
                    </div>

                    <div className="relative">
                        <FontAwesomeIcon
                            icon={faLock}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                        />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full pl-10 pr-10 py-3 rounded-lg bg-white/20 text-white placeholder-white/80  focus:outline-none focus:ring-2 focus:ring-purple-600 text-base"
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                        />
                    </div>

                    <div className="relative">
                        <FontAwesomeIcon
                            icon={faLock}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                        />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Nhập lại mật khẩu"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full pl-10 pr-10 py-3 rounded-lg bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-purple-600 text-base"
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                        />
                    </div>

                    <div className="relative">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-purple-600 text-base"
                        />
                    </div>

                    {error && (
                        <p className="text-red-400 text-sm mt-1 px-2">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-semibold text-base transition"
                    >
                        Đăng ký
                    </button>
                </form>)}
                {Step === 2 && ( <form onSubmit={handleOTP} className="space-y-6">
                    <h2 className="text-3xl pb-10 font-bold text-center">Xác thực OTP</h2>

                    <div className="relative">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                        />
                        <input
                            type="text"
                            placeholder="OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-purple-600 text-base"
                        />
                    </div>

                   

                    {error && (
                        <p className="text-red-400 text-sm mt-1 px-2">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-semibold text-base transition"
                    >
                        Xác thực
                    </button>
                </form>)}

            
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: -1,
    },
    modal: {
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        padding: "80px 40px",
        borderRadius: "20px",
        opacity: "1",
        width: "30%",
        minHeight: "300px",
        position: "relative",
        boxShadow: "0 0 40px rgba(208,32,157,0.9)",
        border: "1px solid rgba(0, 255, 255, 0.2)",
    },
};

export default SignUpModal;
