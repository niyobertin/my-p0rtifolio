import { AxiosError } from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../api/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../components/common/input';
import LinkPages from '../components/common/linkToPage';
import LoginSchema from '../schema/loginSchema';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import systemInt from '../assets/System-integration.jpg';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { loginAsUSer } from '../api/reducers/authentication';
import { useNavigate } from 'react-router-dom';

interface UserLogin {
    email: string;
    password: string;
}

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector((state: RootState) => state.login.isLoading);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<UserLogin>({
        resolver: yupResolver(LoginSchema), 
    });

    const onSubmit: SubmitHandler<UserLogin> = async (user: UserLogin) => {
        try {
            // @ts-ignore
            await dispatch(loginAsUSer(user)).unwrap();
            toast.success("Log in successfully!");
            reset();
            setTimeout(() =>{
                navigate('/')
            },3000)
        } catch (err) {
            const error = err as AxiosError;
            toast.error(`${error.message}`);
        }
    };

    return (
        <div className="flex w-full max-h-screen overflow-y-hidden">
            <div className="hidden min-h-screen lg:flex w-[50%] xl:w-[60%] items-center">
                <img className="w-full min-h-screen object-cover" src={systemInt} alt="registerImage" />
            </div>
            
            <div className="w-[100%] md:w-[50%] xl:w-[40%] flex flex-col justify-center mt-[15vh] mx-auto px-16">
           
                <h1 className="text-white font-medium text-[36px]">
                    Login 
                </h1>
                <h5 className="pt-6 text-left text-white">Enter your email and password below</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        name="email"
                        type="email"
                        placeholder="Email"
                        register={register}
                        error={errors.email?.message}
                    />
                    <InputField
                        name="password"
                        type="password"
                        placeholder="Password"
                        register={register}
                        error={errors.password?.message}
                    />
                    <div className="flex flex-col">
                        <button
                            type="submit"
                            className="bg-[#161616] text-white py-3 my-4 text-[13px] md:text-lg rounded-sm"
                        >
                            {loading ? "Loading..." : "Login"}
                        </button>
                    </div>
                </form>
                <LinkPages
                    description="Don't you have an account?"
                    link="/register"
                    text="Register"
                /> 
                <a href="/" className='text-green-300'>Back</a>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
