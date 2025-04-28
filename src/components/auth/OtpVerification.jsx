
import { useState, useRef } from "react";
import styles from "../../assets/css/auth/OtpVerification.module.css";
import { useForm } from "react-hook-form";
import axios from "../../../utils/Axios";
import { toast } from "react-toastify";
import { useAuth } from "../../../utils/ContextApi";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

const OtpVerification = ({sessionData}) => {
  const { register, handleSubmit, reset } = useForm();
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {login} = useAuth();
  const navigate = useNavigate();

  const submitData = async (data) => {
    setIsLoading(true);
    console.log(isLoading)
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
          setIsLoading(false);
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
      setIsLoading(false);
    }
    
  };
  return (<>
    {isLoading && (
      <Loader />
     )}
    <div
      className={`d-flex justify-content-center align-items-center min-vh-100 ${styles.otpcontainer}`}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >

      <div className={`${styles.credentialsCard} shadow-lg p-4 text-center`}>
        <h4 className="fw-bold">Enter Your OTP</h4>
        <p style={{ color: "#6B7280" }}>
        Enter the code sent to your email
        </p>
        <form action=""
            onSubmit={handleSubmit((data) => submitData(data))}>
        <input {...register('otp')}
        name="otp"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`form-control mb-3 ${styles.inputBox}`}
          placeholder="Enter OTP"
          style={{ backgroundColor: "#E5E7EB" }}
        />

          <button
            id="sendOtpBtn"
            className={`btn btn-dark w-100 ${styles.customBtn}`}
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
    </>);
};

export default OtpVerification;
