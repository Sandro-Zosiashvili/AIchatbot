'use client'; // Add this at the very top of the file

import Button from '../components/Button/Button';
import styles from './page.module.scss';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';

type FormData = {
    email: string;
    phoneNumber: string;
    company: string;
    socialMedia: string
    aboutProjct: string
    terms: string
};

export default function Contactus() {
    const {
        register,
        handleSubmit,
        reset, // დაამატეთ reset მეთოდი

        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        axios.post("http://localhost:3002/contact", data)
            .then((response) => {
                console.log(response.data);
                reset();
            })
            .catch((error) => {
                console.error("Error:", error.response?.data || error.message);
            });
    };


    return (
        <div className={styles.container}>
            <div className={styles.aboutusHeader}>
                Contact <span className={styles.different}>Us</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.mainInputWrapper}>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.inputMail}
                        {...register("email", { required: true })}
                        type='email'
                        placeholder='Enter your E-mail'
                    />
                    {errors.email && <span className={styles.errorMessage}>This field is required</span>}
                </div>

                <div className={styles.inputWrapper}>
                    <input className={styles.inputMail}
                        {...register("phoneNumber", { required: true })}
                        defaultValue="+995 "
                        type='text'
                        placeholder='Mobile Number' />
                    {errors.phoneNumber && <span className={styles.errorMessage}>This field is required</span>}
                </div>

                <div className={styles.inputWrapper}>
                    <input className={styles.inputMail}
                        {...register("company", { required: true })}
                        type='text' placeholder='Company' />
                    {errors.company && <span className={styles.errorMessage}>This field is required</span>}

                </div>

                <div className={styles.inputWrapper}>
                    <input
                        className={styles.inputMail}
                        {...register("socialMedia", {
                            pattern: {
                                value: /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
                                message: "Please enter a valid URL."
                            }
                        })}
                        type='text'
                        placeholder='Website or social media link'
                    />

                    {errors.socialMedia && (
                        <span className={styles.errorMessage}>
                            {errors.socialMedia.message}
                        </span>
                    )}
                </div>

                <div className={styles.inputWrapperTwo}>
                    <textarea className={styles.inputAbout}
                        {...register("aboutProjct")}
                        placeholder='Tell us about your project' />
                </div>

                <div className={styles.checkBoxAccept}>
                    <div className={styles.checkboxWrapper}>
                        <input type="checkbox"
                            {...register("terms", { required: true })}
                            className={styles.checkbox} />
                    </div>
                    <div className={styles.fontAccept}>
                        I accept terms and conditions.
                    </div>
                    {
                        errors.terms &&
                        <span className={styles.termsError}>
                            Please accept the terms and conditions.
                        </span>
                    }
                </div>
                <div className={styles.button}>
                    <Button title={'Send'} />
                </div>
            </form>
        </div>
    );
}