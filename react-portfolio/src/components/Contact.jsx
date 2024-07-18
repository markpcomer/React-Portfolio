// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }

    if (name === 'email' && value) {
      if (!validateEmail(value)) {
        setErrors({ ...errors, [name]: 'Invalid email address' });
      }
    }
  };

  return (
    <section className='contactContainer'>
      <h2>Contact</h2>
      <form className='contactForm'>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formState.name} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formState.email} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea 
            name="message" 
            value={formState.message} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.message && <span>{errors.message}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;


// // contact form with fields for
// // a name,
// // an email address, and
// // a message
// // WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required
// // WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address

// import React, { useState } from 'react';
// // import { useForm, ValidationError } from '@formspree/react';
// import { validateEmail } from '../utils/helpers';
// // import Navigation from './components/Navigation';
// require('dotenv').config()


// function Contact() {
//   const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);

//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (!errorMessage) {
//   //     console.log('Submit Form', formState);
//   //   }
//   // };

//   // function refreshPage() {
//   //   window.location.reload(true);
//   // }


//   if (state.succeeded) {
//     return (
//       <div>
//         <p>Thanks for reaching out!</p>
//         <button className="button is-medium is-primary is-half m-6" onClick={()=> window.open("/#contact")}>Back to About</button>
//         {/* This form button is broken. It was supposed to refresh the page so you can submit a new form, but I'm changing this bug into a feature that takes you back to the about section. */}
//       </div>
//     );
// }


//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`A ${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log('Handle Form', formState);
//     }
//   };

//   return (
//     <div>
//       <p className="content is-medium">Contact Me</p>
//       <hr />
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div className="field">
//           <label className="label" htmlFor="name">Name</label>
//           <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
//         </div>
//         <div className="field">
//           <label className="label" htmlFor="email">Email Address</label>
//           <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
//         </div>
//         <div className="field">
//           <label className="label" htmlFor="message">Message</label>
//           <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="is-danger">{errorMessage}</p>
//           </div>
//         )}
//         <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;

// // import React from "react";
// // import { useState } from 'react';

// // import { checkPassword, validateEmail } from '../utils/helpers';

// // function Form() {
// //     const [email, setEmail] = useState('');
// //     const [userName, setUserName] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [errorMessage, setErrorMessage] = useState('');

// //     const handleInputChange = (e) => {
// //         const { target } = e;
// //         const inputType = target.name;
// //         const inputValue = target.value;

// //         if (inputType === 'email') {
// //             setEmail(inputValue);
// //         } else if (inputType === 'userName') {
// //             setUserName(inputValue);
// //         } else {
// //             setPassword(inputValue);
// //         }
// //     };

// //     const handleFormSubmit = (e) => {
// //         e.preventDefault();

// //         if (!validateEmail(email) || !userName) {
// //             setErrorMessage('Email or username is invalid');
// //             return;
// //         }
// //         if (!checkPassword(password)) {
// //             setErrorMessage(`Choose a more secure password for the account: ${userName}`);
// //             return;
// //         }
// //         alert(`Hello ${userName}`);

// //         setUserName('');
// //         setPassword('');
// //         setEmail('');
// //     };

// //     return (
// //         <div className="userForm text-center">
// //             <h1>Hello ${userName}</h1>
// //             <form className="form" onSubmit={handleFormSubmit}>
// //                 <input 
// //                     type="email"
// //                     value={email}
// //                     name="email"
// //                     onChange={handleInputChange}
// //                     placeholder="email"
// //                 />
// //                 <input 
// //                     type="text"
// //                     value={userName}
// //                     name="userName"
// //                     onChange={handleInputChange}
// //                     placeholder="username"
// //                 />
// //                 <input 
// //                     type="password" 
// //                     value={password}
// //                     name="password"
// //                     onChange={handleInputChange}
// //                     placeholder="Password"
// //                 />
// //                 <button type="submit">Submit</button>
// //             </form>
// //             {errorMessage && (
// //                 <div>
// //                     <p className="error-text">{errorMessage}</p>
// //                 </div>
// //             )}
// //         </div>
// //     )
// // }

// // export default Form;
