import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle } from "react-feather";

declare global {
    interface Window {
        grecaptcha: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        };
    }
}

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // onSubmit handles obtaining the reCAPTCHA v3 token on demand.
    const onSubmit = async (data: Record<string, string>) => {
        try {
            // Execute reCAPTCHA v3 and get a token.
            const token = await new Promise<string>((resolve, reject) => {
                if (!window.grecaptcha) {
                    return reject("reCAPTCHA not loaded");
                }
                window.grecaptcha.ready(() => {
                    window.grecaptcha
                        .execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY as string, { action: "contact_form" })
                        .then(resolve)
                        .catch(reject);
                });
            });
            console.log("reCAPTCHA token:", token);

            // Submit the form along with the token.
            const response = await fetch("https://1electric.nz/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...data,
                    recaptchaToken: token,
                }),
            });
            const result = await response.json();
            if (result.status === "success") {
                setIsSubmitted(true);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong, please try again.");
        }
    };

    // Navigation functions
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    // Common Styles
    const sectionStyle = "flex flex-col min-w-[50vw] gap-4 text-xl p-12";
    const buttonStyle =
        "bg-trueblue hover:bg-metallicorange hover:scale-101 transition-all text-white font-bold p-4 rounded focus:outline-none focus:ring-2 focus:ring-white focus:bg-metallicorange cursor-pointer";
    const submitButtonStyle =
        "bg-trueblue2 hover:bg-deepkoamaru hover:scale-101 transition-all text-white font-bold p-4 rounded focus:outline-none focus:ring-2 cursor-pointer";
    const paginationStyle =
        "text-trueblue font-bold hover:text-metallicorange hover:scale-101 transition-all focus:outline-none rounded-lg px-4 focus:ring-2 focus:ring-metallicorange cursor-pointer";
    const errorStyle = "text-red-500 text-sm mt-1";
    const formGroupStyle = "flex flex-col gap-2 text-left";
    const inputStyle =
        "focus:border border-trueblue rounded p-4 ring-transparent focus:outline-none focus:ring-2 focus:ring-trueblue bg-white w-full";
    const labelStyle = "text-trueblue text-sm";

    // Reusable Form Step Component
    const FormStep = ({ title, children, showNext = true, showPrev = true, submit = false }: {
        title: string;
        children: React.ReactNode;
        showNext?: boolean;
        showPrev?: boolean;
        submit?: boolean;
    }) => (
        <div className={sectionStyle}>
            <h2 className="mb-4 font-bold">{title}</h2>
            {children}
            <div className="flex justify-between mt-4">
                {showPrev && <button onClick={prevStep} className={paginationStyle} aria-label="Go to previous step">Previous</button>}
                {showNext && !submit && <button onClick={nextStep} className={paginationStyle} aria-label="Go to next step">Next</button>}
            </div>
        </div>
    );

    if (isSubmitted) {
        return (
            <div className={sectionStyle}>
                <CheckCircle className="text-green-500 w-16 h-16 m-auto" />
                <h2 className="mb-4">Thanks for contacting us! <br />Keep an eye out for our reply soon.</h2>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
                <FormStep title="What would you like to talk with us about today?" showPrev={false} showNext={false}>
                    <button onClick={() => { setStep(2); setValue("subject", "General Enquiry"); }} className={buttonStyle}>General Enquiry</button>
                    <button onClick={() => { setStep(5); setValue("subject", "Request a Quote"); }} className={buttonStyle}>Request a Quote</button>
                </FormStep>
            )}

            {step === 2 && (
                <FormStep title="Your details">
                    <div className={formGroupStyle}>
                        <label className={labelStyle}>Name</label>
                        <input type="text" {...register("name", { required: "Name is required" })} className={inputStyle} />
                        {errors.name && typeof errors.name.message === 'string' && <p className={errorStyle}>{errors.name.message}</p>}
                    </div>

                    <div className={formGroupStyle}>
                        <label className={labelStyle}>Email</label>
                        <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })} className={inputStyle} />
                        {errors.email && typeof errors.email.message === 'string' && <p className={errorStyle}>{errors.email.message}</p>}
                    </div>
                </FormStep>
            )}

            {step === 3 && (
                <FormStep title="Your enquiry">
                    <div className={formGroupStyle}>
                        <label className={labelStyle}>Message</label>
                        <textarea {...register("message", { required: "Message is required" })} className={`${inputStyle} h-[200px]`} />
                        {errors.message && typeof errors.message.message === 'string' && <p className={errorStyle}>{errors.message.message}</p>}
                    </div>
                </FormStep>
            )}

            {step === 4 && (
                <FormStep title="How did you hear about us?" submit>
                    {["Online", "Advertisement", "Word of Mouth"].map((option) => (
                        <button key={option} type="button" onClick={() => setValue("heardAboutUs", option)} className={buttonStyle}>
                            {option}
                        </button>
                    ))}

                    {/* Submit Button - Disabled Until reCAPTCHA is Completed */}
                    <button
                        type="submit"
                        className={submitButtonStyle}
                        aria-label="Submit the form"
                    >
                        Submit
                    </button>


                    {errors.heardAboutUs && typeof errors.heardAboutUs.message === 'string' && (
                        <p className={errorStyle}>{errors.heardAboutUs.message}</p>
                    )}
                </FormStep>
            )}

            {step === 5 && (
                <FormStep title="Select the service you are interested in">
                    {["Industrial", "Heavy Industrial", "Commercial", "Repairs", "Maintenance", "Other"].map((option) => (
                        <button key={option} type="button" onClick={() => { setValue("serviceType", option); nextStep(); }} className={buttonStyle}>
                            {option}
                        </button>
                    ))}
                    {errors.serviceType && typeof errors.serviceType.message === 'string' && <p className={errorStyle}>{errors.serviceType.message}</p>}
                </FormStep>
            )}

            {step === 6 && (
                <FormStep title="Describe your project / desired work">
                    <div className={formGroupStyle}>
                        <label className={labelStyle}>Project/work description</label>
                        <textarea {...register("projectDescription", { required: "Please describe your project" })} className={`${inputStyle} h-[200px]`} />
                        {errors.projectDescription && typeof errors.projectDescription.message === 'string' && <p className={errorStyle}>{errors.projectDescription.message}</p>}
                    </div>
                </FormStep>
            )}
            {step === 7 && (
                <FormStep title="When do you need it done by?">
                    <div className={formGroupStyle}>
                        <label className={labelStyle}>Estimated Completion Date</label>
                        <input
                            type="date"
                            {...register("projectDate", { required: "Please provide an estimated completion date" })}
                            className={inputStyle}
                        />
                        {errors.projectDate && typeof errors.projectDate.message === 'string' && <p className={errorStyle}>{errors.projectDate.message}</p>}
                    </div>
                </FormStep>
            )}

            {step === 8 && (
                <FormStep title="Where is the project/work located?">
                    <div className={formGroupStyle}>
                        <label className={labelStyle}>Project Location</label>
                        <input
                            type="text"
                            {...register("projectLocation", { required: "Please provide a project location" })}
                            className={inputStyle}
                        />
                        {errors.projectLocation && typeof errors.projectLocation.message === 'string' && <p className={errorStyle}>{errors.projectLocation.message}</p>}
                    </div>
                </FormStep>
            )}

            {step === 9 && (
                <FormStep title="How did you hear about us?" submit>
                    {["Online", "Advertisement", "Word of Mouth"].map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => setValue("heardAboutUs", option)}
                            className={buttonStyle}
                        >
                            {option}
                        </button>
                    ))}

                    {/* Submit Button - Disabled Until reCAPTCHA is Completed */}
                    <button
                        type="submit"
                        className={submitButtonStyle}
                        aria-label="Submit the form"
                    >
                        Submit
                    </button>

                    {errors.heardAboutUs && typeof errors.heardAboutUs.message === 'string' && (
                        <p className={errorStyle}>{errors.heardAboutUs.message}</p>
                    )}
                </FormStep>
            )}
        </form>
    );
}
