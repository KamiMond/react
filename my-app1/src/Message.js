import './Message.css';

function Message(props) {
    return (
        <div className="Message">
            <header className="Mes-header">
                <h2>
                    Первое приложение на React
                </h2>
                <p className="Mes-props">
                    {props.title}
                </p>
            </header>
        </div>
    );
}

export default Message;