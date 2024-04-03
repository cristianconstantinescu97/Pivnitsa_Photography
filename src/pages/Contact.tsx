import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';
import Select from 'react-select';
import React, { useEffect, useState, useRef  } from 'react';
import countryList from 'react-select-country-list';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const serviceId = 'service_s5etb7c';
    const templateId = 'template_x2adjes';
    const publicKey = 'MHLCFMz_B7lFxDCeJ';

    const options = React.useMemo(() => countryList().getData(), []);
    const [isMounted, setIsMounted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        setIsMounted(true);
      }, []);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        emailjs.sendForm(serviceId, templateId, form, publicKey)
            .then((result) => {
                toast.success('Sent successfully!', {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                if (formRef.current !== null) {
                    formRef.current.reset();
                }
            }, (error) => {
                toast.error('Failed to send. Please try again later.', {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
            });
    };

    return (
        <Layout>
          <ToastContainer />
          <div className={styles.contactContainer}>
            <h1 className={styles.contactTitle}>Get in touch</h1>
            <div className={styles.formContainer}>
              <form ref={formRef} onSubmit={sendEmail} className={styles.contactForm}>
                <div className={styles.formRow}>
                  <input type="text" name="user_name" placeholder="Name *" required className={styles.formInput} />
                  <input type="email" name="user_email" placeholder="Email *" required className={styles.formInput} />
                </div>
                <div className={styles.formRow}>
                  <input type="tel" name="user_phonenumber" placeholder="Phone Number *" className={styles.formInput} />
                  {}
                  {isMounted && (
                    <Select
                      name="user_country"
                      options={options}
                      className={styles.formInput}
                      placeholder="Country *"
                    />
                  )}
                </div>
                <textarea name="user_message" placeholder="Message *" required className={styles.formMessage} />
                <button type="submit" className={styles.formSubmit}>Send</button>
              </form>
            </div>
          </div>
        </Layout>
      );
};

export default Contact;