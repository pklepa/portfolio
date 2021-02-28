import React, { ReactElement } from 'react';

import styles from '../styles/components/ContactSection.module.scss';
import Button from './Button';
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

      <div className={styles.content}>
        <form className={styles.form}>
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

          <Button text="Send" type="submit" isPrimary></Button>
        </form>

        <div className={styles.separator}>You can also</div>

        <div className={styles.linksContainer}>
          <div className={styles.emailWrapper}>
            <p>Write me an e-mail at:</p>
            <h1>pedro.klepa+contact@gmail.com</h1>
          </div>

          <div className={styles.separator}>Or</div>

          <div className={styles.socialMediaContainer}>
            <p>Reach me through social media:</p>

            <div>
              <a
                href="https://github.com/pklepa"
                rel="noreferrer"
                target="_blank"
                className={styles.iconWrapper}
              >
                <img src="/icons/icon_github.svg" alt="Github" />
                <img
                  className={styles.colorfulIcon}
                  src="/icons/icon_githubWhite.svg"
                  alt="Github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-klepa/"
                rel="noreferrer"
                target="_blank"
                className={styles.iconWrapper}
              >
                <img src="/icons/icon_linkedin.svg" alt="Linkedin" />
                <img
                  className={styles.colorfulIcon}
                  src="/icons/icon_linkedinColor.svg"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
