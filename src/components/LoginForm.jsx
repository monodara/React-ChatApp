import {useState} from 'react';
import axios from 'axios';

const LoginForm = ()=>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const authObject = {
            'Project-ID': "1037cc1a-ee7a-4fd5-b636-1f7cc931c85c", 
            'User-Name': userName,
            'User-Secret':password,
        }
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            //log in
            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            setError('Oops, incorrect credentials...')
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} className="input" placeholder="User Name" required/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;