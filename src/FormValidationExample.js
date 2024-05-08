import React, { useState } from 'react';

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Ім\'я є обов\'язковим';
    }

    if (!formData.email.trim()) {
      errors.email = 'Електронна пошта є обов\'язковою';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Введіть коректну електронну пошту';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Телефон є обов\'язковим';
    } else if (!/^\d{12}$/.test(formData.phone)) {
      errors.phone = 'Телефон повинен містити 12 цифр';
    }

    setErrors(errors);

    // Якщо форма валідна, ви можете відправити дані або виконати інші дії
    if (Object.keys(errors).length === 0) {
      // Ваш код для відправлення форми або інших дій
      console.log('Форма валідна:', formData);
    }
  };

  return (
      <div>
        <h2>Форма з валідацією</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Ім'я:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label>Електронна пошта:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label>Телефон:</label>
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            {errors.phone && <p>{errors.phone}</p>}
          </div>
          <button type="submit">Відправити</button>
        </form>
      </div>
  );
};

export default FormValidationExample;


