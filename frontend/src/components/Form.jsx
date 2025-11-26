import React from 'react'
import { useState } from "react";
import axios from 'axios'

const url = "http://localhost:3000/api/data"
// const url = "https://onweber.ru/api/data"




export default function Form() {

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const [response, setResponse] = useState(null);

  const sendData = async () => {
    try {
      const res = await axios.post(url, {
        name: "John",
      });

      setResponse(res.data);
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };




  return (
    <div className='container form-container'>
      <form>
        Привет Гена!
        <input
          type="text"
          className='input input-name'
          name='name'
          value={form.name} 
          onChange={handleChange}
    
        />

        <input
          type="text"
          className='input input-cirname'
          name='sirname'
          value={form.sirname} 
          onChange={handleChange}
      
        />
        <button onClick={e => {
          e.preventDefault()
          sendData()
          console.log(response)
          } } className='btn form-btn'>Отправить</button>
      </form>
    </div>
  )
}

