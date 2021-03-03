import React, { ReactElement } from 'react';
import styles from '../styles/components/SkillTag.module.scss';
import { iconMap } from '../utils/iconMap.js';

interface Props {
  skillName: string;
}

function SkillTag({ skillName }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <img src={`/icons/${iconMap[skillName]}`} alt="" />
      <span>{skillName}</span>
    </div>
  );
}

export default SkillTag;
