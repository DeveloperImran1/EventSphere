// import React from 'react';



// const BeOrganiger = () => {
//     return (
//         <div className=''>
                 
//             <div className="wrapper">
              
//                 <section>
              
//                     <div className="form-box  py-14 ">

            

//                         <div className="form-value">
                        
//                             <form>
//                              <p className='text-center text-2xl py-2 border-b-2 font-semibold  border-purple-300  font-serif text-black '    >Request to Be an Organizer</p>

//                                 {/* Company Name Field */}
//                                 <div className="inputbox">
//                                     <ion-icon name="business-outline"></ion-icon>
//                                     <input type="text" required />
//                                     <label>Company Name</label>
//                                 </div>

//                                 {/* Location Field */}
//                                 <div className="inputbox">
//                                     <ion-icon name="location-outline"></ion-icon>
//                                     <input type="text" required />
//                                     <label>Location</label>
//                                 </div>

//                                 {/* Website Field */}
//                                 <div className="inputbox">
//                                     <ion-icon name="globe-outline"></ion-icon>
//                                     <input type="url"  required />
//                                     <label>Website</label>
//                                 </div>

//                                 {/* Phone Field */}
//                                 <div className="inputbox">
//                                     <ion-icon name="call-outline"></ion-icon>
//                                     <input type="tel" required />
//                                     <label>Phone</label>
//                                 </div>
//                                 {/* Category Field */}
//                                 <div className="inputbox">
//   <ion-icon name="list-outline"></ion-icon>
//   <select className="custom-select" required>
//     <option  disabled  value="">Select Category</option>
//     <option value="conference">Conference</option>
//     <option value="workshop">Workshop</option>
//     <option value="seminar">Seminar</option>
//     <option value="webinar">Webinar</option>
//     <option value="exhibition">Exhibition</option>
//     <option value="festival">Festival</option>
//   </select>
// </div>

//                                 {/* Short Description Field */}
//                                 <div className="inputbox">
//                                     <ion-icon name="document-text-outline"></ion-icon>
//                                     <textarea required></textarea>
//                                     <label>Short Description</label>
//                                 </div>



//                                 {/* Submit Button */}
//                                 {/* <button type="submit">Submit Request</button> */}
//                                 <div className='flex justify-center' >
//                                 <button  type="submit" class="buutton  mt-6  ">
//                                     <div class=""></div>
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 342 208" height="208" width="342" class="splash">
//                                         <path stroke-linecap="round" stroke-width="3" d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362"></path>
//                                         <path stroke-linecap="round" stroke-width="3" d="M285.273 99.7841C285.273 99.7841 299.28 90.7879 312.689 97.6367C326.098 104.486 340.105 95.4893 340.105 95.4893"></path>
//                                         <path stroke-linecap="round" stroke-width="3" stroke-opacity="0.3" d="M281.133 64.9917C281.133 64.9917 287.96 49.8089 302.934 48.2295C317.908 46.6501 319.712 36.5272 319.712 36.5272"></path>
//                                         <path stroke-linecap="round" stroke-width="3" stroke-opacity="0.3" d="M281.133 138.984C281.133 138.984 287.96 154.167 302.934 155.746C317.908 157.326 319.712 167.449 319.712 167.449"></path>
//                                         <path stroke-linecap="round" stroke-width="3" d="M230.578 57.4476C230.578 57.4476 225.785 41.5051 236.061 30.4998C246.337 19.4945 244.686 12.9998 244.686 12.9998"></path>
//                                         <path stroke-linecap="round" stroke-width="3" d="M230.578 150.528C230.578 150.528 225.785 166.471 236.061 177.476C246.337 188.481 244.686 194.976 244.686 194.976"></path>
//                                         <path stroke-linecap="round" stroke-width="3" stroke-opacity="0.3" d="M170.392 57.0278C170.392 57.0278 173.89 42.1322 169.571 29.54C165.252 16.9478 168.751 2.05227 168.751 2.05227"></path>
//                                         <path stroke-linecap="round" stroke-width="3" stroke-opacity="0.3" d="M170.392 150.948C170.392 150.948 173.89 165.844 169.571 178.436C165.252 191.028 168.751 205.924 168.751 205.924"></path>
//                                         <path stroke-linecap="round" stroke-width="3" d="M112.609 57.4476C112.609 57.4476 117.401 41.5051 107.125 30.4998C96.8492 19.4945 98.5 12.9998 98.5 12.9998"></path>
//                                         <path stroke-linecap="round" stroke-width="3" d="M112.609 150.528C112.609 150.528 117.401 166.471 107.125 177.476C96.8492 188.481 98.5 194.976 98.5 194.976"></path>
//                                         <path stroke-linecap="round" stroke-width="3" stroke-opacity="0.3" d="M62.2941 64.9917C62.2941 64.9917 55.4671 49.8089 40.4932 48.2295C25.5194 46.6501 23.7159 36.5272 23.7159 36.5272"></path>
//                                         <path stroke-linecap="round" stroke-width="3" stroke-opacity="0.3" d="M62.2941 145.984C62.2941 145.984 55.4671 161.167 40.4932 162.746C25.5194 164.326 23.7159 174.449 23.7159 174.449"></path>
//                                     </svg>

