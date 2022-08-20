import react ,{useState , useEffect}from 'react'
import axios from 'axios';
import './App.css';
import Header from './Component/ui/Header';
import CharacterGrid from './Component/CharacterGrid';
import Search from './Component/ui/Search';

const App =()=> {

  const[items , setItems] = useState([])
  const[isLoading , setIsLoading] = useState(true)
  const[query , setQuery] = useState('')

  useEffect(()=>{
      const fetchItems = async ()=>{
        setIsLoading(true)
        const result = await axios('https://www.breakingbadapi.com/api/characters?name'+query)
      //  console.log(result.data)
        setItems(result.data)
        setIsLoading(false)
      }
      fetchItems()
  },[query])

  return (
    <div className="App">
       <Header />
       <Search  getQuery={(q)=>setQuery(q)}/>
       <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
  }
export default App;
