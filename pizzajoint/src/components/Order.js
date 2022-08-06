import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childrenVariants = {
  initial: { opacity: 0 },
  final: { opacity: 1 },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 6000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childrenVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div key={topping} variants={childrenVariants}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
