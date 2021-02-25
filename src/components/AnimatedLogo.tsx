import { ReactElement } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles/components/AnimatedLogo.module.scss';

interface Props {}

function AnimatedLogo(): ReactElement<Props> {
  return (
    <div className={styles.logoContainer}>
      <h1>pk</h1>

      <motion.div
        animate={{
          scale: [1, 1, 1.5, 1.5, 1],
          opacity: [0.2, 1, 1, 1, 1],

          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['10%', '10%', '50%', '40%', '30%', '10%'],
        }}
        transition={{ duration: 2 }}
        className={styles.solidBackground}
      />

      <motion.div
        animate={{
          opacity: [0.2, 1, 1, 1, 1],

          scale: [1, 1, 1.5, 1.5, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['10%', '10%', '50%', '40%', '30%', '10%'],
        }}
        transition={{ duration: 2 }}
        className={styles.gradientBackground}
      />
    </div>
  );
}

export default AnimatedLogo;
