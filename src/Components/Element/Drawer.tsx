import React, { Dispatch, SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface DrawerProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  children: React.ReactElement;
}

const Drawer = ({ show, setShow, children }: DrawerProps) => {
  return (
    <>
      <AnimatePresence>
        <motion.main
          key={show ? 1 : 0}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {show && (
            <div
              className=" bg-black h-screen fixed top-0 left-0 bg-opacity-30 w-[100%] flex flex-row cursor-pointer"
              onClick={() => setShow(false)}
            >
              <motion.div
                key={show ? 1 : 0}
                initial={{ opacity: 0, x: 1000 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0, x: 1000 }}
                transition={{ duration: 0.6 }}
                className="w-80 shadow-lg h-screen bg-white absolute top-0 bottom-0 right-0 z-40"
              >
                <div>{children}</div>
              </motion.div>
            </div>
          )}
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Drawer;
