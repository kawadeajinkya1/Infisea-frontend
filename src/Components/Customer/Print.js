import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import classes from './Print.module.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

axios.defaults.withCredentials = true;

const Print = () => {
  const { OrderID } = useParams();
  const [print, setPrint] = useState([]);

const navigate = useNavigate();
  useEffect(() => {
    const prints = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/printorder/${OrderID}`);
        setPrint(response.data);
      } catch (err) {
        console.error('Error Coming to print order', err);
      }
    };
    prints();
  }, [OrderID]);

  if (print.length === 0) {
    return <div>Loading...</div>;
  }

 
  const { name, adl1, adl2, vtc, state, pin, mobno, amno, orderdate, Total } = print[0];

  const generatePDF = () => {
    const input = document.getElementById('invoice');
    html2canvas(input, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`invoice_${OrderID}.pdf`);
    });

    navigate("/Home")
  };

  return (
    <div>
      <div id="invoice" className={classes.invoice}>
        <div>
          <center className={classes.header}>
            <h1>INFISEA</h1>
          </center>
    
          <hr />
          <div className={classes.orderInfo}>
            <div className={classes.left1}>
              <p>
               <b> <span className={classes.subtitles}>{name}</span></b>
              </p>
              <p>
                <span className={classes.subtitles}>{adl1} {adl2}</span>
              </p>
              <p>
                <span className={classes.subtitles}>{vtc} {state} {pin}</span>
              </p>
              <p>
                <span className={classes.subtitles}>Mobile No: {mobno}</span>
              </p>
              <p>
                <span className={classes.subtitles}>Alternate No: {amno}</span>
              </p>
            </div>
            <div className={classes.left2}>
              <p>
                <span className={classes.subtitles}>Order ID: {OrderID}</span>
              </p>
              <p>
                <span className={classes.subtitles}>{orderdate}</span>
              </p>
            </div>
            <div className={classes.left3}>
              <p>
                <span className={classes.subtitles}>Keep This Invoice And Manufacturer Box For Warranty Purpose</span>
              </p>
              <p>
                <span className={classes.subtitles}>support@infisea.com</span>
              </p>
              <p>
                <span className={classes.subtitles}>GSTIN: 12458DE54687</span>
              </p>
              <p>
                <span className={classes.subtitles}>Pan no: desde5481</span>
              </p>
            </div>
                 
          </div>
      <hr style={{ marginTop: '-2.2rem' }} />
      <p><b>Product Details :</b></p>
        </div>
        <div>
          <br />
          <table className={classes.table}>
            <thead className={classes.thead}>
              <tr>
                <th className={classes.th}>Product Name</th>
                <th className={classes.th}>Product Id</th>
                <th className={classes.th}>Base Price</th>
                <th className={classes.th}>Delivery Charges</th>
                <th className={classes.th}>Tax</th>
                <th className={classes.th}>Sum</th>
                <th className={classes.th}>Quantity</th>
                <th className={classes.th}>Price</th>
              </tr>
            </thead>
            <tbody>
              {print.map((products) => (
                <tr key={products.CategoryID}>
                  <td className={classes.td}>{products.ProductName}</td>
                  <td className={classes.td}>{products.ProductID}</td>
                  <td className={classes.td}>{products.Price}</td>
                  <td className={classes.td}>{products.DeliveryCharge}</td>
                  <td className={classes.td}>{products.Tax}</td>
                  <td className={classes.td}>{products.FinalPrice}</td>
                  <td className={classes.td}>{products.Quantity}</td>
                  <td className={classes.td}>{products.expprice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <div className={classes.left3}>
            <p>
              <span className={classes.subtitlestotal}><b>Grand&nbsp;Total&nbsp;:&nbsp;{Total}&nbsp;₹</b></span>
            </p>
          </div>
        </div>
      </div>
      <button onClick={generatePDF} className={classes.downloadButton}>Download PDF</button>
    </div>
  );
};

export default Print;

/*
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import classes from "./Print.module.css"
axios.defaults.withCredentials = true;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Print = () => {

const { OrderID } =useParams()
    const [print, setprint] =useState([])

useEffect( ()=> {

const prints = async () =>{

try{
const response= await axios.get(`http://localhost:8000/printorder/${OrderID}`);
setprint(response.data);

}catch(err){
    console.error('Error Coming to print order',err)
}


}

prints();
},[])



  if (print.length === 0) {
    return <div>Loading...</div>;
  }

  const { name, adl1, adl2, vtc, state, pin, mobno,amno,orderdate,Total } = print[0];



  return (
    <div className={classes.invoice}>
<div>
 <center className={classes.header}><h1>INFISEA </h1>  </center>
 <hr/>

<div className={classes.orderInfo}>
<p className={classes.left1}>

<p><span className={classes.subtitles}>{name}</span></p>
<p><span className={classes.subtitles}> {adl1} {adl2}</span></p>
<p><span className={classes.subtitles}> {vtc} {state} {pin}</span></p>
<p><span className={classes.subtitles}>Mobile No : {mobno}</span></p>
<p><span className={classes.subtitles}>Alternate No : {amno}</span></p>

</p>


<p className={classes.left2}>

<p><span className={classes.subtitles}> Order ID : {OrderID}</span></p>
<p><span className={classes.subtitles}> {orderdate}</span></p>


</p>

<p className={classes.left3}>

<p><span className={classes.subtitles}>Keep This Invoice And Manufacturer Box For Warrenty Purpose</span></p>

<p><span className={classes.subtitles}> support@infisea.com</span></p>
<p><span className={classes.subtitles}> GSTIN : 12458DE54687</span></p>
<p><span className={classes.subtitles}> Pan no : desde5481</span></p>


</p>


</div>

</div>



 <div>

<br/>
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr>
          
            <th className={classes.th}>Product Name</th>
            <th className={classes.th}>Product Id</th>
            <th className={classes.th}>Base Price</th>
            <th className={classes.th}>Delivery Charges</th>
            <th className={classes.th}>Tax</th>
            <th className={classes.th}>Sum</th>
            <th className={classes.th}>Quantity</th>
            <th className={classes.th}>Price</th>
        
             </tr>
        </thead>
        <tbody>
          {print.map(products => (
            <tr key={products.CategoryID}>
              <td className={classes.td}>{products.ProductName}</td>
               <td className={classes.td}>{products.ProductID}</td>
              <td className={classes.td}>{products.Price}</td>
              <td className={classes.td}>{products.DeliveryCharge}</td>     
              <td className={classes.td}>{products.Tax}</td>
              <td className={classes.td}>{products.FinalPrice}</td>
             <td className={classes.td}>{products.Quantity}</td>
             <td className={classes.td}>{products.expprice}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr/>
      <p className={classes.left3}>

<p><span className={classes.subtitles}>Total : {Total}</span></p>
</p>

    </div>

    </div>  
  )
}

export default Print   
*/