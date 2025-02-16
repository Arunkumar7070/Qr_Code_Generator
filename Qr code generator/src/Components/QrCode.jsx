import React, { useState } from 'react'

export const QrCode = () => {
  const [img, setImg] = useState("qrcode.png")
  const [loading, setloading] = useState(false)
  const [qrdata, setQrdata] = useState("https://www.google.com/")
  const [size, setSize] = useState(200)

  async function generateQrCode() {
    setloading(true)
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrdata)}`
      setImg(url)
    } catch (error) {
      console.error("Error generating QR code:", error)
    } finally {
      setloading(false)
    }
  }

  function downloadQrCode() {
    fetch(img).then((response) => response.blob()).then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "grcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
      .catch((error) => {
        console.error("Error downloading QR code", error)
      })
  }

  return (
    <div className='app_container'>
      <h1>QR CODE GENERATOR</h1>
      {img && <img src={img} className='qr_code_image' />}
      {loading && <p>please wait ...</p>}
      <div>
        <label htmlFor='dataInput' className='input_label'>
          Data for QR code
        </label>
        <input type='text' id='dataInput' value={qrdata} onChange={(e) => { setQrdata(e.target.value) }} />
        <label htmlFor='sizeInput' className='input_label'>
          Enter the size of the QR code
        </label>
        <input type='text' id='sizeInput' value={size} onChange={(e) => { setSize(e.target.value) }} />
        <button className='generate_btn' onClick={() => { generateQrCode() }} disabled={loading}> Generate QR code</button>
        <button className='download_btn' onClick={() => { downloadQrCode() }}>Download QR code</button>
      </div>
      <p className='footer'> Designed by Arunkumar</p>
    </div>
  )
}

export default QrCode