import { ReactElement, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import styles from '../styles/components/AnimatedLogo.module.scss';

interface Props {}

function AnimatedLogo(): ReactElement<Props> {
  let solidBackgroundAnim = useAnimation();
  let gradientBackgroundAnim = useAnimation();
  const [toggle, setToggle] = useState(false);

  async function solidBackgroundAnimation() {
    await solidBackgroundAnim.start({
      scale: [1, 1, 1.5, 1.5, 1],
      opacity: [0.2, 1, 1, 1, 1],

      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['10%', '10%', '50%', '40%', '30%', '8px'],
    });

    await solidBackgroundAnim.start({
      width: '200px',
      transition: { duration: 1 },
    });
  }

  async function grandientBackgroundAnimation() {
    await gradientBackgroundAnim.start({
      scale: [1, 1, 1.5, 1.5, 1],
      opacity: [0.2, 1, 1, 1, 1],

      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['10%', '10%', '50%', '40%', '30%', '8px'],
    });

    await gradientBackgroundAnim.start({
      width: '208px',
      transition: { duration: 1 },
    });
  }

  useEffect(() => {
    solidBackgroundAnimation();
    grandientBackgroundAnimation();
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
        transition={{ duration: 2 }}
        className={styles.solidBackground}
      />

      <motion.div
        animate={gradientBackgroundAnim}
        transition={{ duration: 2 }}
        className={styles.gradientBackground}
      />
    </motion.div>
  );
}

export default AnimatedLogo;
