'use strict';

function MessageHistory({list}) {
    console.log(list)
    const messages = list.map(
        message => {
            if (message.type === "response") {
                return <Response key={message.id} from={message.from} message={message} />
            } else if (message.type === "message") {
                return <Message key={message.id} from={message.from} message={message} />
            } else {
                return <Typing key={message.id} from={message.from} message={message} />
            }            
        }
    );
    return (
        <ul>            
            {messages}    
        </ul>
    )
}