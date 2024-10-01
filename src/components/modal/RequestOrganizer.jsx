import PropTypes from 'prop-types'
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogTitle,
    DialogPanel,
} from '@headlessui/react'
import { Fragment } from 'react'
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from "react-icons/tb";


const RequestOrganizer = ({ closeModal, isOpen, modalHandler }) => {
    const successfullyRequest = ()=> toast.success('Please Wait for Admin Approval!')
    const errorRequest = ()=> toast.error('You have already requestd!')
    const errorEmptyField = ()=> toast.error('Empty Field is Not Allowed!')

    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const phoneNumber = form.phoneNumber.value;
        const education = form.education.value;
        const skills = form.skills.value;
        const age = form.age.value;
        const experience = form.experience.value;
        const reviews = [];

    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25  ' />
                </TransitionChild>
              
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Become A Tour Guide!
                                </DialogTitle>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Please fillup all the input fields before becoming a
                                        Tour Guide.
                                    </p>
                                </div>
                                <hr className='mt-8 ' />

                                <form onSubmit={handleSubmit} >
                                    <label className="block mb-3">
                                        <span className="mb-1">Phone Number</span>
                                        <input type="number" placeholder="Your Phone Number" name='phoneNumber' className="block w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100 " />
                                    </label>

                                    <label className="block mb-3">
                                        <span className="mb-1">Education</span>
                                        <input type="text" placeholder="HSC" name='education' className="block w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100 " />
                                    </label>

                                    <label className="block mb-3">
                                        <span className="mb-1">Skills</span>
                                        <input type="text" placeholder="Driving" name='skills' className="block w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100 " />
                                    </label>

                                    <label className="block mb-3">
                                        <span className="mb-1">Your Age</span>
                                        <input type="text" placeholder="Your age" name='age'  className="block w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100 " />
                                    </label>
                                    <label className="block mb-3">
                                        <span className="mb-1">Work Experience</span>
                                        <input type="text" placeholder="3 Years" name='experience' className="block w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100 " />
                                    </label>

                                    <hr className='mb-8 ' />
                                    <div className='flex mt-2 justify-around'>
                                        <button
                                            type='submit'
                                            onClick={modalHandler}
                                            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                                        >
                                            {/* {loading ? <TbFidgetSpinner className='animate-spin m-auto' /> : 'Continue'} */}
                                             <TbFidgetSpinner className='animate-spin m-auto' /> 
                                        </button>
                                        <button
                                            type='button'
                                            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>


                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}


export default RequestOrganizer;