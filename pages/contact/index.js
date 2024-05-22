// components
import Circles from '/components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

// React hooks
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch('https://formsubmit.co/5233df00235aa4eb854690088f878d30', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Success:', await response.json());
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form data
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };


  return (
    <div className='h-full bg-primary/30'>
      <Circles />

      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit} // Add onSubmit handler
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input 
              type='text' 
              name='name' 
              placeholder='name' 
              required 
              className='input' 
              value={formData.name}
              onChange={handleChange} // Add onChange handler
            />
              <input 
              type='email' 
              name='email'
              placeholder='email' 
              required 
              className='input' 
              value={formData.email}
              onChange={handleChange} // Add onChange handler
            />
            </div>
            <input 
            type='text' 
            name='subject'
            placeholder='subject' 
            className='input'
            value={formData.subject}
            onChange={handleChange} // Add onChange handler 
            />
            <textarea 
            name='message'
            placeholder='message' 
            required 
            className='textarea'
            value={formData.message}
            onChange={handleChange} // Add onChange handler
            ></textarea>
            <button 
            type='submit' // Add type='submit'
            className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
