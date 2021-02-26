import { ReactElement, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import styles from '../styles/components/AnimatedLogo.module.scss';

interface Props {}

function AnimatedLogo(): ReactElement<Props> {
  let solidBackgroundAnim = useAnimation();
  let gradientBackgroundAnim = useAnimation();
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
  };

  useEffect(() => {
    controls.solidBackground();
    controls.gradientBackground();
  }, []);

  return (
    <motion.div
      animate={{ width: '200px' }}
      transition={{ duration: 1, delay: 2 }}
      className={styles.logoContainer}
    >
      <h1>pk</h1>

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
