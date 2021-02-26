import { ReactElement, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import styles from '../styles/components/AnimatedLogo.module.scss';

interface Props {}

function AnimatedLogo(): ReactElement<Props> {
  const solidBackgroundAnim = useAnimation();
  const gradientBackgroundAnim = useAnimation();
  const initialsAnims = {
    p: useAnimation(),
    k: useAnimation(),
  };
  const fullNameAnim = useAnimation();
  const [toggle, setToggle] = useState(false);

  const controls = {
    solidBackground: async () => {
      await solidBackgroundAnim.start({
        scale: [1, 1, 1.3, 1.3, 1],
        opacity: [0.2, 1, 1, 1, 1],

        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['10%', '10%', '50%', '40%', '30%', '8px'],
        transition: { duration: 2 },
      });

      await solidBackgroundAnim.start({
        width: '200px',
        transition: { duration: 1 },
      });
    },

    gradientBackground: async () => {
      await gradientBackgroundAnim.start({
        scale: [1, 1, 1.3, 1.3, 1],
        opacity: [0.2, 1, 1, 1, 1],

        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['10%', '10%', '50%', '40%', '30%', '8px'],
        transition: { duration: 2 },
      });

      await gradientBackgroundAnim.start({
        width: '208px',
        transition: { duration: 1 },
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
    },
  };

  useEffect(() => {
    controls.solidBackground();
    controls.gradientBackground();
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
      {/* <h1 className={styles.nameFull}>pedro klepa</h1> */}

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
