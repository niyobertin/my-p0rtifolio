import { AxiosError } from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../api/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../components/common/input';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import systemInt from '../assets/System-integration.jpg';
import { yupResolver } from '@hookform/resolvers/yup'; 
import ContactSchema from '../schema/contactSchema'; // Update schema import
import { sendMessage } from '../api/reducers/contact.us';
import { useNavigate } from 'react-router-dom';

interface ContactForm {
    visitor: string;
    message: string;
}

const ContactUs = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector((state: RootState) => state.querries.loading);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactForm>({
        resolver: yupResolver(ContactSchema),
    });

    const onSubmit: SubmitHandler<ContactForm> = async (data: ContactForm) => {
        try {
            // @ts-ignore
            await dispatch(sendMessage(data)).unwrap();
            toast.success("Message sent successfully!");
            reset();
        } catch (err) {
            const error = err as AxiosError;
            toast.error(`Failed to send message: ${error.message}`);
        }
    };

    return (
        <div className="flex w-full max-h-screen overflow-y-hidden">
            <div className="hidden min-h-screen lg:flex w-[50%] xl:w-[60%] items-center">
                <img className="w-full min-h-screen object-cover" src={systemInt} alt="contactImage" />
            </div>
            
            <div className="w-[100%] md:w-[50%] xl:w-[40%] flex flex-col justify-center mt-[15vh] mx-auto px-16">
                <h1 className="text-white font-medium text-[36px]">
                    Contact Us
                </h1>
                <h5 className="pt-6 text-left text-white">Provide you name and message bellow</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        name="visitor"
                        type="text"
                        placeholder="eg: Joan Doe"
                        register={register}
                        error={errors.visitor?.message}
                    />
                    <div className="mt-4">
                        <textarea
                            placeholder="Your Message"
                            {...register("message")}
                            className={`form-textarea w-full h-32 p-2 bg-[#161616] text-white rounded-md ${errors.message ? 'border-red-500' : ''}`}
                        />
                        {errors.message && <p className="text-red-500">{}</p>}
                    </div>
                    <div className="flex flex-col">
                        <button
                            type="submit"
                            className="bg-black text-white py-3 my-4 text-[13px] md:text-lg rounded-sm"
                        >
                            {loading ? "Sending..." : "Send Message"} 
                        </button>
                    </div>
                </form>
                <a href="/" className="text-green-300">Back</a>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;
