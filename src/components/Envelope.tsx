'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Envelope.module.css';

interface EnvelopeProps {
  children: React.ReactNode;
}

const Envelope: React.FC<EnvelopeProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollText, setShowScrollText] = useState(false);
  const [showSticker, setShowSticker] = useState(true);

  const openEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
      setShowSticker(false);
      setTimeout(() => setShowScrollText(true), 1000);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className={styles.dearImage}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/DEAR.png"
              alt="Dear"
              width={200}
              height={100}
              objectFit="contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.wrapper} onClick={openEnvelope}>
        <AnimatePresence>
          {showSticker && (
            <motion.div
              className={styles.sticker}
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/pixel-heart.png"
                alt="Pixel Heart Sticker"
                width={80}
                height={80}
                objectFit="contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className={`${styles.lid} ${styles.one}`}
          animate={{ rotateX: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className={`${styles.lid} ${styles.two}`}
          animate={{ rotateX: isOpen ? 180 : 90 }}
          transition={{ delay: isOpen ? 0.5 : 0, duration: 0.5 }}
        />
        <div className={styles.envelope} />
        <motion.div
          className={styles.letter}
          initial={{ y: 0, rotateX: 90 }}
          animate={{ 
            y: isOpen ? -100 : 0,
            rotateX: isOpen ? 0 : 90,
            zIndex: isOpen ? 3 : 2
          }}
          transition={{ delay: isOpen ? 0.5 : 0, duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
      {showScrollText && (
        <motion.div
          className={styles.scrollText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          SCROLL DOWN
        </motion.div>
      )}
    </div>
  );
};

export default Envelope;