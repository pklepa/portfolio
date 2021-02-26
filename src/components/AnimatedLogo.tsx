import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import styles from '../styles/components/AnimatedLogo.module.scss';

function AnimatedLogo() {
  const solidBackgroundAnim = useAnimation();
  const gradientBackgroundAnim = useAnimation();
  const initialsAnims = {
    p: useAnimation(),
    k: useAnimation(),
  };
  const fullNameAnim = useAnimation();

  const controls = {
    solidBackground: async () => {
      await solidBackgroundAnim.start({
        opacity: [1, 1, 1, 1, 1],
        scale: [0.1, 1, 1, 1, 1],

        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['10%', '10%', '50%', '50%', '40%', '8px'],
        transition: { duration: 2 },
      });

      await solidBackgroundAnim.start({
        width: '200px',
        transition: { duration: 1 },
      });
    },

    gradientBackground: async () => {
      await gradientBackgroundAnim.start({
        opacity: [0.2, 1, 1, 1, 1],
        scale: [1.2, 1, 1, 1, 1],

        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['10%', '10%', '50%', '50%', '40%', '8px'],
        transition: { duration: 2 },
      });

      await gradientBackgroundAnim.start({
        width: '208px',
        transition: { duration: 1 },
      });
    },

    fullName: async () => {
      await fullNameAnim.start({
        opacity: [0, 1],
        transition: { duration: 0.8, delay: 3 },
      });
    },

    initialsP: async () => {
      await initialsAnims.p.start({
        transform: [
          'translateX(-18px) translateY(-26px)',
          'translateX(-18px) translateY(-26px)',
          'translateX(-86px) translateY(-26px)',
        ],
        transition: { duration: 3, times: [0, 0.66, 1] },
      });

      await initialsAnims.p.start({
        opacity: [1, 0],
        transition: { duration: 1, delay: 0.5 },
      });
    },

    initialsK: async () => {
      await initialsAnims.k.start({
        transform: [
          'translateX(1px) translateY(-26px)',
          'translateX(1px) translateY(-26px)',
          'translateX(8px) translateY(-26px)',
        ],
        transition: { duration: 3, times: [0, 0.66, 1] },
      });

      await initialsAnims.k.start({
        opacity: [1, 0],
        transition: { duration: 1, delay: 0.5 },
      });
    },
  };

  useEffect(() => {
    controls.solidBackground();
    controls.gradientBackground();
    controls.fullName();
    controls.initialsP();
    controls.initialsK();
  }, []);

  return (
    <motion.div
      animate={{ width: '200px' }}
      transition={{ duration: 1, delay: 2 }}
      className={styles.logoContainer}
    >
      <h1 className={styles.nameInitials}>
        <motion.span animate={initialsAnims.p}>p</motion.span>
        <motion.span animate={initialsAnims.k}>k</motion.span>
      </h1>
      <motion.h1 animate={fullNameAnim} className={styles.nameFull}>
        pedro klepa
      </motion.h1>

      <motion.div
        animate={solidBackgroundAnim}
        className={styles.solidBackground}
      />

      <motion.div
        animate={gradientBackgroundAnim}
        className={styles.gradientBackground}
      />
    </motion.div>
  );
}

export default AnimatedLogo;
