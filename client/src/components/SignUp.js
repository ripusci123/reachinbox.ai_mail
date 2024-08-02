import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-[17px] border-[1px_solid_#343A40] bg-[var(--background-1-background-image,linear-gradient(318.97deg,#111214_94.8%,#121212_205.2%))] flex flex-col items-center p-[23px_39px_39px_39px] w-[460px] h-[fit-content] box-sizing-border relative z-10">
      <div className="m-[0_0_48px_0] flex flex-col items-center w-[380px] box-sizing-border">
        <div className="m-[0_0_24px_0] inline-block break-words font-['Open_Sans'] font-semibold text-[20px] leading-[1.55] text-[#FFFFFF]">
          Create a new account
        </div>
        <div className="flex w-[380px] box-sizing-border">
          <div className="rounded-[4px] border-[1px_solid_#707172] flex flex-row p-[10px_0_10px_0] w-[380px] h-[fit-content] box-sizing-border">
            <div className="m-[2px_12.1px_3px_0] flex w-[23.5px] h-[32px] box-sizing-border">
              <img className="w-[16px] h-[21px]" src="../assets/vectors/frame_x2.svg" alt="Google Icon" />
            </div>
            <span className="break-words font-['Open_Sans'] font-normal text-[16px] tracking-[-0.3px] leading-[1.631] text-[#CCCCCC] cursor-pointer">
              Sign Up with Google
            </span>
          </div>
        </div>
      </div>
      <div className="m-[0_3.8px_0_0] flex flex-col items-end w-[fit-content] box-sizing-border">
        <div className="m-[0_22.4px_24px_22.4px] flex w-[195px] box-sizing-border">
          <div className="rounded-[4px] bg-[linear-gradient(91.73deg,#4B63DD_-3%,rgba(5,36,191,0.99)_95.8%)] flex p-[13px_1px_13px_0] w-[195px] h-[fit-content] box-sizing-border cursor-pointer" onClick={() => navigate('/login')}>
            <span className="break-words font-['Open_Sans'] font-semibold text-[14px] leading-[1.55] text-[#FFFFFF]">
              Create an Account
            </span>
          </div>
        </div>
        <div className="flex flex-row w-[fit-content] box-sizing-border">
          <span className="m-[0_4.5px_0_0] break-words font-['Open_Sans'] font-normal text-[16px] leading-[1.55] text-[#909296]">
            Already have an account?
          </span>
          <span className="break-words font-['Open_Sans'] font-medium text-[16px] leading-[1.55] text-[#C1C2C5] cursor-pointer" onClick={() => navigate('/login')}>
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