//                                     <div class="wrap">
//                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 221 42" height="42" width="221" class="path">
//                                             <path stroke-linecap="round" stroke-width="3" d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"></path>
//                                         </svg>

//                                         <div class="outline"></div>
//                                         <div class="content">
//                                             <span class="char state-1">
//                                                 <span data-label="J" Button="--i: 1">J</span>
//                                                 <span data-label="o" Button="--i: 2">o</span>
//                                                 <span data-label="i" Button="--i: 3">i</span>
//                                                 <span data-label="n" Button="--i: 4">n</span>
//                                                 <span data-label="T" Button="--i: 5">T</span>
//                                                 <span data-label="o" Button="--i: 6">o</span>
//                                                 <span data-label="d" Button="--i: 7">d</span>
//                                                 <span data-label="a" Button="--i: 8">a</span>
//                                                 <span data-label="y" Button="--i: 9">y</span>
//                                             </span>

//                                             <div class="icon">
//                                                 <div></div>
//                                             </div>

                                          
//                                         </div>
//                                     </div>
//                                 </button>

//                                 </div>

//                             </form>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default BeOrganiger;

'use client'
import './Style.css';
import './Buutton.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from "@radix-ui/react-dialog";

export default function AnimatedFormModal({modalOpen, setModalOpen}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full  flex flex-col justify-start items-center p-8 bg-gradient-to-br from-purple-400 to-indigo-600">
      {/* Modal Button aligned to the top */}
      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className=" w-40 bg-white rounded-full text-purple-600 font-bold text-lg shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <motion.span
          className="relative z-10"
          initial={{ y: 0 }}
          whileHover={{ y: -20 }}
        >
          Open Form 
        </motion.span>
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(45deg, #8B5CF6, #3B82F6)',
          }}
        />
      </motion.button> */}

      <AnimatePresence>
        {modalOpen && (
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            {/* Modal Content: full width and height */}
            <DialogContent className=" w-full mt-4 bg-transparent border-none shadow-none flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, borderRadius: "100%" }}
                animate={{ scale: 1, borderRadius: "12px" }}
                exit={{ scale: 0, borderRadius: "100%" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-white p-6 relative overflow-auto"
              >
                <div className='wrapper'>
                  <section>
                    <div className="form-box py-14">
                      <div className="form-value">
                        <form>
                          <p className='text-center text-2xl py-2 border-b-2 font-semibold border-purple-300 font-serif text-black'>
                            Request to Be an Organizer
                          </p>

                          <div className="inputbox">
                            <ion-icon name="business-outline"></ion-icon>
                            <input type="text" required />
                            <label>Company Name</label>
                          </div>

                          <div className="inputbox">
                            <ion-icon name="location-outline"></ion-icon>
                            <input type="text" required />
                            <label>Location</label>
                          </div>

                          <div className="inputbox">
                            <ion-icon name="globe-outline"></ion-icon>
                            <input type="url" required />
                            <label>Website</label>
                          </div>

                          <div className="inputbox">
                            <ion-icon name="call-outline"></ion-icon>
                            <input type="tel" required />
                            <label>Phone</label>
                          </div>

                          <div className="inputbox">
                            <ion-icon name="list-outline"></ion-icon>
                            <select className="custom-select" required>
                              <option disabled selected value="">Select Category</option>
                              <option value="conference">Conference</option>
                              <option value="workshop">Workshop</option>
                              <option value="seminar">Seminar</option>
                              <option value="webinar">Webinar</option>
                              <option value="exhibition">Exhibition</option>
                              <option value="festival">Festival</option>
                            </select>
                          </div>

                          <div className="inputbox">
                            <ion-icon name="document-text-outline"></ion-icon>
                            <textarea required></textarea>
                            <label>Short Description</label>
                          </div>

                          <div className='flex justify-center'>
                            <button type="submit" className="buutton mt-6">
                              <div></div>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 342 208" height="208" width="342" className="splash">
                                {/* Add SVG content here */}
                              </svg>
                              <div className="wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 221 42" height="42" width="221" className="path">
                                  {/* Add path content here */}
                                </svg>
                                <div className="outline"></div>
                                <div className="content">
                                  <span className="char state-1">
                                    <span data-label="J" style={{"--i": 1}}>J</span>
                                    <span data-label="o" style={{"--i": 2}}>o</span>
                                    <span data-label="i" style={{"--i": 3}}>i</span>
                                    <span data-label="n" style={{"--i": 4}}>n</span>
                                    <span data-label="T" style={{"--i": 5}}>T</span>
                                    <span data-label="o" style={{"--i": 6}}>o</span>
                                    <span data-label="d" style={{"--i": 7}}>d</span>
                                    <span data-label="a" style={{"--i": 8}}>a</span>
                                    <span data-label="y" style={{"--i": 9}}>y</span>
                                  </span>
                                  <div className="icon">
                                    <div></div>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
