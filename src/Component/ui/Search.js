import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const onChange =(q)=>{
        setText(q)
        getQuery(q)
    }
    const [text , setText] = useState('')
  return (
       <section className='search'>
        <form>
            <input type="text" className='form-control' placeholder='Search character' value={text} onChange={(event)=>onChange(event.target.value)} autoFocus />
        </form>
       </section>
  )
}

export default Search
