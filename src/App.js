import {ChatEngine} from 'react-chat-engine';
// import { ChatFeed } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () =>{
    if(!localStorage.getItem('userName')) return <LoginForm />

    return(
        <ChatEngine
            height="100vh"
            projectID="1037cc1a-ee7a-4fd5-b636-1f7cc931c85c"
            userName={localStorage.getItem('userName')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}        
        />
    );
}

export default App;