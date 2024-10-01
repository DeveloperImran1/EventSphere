'use client'
import './Style.css';
import './Buutton.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from "@radix-ui/react-dialog";

export default function AnimatedFormModal({modalOpen, setModalOpen}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="relative w-full  flex flex-col justify-start items-center p-8 bg-gradient-to-br from-purple-400 to-indigo-600">
    //   {/* Modal Button aligned to the top */}
    //   {/* <motion.button
    //     whileHover={{ scale: 1.05 }}
    //     whileTap={{ scale: 0.95 }}
    //     className=" w-40 bg-white rounded-full text-purple-600 font-bold text-lg shadow-lg"
    //     onClick={() => setIsOpen(true)}
    //   >
    //     <motion.span
    //       className="relative z-10"
    //       initial={{ y: 0 }}
    //       whileHover={{ y: -20 }}
    //     >
    //       Open Form 
    //     </motion.span>
    //     <motion.div
    //       className="absolute inset-0 z-0"
    //       initial={{ scale: 0, opacity: 0 }}
    //       whileHover={{ scale: 1, opacity: 1 }}
    //       transition={{ duration: 0.3 }}
    //       style={{
    //         background: 'linear-gradient(45deg, #8B5CF6, #3B82F6)',
    //       }}
    //     />
    //   </motion.button> */}


    // </div>

    <AnimatePresence>
    {modalOpen && (
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        {/* Modal Content: full width and height */}
        <DialogContent className="  bg-transparent border-none shadow-none flex items-center justify-center my-16">
          <motion.div
            initial={{ scale: 0, borderRadius: "100%" }}
            animate={{ scale: 1, borderRadius: "12px" }}
            exit={{ scale: 0, borderRadius: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full bg-white  relative overflow-auto"
          >
            <div className='wrapper'>
              <section>
                <div className="form-box py-6">
                  <div className="form-value">
                    <form>
                      <p className='text-center text-2xl py-2 border-b-2 font-semibold border-purple-300 font-serif text-black'>
                        Request to Be an Organizer
                      </p>

                      <div className="inputbox">
                        <ion-icon name="business-outline"></ion-icon>
                        <input type="text" className='border-2' required />
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
  );
}
