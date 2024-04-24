import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Імпортуємо кореневий компонент додатка

ReactDOM.render(
    <React.StrictMode>
        <App /> {/* Відображаємо кореневий компонент додатка */}
    </React.StrictMode>,
    document.getElementById('root') // Місце в DOM, куди буде відображений додаток
);
