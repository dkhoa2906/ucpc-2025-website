import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faLock,
    faEye,
    faEyeSlash,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";

function LoginModal({ isOpen, onClose }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Đăng nhập với:", { username, password });
    };

    if (!isOpen) return null;

    return (
        <div
            style={styles.overlay}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose(); // chỉ đóng nếu click ra ngoài
            }}
        >
            <div style={styles.modal}>
                {/* Nút đóng */}
                <FontAwesomeIcon
                    icon={faTimes}
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white cursor-pointer hover:text-red-400 text-xl"
                />

                <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-3xl pb-10 font-bold text-center">Đăng nhập</h2>

                    {/* Username */}
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

                    {/* Mật khẩu */}
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
                            className="w-full pl-10 backdrop-blur-none pr-10 py-3 rounded-lg bg-white/20 text-white placeholder-white/80  focus:outline-none focus:ring-2 focus:ring-purple-600 text-base"
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                        />
                    </div>

                    {/* Nút submit */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-semibold text-base transition"
                    >
                        Đăng nhập
                    </button>
                </form>
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
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Mờ nền
        // Làm mờ nhẹ
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
        width: "30%",           // tăng chiều ngang
        minHeight: "300px",       // đảm bảo form không quá ngắn
        position: "relative",
        boxShadow: "0 0 40px rgba(208,32,157,0.9)",  // phát sáng xanh cyan
        border: "1px solid rgba(0, 255, 255, 0.2)",    // viền phát sáng nhẹ
    },
   
};
export default LoginModal;
