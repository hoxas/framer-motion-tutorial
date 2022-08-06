import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
  },
};

const modalVariants = {
  initial: {
    y: "100vh",
    opacity: 0,
  },
  final: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="initial"
          animate="final"
          exit="initial"
        >
          <motion.div
            className="modal"
            variants={modalVariants}
            initial="initial"
            animate="final"
          >
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button onClick={() => setShowModal(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
