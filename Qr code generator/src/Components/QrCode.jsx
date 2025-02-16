
import React, { useState } from 'react'


export const QrCode = () => {
  const [img,setImg]=useState("qrcode.png")
  const [loading,setloading]=useState(false)
  async function generateQrCode(){
    setloading(true)
    try {
      
    }catch(error){;
      
    }
    finally{
      setloading(false)
    }

  }
  function downloadQrCode(){
    setloading(false)
  }
  return (
    <div className='app_container'>
      <h1>OR CODE GENERATOR</h1>
      {img && <img src={img} className='qr_code_image'/>}
      {loading && <p>please wait ...</p>}
      <div>
        <label htmlFor='dataInput' className='input_label'>
          Data for QR code
        </label>
        <input type='text' id='dataInput'/>
         <label htmlFor='sizeInput' className='input_label'>
          Enter the size of the OR code
        </label>
        <input type='text' id='sizeInput'/>
        <button className='generate_btn' onClick={() => { generateQrCode() }}> Generate QR code</button>
        <button className='download_btn' onClick={() => { downloadQrCode() }}>Download QR code</button>
      </div>
      <p className='footer'> Designed by Arunkumar</p>
    </div>
  )
}

export default QrCode
