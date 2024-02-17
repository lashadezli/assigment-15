import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

const RegisterPage = () => {
  const [registrationData, setRegistrationData] = useState(null);

  const handleRegistration = (formData) => {
    console.log('Registration data in parent component:', formData);
    setRegistrationData(formData);
  };

  return (
    <div>
      {registrationData ? (
        <LoginForm initialData={registrationData} />
      ) : (
        <RegisterForm onRegistration={handleRegistration} />
      )}
    </div>
  );
};

export default RegisterPage;
