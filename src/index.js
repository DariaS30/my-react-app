import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Імпорт кореневого компонента додатку

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // Рендеринг кореневого компонента додатку в DOM
);
