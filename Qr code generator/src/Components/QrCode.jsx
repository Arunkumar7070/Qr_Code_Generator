
import React from 'react'


export const QrCode = () => {
  return (
    <div className='app_container'>
      <h1>OR CODE GENERATOR</h1>
      <img src='/' className='qr_code_image'></img>
      <div>
        <label htmlFor='dataInput' className='input_label'>
          Data for QR code
        </label>
        <input type='text' id='dataInput'/>
         <label htmlFor='sizeInput' className='input_label'>
          Enter the size of the OR code
        </label>
        <input type='text' id='sizeInput'/>
        <button className='generate_btn'> Generate QR code</button>
        <button className='download_btn'>Download QR code</button>
      </div>
    </div>
  )
}

export default QrCode
