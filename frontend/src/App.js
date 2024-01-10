import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/data');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>{data.message}</h1>
        </div>
    );
}

export default App;
