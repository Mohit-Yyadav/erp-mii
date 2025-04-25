
import { useState, useRef } from "react";
import styles from "../../assets/css/auth/OtpVerification.module.css";
import { useForm } from "react-hook-form";
import axios from "../../../utils/Axios";
import { toast } from "react-toastify";
import { useAuth } from "../../../utils/ContextApi";
import { useNavigate } from "react-router-dom";

const OtpVerification = ({sessionData}) => {
 const [otpId,setOTPId] = useState(sessionData)
  const { register, handleSubmit, reset } = useForm();
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [inputValue, setInputValue] = useState("");
  const otpRefs = useRef([]);
  const {login} = useAuth();
  const navigate = useNavigate();

  // Validate email and phone number
  // const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);
  // const isValidPhone = (value) => /^[0-9]{10}$/.test(value);

  // Handle sending OTP
  // const handleSendOtp = () => {
  //   if (isValidEmail(inputValue) || isValidPhone(inputValue)) {
  //     setShowOtp(true);
  //   } else {
  //     alert("Please enter a valid email or a 10-digit phone number.");
  //   }
  // };

  // Handle OTP input changes
  // const handleOtpChange = (index, value) => {
  //   if (!/^[0-9]*$/.test(value)) return;

  //   const newOtp = [...otp];
  //   newOtp[index] = value;
  //   setOtp(newOtp);

  //   if (value && index < otp.length - 1) {
  //     otpRefs.current[index + 1].focus();
  //   }
  // };

  // Handle backspace navigation in OTP fields
  // const handleBackspace = (index, e) => {
  //   if (e.key === "Backspace" && !otp[index] && index > 0) {
  //     otpRefs.current[index - 1].focus();
  //   }
  // };

  // Verify OTP
  // const handleVerifyOtp = () => {
  //   if (otp.some((digit) => digit === "")) {
  //     alert("Please enter the complete OTP.");
  //     return;
  //   }
   
  //   alert("OTP Verified Successfully!");
  // };
  
  const submitData = async (data) => {
    const storedUser = localStorage.getItem("otpId");
    data = {...data,id:storedUser}
    try {
      const result = await axios.post("/api/auth/verify-otp", data);
      if (result) {
         await login(result.data)
        toast.success(result.data.message,{ autoClose: 1500 });
        setTimeout(() => {
          localStorage.removeItem('otpId');
          const rawRole = result?.data?.role?.role_name?.role_name;
          const role = rawRole?.toLowerCase(); // "super admin"
          switch (role) {
            case "human resource":
              navigate("/human-resource/");
              break;
            case "super admin":
              navigate("/super-admin/");
              break;
            default:
              navigate("/not-authorized");
              break;
          }
          toast.success("Login Successfully");
        }, 3000);

      }
      reset(); 
    } catch (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data.error}`); // Show error in UI
      } else {
        toast.error("Error in Submitting form", error);
      }
    }
  };
  return (
    <div
      className={`d-flex justify-content-center align-items-center min-vh-100 ${styles.otpcontainer}`}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className={`${styles.credentialsCard} shadow-lg p-4 text-center`}>
        <h4 className="fw-bold">Enter Your Email</h4>
        <p style={{ color: "#6B7280" }}>
          We'll send you a verification code
        </p>
        <form action=""
            onSubmit={handleSubmit((data) => submitData(data))}>
        <input {...register('otp')}
        name="otp"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`form-control mb-3 ${styles.inputBox}`}
          placeholder="Email or Phone Number"
          style={{ backgroundColor: "#E5E7EB" }}
          disabled={showOtp}
        />

        {!showOtp ? (
          <button
            id="sendOtpBtn"
            className={`btn btn-dark w-100 ${styles.customBtn}`}
          >
            Send OTP
          </button>
        ) : (
          <div className={`${styles.otpCard}`}>
            <h4 className="fw-bold mt-4">Enter OTP</h4>
            <p style={{ color: "#6B7280" }}>
              Enter the code sent to your email
            </p>

            <div className="otp-inputs d-flex justify-content-center gap-2">
              {otp.map((value, index) => (
                <input 
                  key={index}
                  ref={(el) => (otpRefs.current[index] = el)}
                  type="text"
                  className={`${styles.otpBox}`}
                  maxLength="1"
                  value={value}
                 
                />
              ))}
            </div>

            <button
              className="btn btn-dark w-100 mt-3"
            >
              Verify OTP
            </button>

            <p className={`${styles.resendOtp} mt-2`}>Resend OTP</p>
          </div>
        )}
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
