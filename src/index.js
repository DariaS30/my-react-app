const React = require('react');
const ReactDOM = require('react-dom');

function Header() {
    return (
        <header className="header">
            {/* Вміст хедера */}
            <h1>Мій додаток</h1>
        </header>
    );
}

function Sidebar() {
    return (
        <aside className="sidebar">
            {/* Вміст лівої бічної навігації */}
            <ul>
                <li>Пункт 1</li>
                <li>Пункт 2</li>
                <li>Пункт 3</li>
            </ul>
        </aside>
    );
}

function MainContent() {
    return (
        <main className="main-content">
            {/* Вміст центрального контейнера */}
            <div>
                <h2>Центральний контент</h2>
                <p>Це центральний блок контенту.</p>
            </div>
        </main>
    );
}

function App() {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
