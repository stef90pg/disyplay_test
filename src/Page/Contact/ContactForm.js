import React, { useEffect, useState } from 'react';
import InputText from '../../Components/Inputs/InputText';
import InputEmail from '../../Components/Inputs/InputEmail';
import Textarea from '../../Components/Inputs/Textarea';
import ButtonGreen from '../../Components/Inputs/ButtonGreen';
import { fetchSendMessage } from '../../store/Contact/contact-action';

let isInitial = true;

const ContactForm = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  });
  const [sendMess, setSendMess] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  });
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const validation = (resolve, reject) => {
    let formErrorsCopy = { ...formErrors };

    if (message.name.length < 3) {
      formErrorsCopy.name = 'minimum 3 caracters required';
    } else {
      formErrorsCopy.name = '';
    }

    if (!emailRegex.test(message.email)) {
      formErrorsCopy.email = 'Invalid email address';
    } else {
      formErrorsCopy.email = '';
    }

    if (message.subject.length < 3) {
      formErrorsCopy.subject = 'minimum 3 caracters required';
    } else {
      formErrorsCopy.subject = '';
    }

    if (message.body.length > 1000) {
      formErrorsCopy.body = 'max 1000 caracters required';
    } else {
      formErrorsCopy.body = '';
    }

    setFormErrors({ ...formErrorsCopy });
  };

  const messageReq = (data) => {
    // fetch('http://localhost:3000/message', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })

    fetchSendMessage(data)
      .then((response) => {
        setSendMess(true);
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    validation();
  };

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const data = {
      name: message.name,
      email: message.email,
      subject: message.subject,
      body: message.body,
    };
    if (
      formErrors.name.length == '' &&
      formErrors.email.length == '' &&
      formErrors.subject.length == '' &&
      formErrors.body.length == ''
    ) {
      messageReq(data);
    }
  }, [formErrors]);
  return (
    <>
      <div className="contac-form">
        <form
          style={{
            display: sendMess === false ? 'block' : 'none',
          }}
          onSubmit={handleSubmit}
          noValidate
        >
          <InputText
            name={'name'}
            placeholder={'Name'}
            value={message.name}
            onChange={handleChange}
            error={formErrors.name}
          />
          <InputEmail
            name={'email'}
            value={message.email}
            onChange={handleChange}
            error={formErrors.email}
          />
          <InputText
            name={'subject'}
            placeholder={'Subject'}
            value={message.subject}
            onChange={handleChange}
            error={formErrors.subject}
          />
          <Textarea
            name={'body'}
            value={message.body}
            onChange={handleChange}
            error={formErrors.subject}
          />
          <div className="createAccount">
            <ButtonGreen title="SEND MESSAGE" />
          </div>
        </form>
        <div
          style={{
            display: sendMess === true ? 'block' : 'none',
          }}
        >
          <h2 style={{ color: '#2ecc71' }}>Poruka je uspjesno poslata!!!</h2>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
