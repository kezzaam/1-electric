"use client"

import { useState } from 'react'

export default function ContactForm() {
    const [step, setStep] = useState(1) // Current step
    const [formData, setFormData] = useState({
        // Initialize form data
        serviceType: '',
        name: '',
        email: '',
        subject: '',
        message: '',
        heardAboutUs: '',
        projectDescription: '',
        projectDate: '',
        projectLocation: '',
    })

    // Function to handle moving to the next step
    const nextStep = () => {
        setStep(step + 1)
    }

    // Function to handle moving to the previous step
    const prevStep = () => {
        setStep(step - 1)
    }

    // Function to handle form submission
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        // Process and send data to the server as needed
        console.log('Form Data:', formData)
    }

    const sectionStyle = "flex flex-col space-y-4 text-xl mb-4"
    const buttonStyle = "bg-trueblue hover:bg-metallicorange hover:scale-105 hover:transition-all text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline"
    const inputStyle = "focus:border-2 border-trueblue rounded p-4 focus:outline-none focus:shadow-outline"
    const paginationStyle = "text-trueblue font-bold hover:text-metallicorange hover:scale-105 hover:transition-all"
    const radioLabelStyle = "relative cursor-pointer user-select-none transition-colors duration-200 group bg-deepkoamaru text-white p-4 font-bold hover:bg-metallicorange rounded"
    const radioInputStyle = "absolute opacity-0 left-0 top-0 cursor-pointer"

    // Render form based on the current step
    const renderForm = () => {
        switch (step) {
            case 1:
                return (
                    <div className={sectionStyle}>
                        <h2 className="mb-4 font-bold">What would you like to talk with us about today?</h2>
                        <button onClick={nextStep} className={buttonStyle}>General Enquiry</button>
                        <button onClick={() => { setStep(5); }} className={buttonStyle}>Request a Quote</button>
                    </div>
                )
            case 2:
                return (
                    <div className={sectionStyle}>
                        <h2 className="mb-4 font-bold">Your details</h2>

                        <input
                            type="text"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={inputStyle}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={inputStyle}
                        />
                        <div className="flex justify-between">
                            {<button onClick={prevStep} className={paginationStyle}>Previous</button>}
                            {<button onClick={nextStep} className={paginationStyle}>Next</button>}
                        </div>
                    </div>
                )
            case 3:
                return (
                    <div className={sectionStyle}>
                        <h2 className="mb-4 font-bold">Your enquiry</h2>

                        <input
                            type="text"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className={inputStyle}
                        />
                        <textarea
                            placeholder="Message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className={`${inputStyle} h-[200px]`}
                        ></textarea>
                        <div className="flex justify-between">
                            {<button onClick={prevStep} className={paginationStyle}>Previous</button>}
                            {<button onClick={nextStep} className={paginationStyle}>Next</button>}
                        </div>

                    </div>
                )
            case 4:
                return (
                    <div className={sectionStyle}>
                        <label className="mb-4 font-bold">How did you hear about us?</label>
                        <label className={`group ${radioLabelStyle} ${formData.heardAboutUs === 'Online' ? "bg-metallicorange" : ""}`}>
                            <input
                                type="radio"
                                name="heardAboutUs"
                                value="Online"
                                checked={formData.heardAboutUs === 'Online'}
                                onChange={(e) => setFormData({ ...formData, heardAboutUs: e.target.value })}
                                className={`${radioInputStyle}`}
                            />
                            Online Search
                        </label>
                        <label className={`group ${radioLabelStyle} ${formData.heardAboutUs === 'Advertisement' ? "bg-metallicorange" : ""}`}>
                            <input
                                type="radio"
                                name="heardAboutUs"
                                value="Advertisement"
                                checked={formData.heardAboutUs === 'Advertisement'}
                                onChange={(e) => setFormData({ ...formData, heardAboutUs: e.target.value })}
                                className={`${radioInputStyle}`}
                            />
                            Advertisement
                        </label>
                        <label className={`group ${radioLabelStyle} ${formData.heardAboutUs === 'Word' ? "bg-metallicorange" : ""}`}>
                            <input
                                type="radio"
                                name="heardAboutUs"
                                value="Word"
                                checked={formData.heardAboutUs === 'Word'}
                                onChange={(e) => setFormData({ ...formData, heardAboutUs: e.target.value })}
                                className={`${radioInputStyle}`}
                            />
                            Word of Mouth
                        </label>
                        {/* temporary onClick for prototyping */}
                        <button onClick={() => { setStep(11); }} className={buttonStyle}>Submit</button>
                        <div className="flex justify-between">
                            {<button onClick={prevStep} className={paginationStyle}>Previous</button>}
                        </div>
                    </div>
                )
            case 5:
                return (
                    <div className={sectionStyle}>
                        <h2 className="mb-4 font-bold">Select the service you are interested in</h2>
                        <div className="flex flex-col space-y-2">
                            <label className={`group ${radioLabelStyle} ${formData.serviceType === 'Industrial' ? 'bg-metallicorange' : ""}`}>
                                <input
                                    type="radio"
                                    name="serviceType"
                                    value="Industrial"
                                    checked={formData.serviceType === 'Industrial'}
                                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                                    className={`${radioInputStyle}`}
                                />
                                Industrial
                            </label>
                            <label className={`group ${radioLabelStyle} ${formData.serviceType === 'Heavy Industrial' ? 'bg-metallicorange' : ""}`}>
                                <input
                                    type="radio"
                                    name="serviceType"
                                    value="Heavy Industrial"
                                    checked={formData.serviceType === 'Heavy Industrial'}
                                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                                    className={`${radioInputStyle}`}
                                />
                                Heavy Industrial
                            </label>
                            <label className={`group ${radioLabelStyle} ${formData.serviceType === 'Commercial' ? 'bg-metallicorange' : ""}`}>
                                <input
                                    type="radio"
                                    name="serviceType"
                                    value="Commercial"
                                    checked={formData.serviceType === 'Commercial'}
                                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                                    className={`${radioInputStyle}`}
                                />
                                Commercial
                            </label>
                            <label className={`group ${radioLabelStyle} ${formData.serviceType === 'Repairs' ? "bg-metallicorange" : ""}`}>
                                <input
                                    type="radio"
                                    name="serviceType"
                                    value="Repairs"
                                    checked={formData.serviceType === 'Repairs'}
                                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                                    className={`${radioInputStyle}`}
                                />
                                Repairs
                            </label>
                            <label className={`group ${radioLabelStyle} ${formData.serviceType === 'Maintenance' ? "bg-metallicorange" : ""}`}>
                                <input
                                    type="radio"
                                    name="serviceType"
                                    value="Maintenance"
                                    checked={formData.serviceType === 'Maintenance'}
                                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                                    className={`${radioInputStyle}`}
                                />
                                Maintenance
                            </label>
                            <label className={`group ${radioLabelStyle} ${formData.serviceType === 'Other' ? "bg-metallicorange" : ""}`}>
                                <input
                                    type="radio"
                                    name="serviceType"
                                    value="Other"
                                    checked={formData.serviceType === 'Other'}
                                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                                    className={`${radioInputStyle}`}
                                />
                                Other
                            </label>
                        </div>
                        <div className="flex justify-between">
                            {<button onClick={prevStep} className={paginationStyle}>Previous</button>}
                            {<button onClick={nextStep} className={paginationStyle}>Next</button>}
                        </div>
                    </div>
                )
            case 6:
                return (
                    <div className={sectionStyle}>
                        <h2 className="mb-4 font-bold">Describe your project / desired work</h2>

                        <textarea
                            placeholder="Project/work description"
                            value={formData.projectDescription}
                            onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                            className={`${inputStyle} h-[200px]`}
                        ></textarea>
                        <div className="flex justify-between">
                            {<button onClick={prevStep} className={paginationStyle}>Previous</button>}
                            {<button onClick={nextStep} className={paginationStyle}>Next</button>}
                        </div>
                    </div>
                )
            case 7:
                return (
                    <div className={sectionStyle}>
                        <h2 className="mb-4 font-bold">When do you need it done by?</h2>

                        <input
                            type="text"
                            placeholder="Project date"
                            value={formData.projectDate}
                            onChange={(e) => setFormData({ ...formData, projectDate: e.target.value })}
                            className={inputStyle}
                        />
                        <div className="flex justify-between">
                            {<button onClick={prevStep} className={paginationStyle}>Previous</button>}
                            {<button onClick={nextStep} className={paginationStyle}>Next</button>}
                        </div>
                    </div>
                )
            case 8:
                return (
                    <div className={sectionStyle}>
                        <h2 className="mb-4 font-bold">Where is the project/work located?</h2>

                        <input
                            type="text"
                            placeholder="Project location"
                            value={formData.projectLocation}
                            onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                            className={inputStyle}
                        />
                        <div className="flex justify-between">
                            {<button onClick={prevStep} className={paginationStyle}>Previous</button>}
                            {<button onClick={nextStep} className={paginationStyle}>Next</button>}
                        </div>
                    </div>
                )
            case 9:
                return (
                    <div className={sectionStyle}>
                        <h2 className="mb-4 font-bold">Your details</h2>

                        <input
                            type="text"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={inputStyle}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={inputStyle}
                        />
                        <div className="flex justify-between">
                            {<button onClick={prevStep} className={paginationStyle}>Previous</button>}
                            {<button onClick={nextStep} className={paginationStyle}>Next</button>}
                        </div>
                    </div>
                )
            case 10:
                return (
                    <div className={sectionStyle}>
                        <h2 className="mb-4 font-bold">How did you hear about us?</h2>
                        <label className={`group ${radioLabelStyle} ${formData.heardAboutUs === 'Online' ? "bg-metallicorange" : ""}`}>
                            <input
                                type="radio"
                                name="heardAboutUs"
                                value="Online"
                                checked={formData.heardAboutUs === 'Online'}
                                onChange={(e) => setFormData({ ...formData, heardAboutUs: e.target.value })}
                                className={`${radioInputStyle}`}
                            />
                            Online Search
                        </label>
                        <label className={`group ${radioLabelStyle} ${formData.heardAboutUs === 'Advertisement' ? "bg-metallicorange" : ""}`}>
                            <input
                                type="radio"
                                name="heardAboutUs"
                                value="Advertisement"
                                checked={formData.heardAboutUs === 'Advertisement'}
                                onChange={(e) => setFormData({ ...formData, heardAboutUs: e.target.value })}
                                className={`${radioInputStyle}`}
                            />
                            Advertisement
                        </label>
                        <label className={`group ${radioLabelStyle} ${formData.heardAboutUs === 'Word' ? "bg-metallicorange" : ""}`}>
                            <input
                                type="radio"
                                name="heardAboutUs"
                                value="Word"
                                checked={formData.heardAboutUs === 'Word'}
                                onChange={(e) => setFormData({ ...formData, heardAboutUs: e.target.value })}
                                className={`${radioInputStyle}`}
                            />
                            Word of Mouth
                        </label>
                        {/* temporary onClick for prototyping */}
                        <button onClick={() => { setStep(11); }} className={buttonStyle}>Submit</button>
                        <div className="flex justify-between">
                            {<button onClick={prevStep} className={paginationStyle}>Previous</button>}
                        </div>
                    </div>
                )
            case 11:
                return (
                    <div className={sectionStyle}>
                        <h2 className="mb-4 font-bold">Thanks for contacting us! <br />Keep an eye out for our reply soon.</h2>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div>
            {renderForm()}
        </div>
    )
}
