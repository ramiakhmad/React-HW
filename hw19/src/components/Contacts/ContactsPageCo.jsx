// Code: src/components/Contacts/ContactsPageCo.jsx
import SnapchatLogo from "/snapchat.svg";
import FacebookLogo from "/facebook.svg";
import XLogo from "/x.svg";
import styles from "./ContactsPageCo.module.css";
export default function ContactsPageCo() {
  return (
    <section className={styles.contactsSection}>
      <h1>Контакты</h1>
      <div className={styles.contactdiv}>
        <div className={styles.contactInfo}>
          <ul>
            <li>8 800 000 00 00</li>
            <li>Email: example@example.com</li>
          </ul>
          <form className={styles.contactForm}>
            <div className={styles.formTitle}>
              <input type="email" placeholder="Ваш email" required />
              <input type="text" placeholder="Ваше имя" required />
            </div>
            <div className={styles.massege}>
              <input type="text" placeholder="Сообщение" required />
            </div>
            <button type="submit">Отправить</button>
          </form>
        </div>
        <div className={styles.socialMedia}>
          <p>Найдите нас на:</p>
          <div className={styles.icons}>
            <a
              href="https://www.snapchat.com"
              target="_blank"
              rel="noopener noreferrer">
              <img src={SnapchatLogo} alt="Snapchat" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <img src={FacebookLogo} alt="Facebook" />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer">
              <img src={XLogo} alt="X" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
