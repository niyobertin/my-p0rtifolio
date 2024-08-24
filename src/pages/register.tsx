import { AxiosError } from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../api/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../components/common/input';
import LinkPages from '../components/common/linkToPage';
import RegisterSchema from '../schema/registerSchema';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import systemInt from '../assets/System-integration.jpg';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { registerNeUser } from '../api/reducers/authentication';
import { useNavigate } from 'react-router-dom';

interface User {
    username: string;
    email: string;
    password: string;
}

const RegisterUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector((state: RootState) => state.register.isLoading);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<User>({
        resolver: yupResolver(RegisterSchema), 
    });

    const onSubmit: SubmitHandler<User> = async (user: User) => {
        try {
            // @ts-ignore
            await dispatch(registerNeUser(user)).unwrap();
            toast.success("Account created successfully!");
            reset();
            setTimeout(() =>{
                navigate('/login')
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
                    Create an account
                </h1>
                <h5 className="pt-6 text-left text-white">Enter your details below</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        name="username"
                        type="text"
                        placeholder="Username"
                        register={register}
                        error={errors.username?.message}
                    />
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
                            {loading ? "Loading..." : "Create Account"}
                        </button>
                    </div>
                </form>
                <LinkPages
                    description="Already have an account?"
                    link="/login"
                    text="Login"
                />
                 <a href="/" className='text-green-300'>Back</a>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RegisterUser;
