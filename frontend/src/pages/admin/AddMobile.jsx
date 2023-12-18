import React, { useState } from 'react'
import AdminNavbar from '../../components/AdminNavbar'
import InputFields from '../../components/InputFields'
import axios from 'axios'

export default function AddMobile() {
  const [brand,setBrand] = useState('')
  const [mobileName, setMobileName]= useState('')
  const [mobilePrice, setMobilePrice]= useState('')
  const [description, setDescription] = useState([]);
  const [image, setImage] = useState(null)
  

  const handleImageChange = (e) =>{
    const file =   e.target.files[0]
    const reader =  new FileReader()

    reader.onload =() =>{
      setImage(reader.result)
    }
    if(file){
       reader.readAsDataURL(file)
    }
  }

  const handleAddMobile = async(e) =>{
    e.preventDefault()
    const token = localStorage.getItem('authToken');
    try{
      const response = await axios.post('http://localhost:4000/add_new_mobile', {brand, mobileName, mobilePrice, description, mobileImage:image}, {headers: {Authorization: `Bearer ${token}`}})
      console.log(response)
      if(response.data.message==='Saved successfull'){
        alert('Mobile added successfully!')
      }
    }
    catch(error){ 
      console.error(error.response.data)
      alert(error.response.data.message)
    }
  }
  return (
    <div>
      <AdminNavbar/>
      <div className='flex justify-center my-10 '>
        <div className=' w-[800px]  p-10 bg-slate-100 items-center rounded-3xl shadow-xl'>
          <div className='flex justify-center'>
            <h3 className='text-2xl font-bold text-blue-900'>Add Mobile</h3>
          </div>
          <form onSubmit={handleAddMobile}>
            <InputFields labelName='Brand' inputType='text' name='brand' onChangeName={setBrand}/>
            <InputFields labelName='Mobile Name' inputType='text' name='mobileName' onChangeName={setMobileName}/>
            <InputFields labelName='Mobile Price' inputType='number' name='mobilePrice' onChangeName={setMobilePrice}/>
            <div className="flex items-center justify-between my-8">
              <label className="font-semibold">Mobile Image</label>
              <div className="flex items-center w-[500px] border">
                <input type="file" id="imageInput" accept="image/*" onChange={handleImageChange} className="w-full p-2 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600" />
              </div>
            </div>
            <div className='my-4'>
              <label className='font-semibold'>Description</label>
              <textarea
                className='w-full p-2 border rounded-md'
                required
                rows='5'
                value={description.join('\n')}
                onChange={(e) => setDescription(e.target.value.split('\n'))}
              />
            </div>
            <div className='flex justify-center h-12 text-lg text-white'>
              <button className='w-[220px] bg-blue-500 border rounded-full hover:bg-blue-600'>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
