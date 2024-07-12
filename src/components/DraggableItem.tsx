'use client';

import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import styles from './DraggableItem.module.css';

interface DraggableItemProps {
  initialPosition: { x: number; y: number };
  polaroidSrc?: string;
  contentSrc?: string;
  imageSrc?: string;
  size?: number;
}

const DraggableCard: React.FC<DraggableItemProps> = ({ 
  initialPosition, 
  polaroidSrc, 
  contentSrc, 
  imageSrc,
  size = 300
}) => {
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    const handleResize = () => {
      setPosition(currentPosition => ({
        x: Math.min(currentPosition.x, window.innerWidth - size),
        y: Math.min(currentPosition.y, window.innerHeight - size)
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  return (
    <Draggable 
      position={position} 
      onStop={(e, data) => setPosition({ x: data.x, y: data.y })}
      bounds="parent"
    >
      <div className={styles.draggableContainer} style={{ width: `${size}px`, height: `${size}px` }}>
        {imageSrc ? (
          <div 
            className={styles.simpleImage} 
            style={{backgroundImage: `url(${imageSrc})`}}
          />
        ) : (
          <div className={styles.polaroidFrame} style={{backgroundImage: `url(${polaroidSrc})`}}>
            <div className={styles.polaroidContent} style={{backgroundImage: `url(${contentSrc})`}} />
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default DraggableCard;