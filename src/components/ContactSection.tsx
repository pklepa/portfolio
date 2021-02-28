import React, { ReactElement } from 'react';

import styles from '../styles/components/ContactSection.module.scss';
import SectionHeader from './SectionHeader';

interface Props {}

function ContactSection({}: Props): ReactElement {
  function textAreaAdjust({ target }) {
    target.style.height = '1px';
    target.style.height = 16 + target.scrollHeight + 'px';
  }

  return (
    <div className={styles.container}>
      <SectionHeader title="Contact" alignRight={false} />

      <div className={styles.form}>
        <p className={styles.formIntro}>
          Leave a message and I'll get back to you in 1 or 2 working days.
        </p>

        <div className={styles.inputWrapper}>
          <input
            type="input"
            className={styles.form__field}
            placeholder="Name"
            name="name"
            id="name"
            required
          />
          <label htmlFor="name" className={styles.form__label}>
            Name
          </label>
        </div>

        <div className={styles.inputWrapper}>
          <input
            type="input"
            className={styles.form__field}
            placeholder="E-mail"
            name="email"
            id="email"
            required
          />
          <label htmlFor="email" className={styles.form__label}>
            E-mail
          </label>
        </div>

        <div className={styles.inputWrapper}>
          <textarea
            onKeyDown={textAreaAdjust}
            className={styles.form__field}
            placeholder="Type here your message"
            name="message"
            id="message"
            required
          />
          <label htmlFor="message" className={styles.form__label}>
            Message
          </label>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
