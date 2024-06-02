import React, { useEffect, useState,useRef } from 'react';
import Service from './Service/Service';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";



const ViewSummary = () => {
  const status = "Approved";
  const formData = new FormData();
  formData.append('status', status);
  const [user, setUser] = useState([]);
  const uid=sessionStorage.getItem('uid');
  console.log('Session UserID',uid);

  useEffect(() => {
    const getAllUser = async () => {
      await Service.GetTaxSummary(uid).then((response) => {
        setUser(response.data);
        console.log(response.data)
      })
        .catch((err) => console.log(err));
    };
    getAllUser();
  }, []);

  const pdfRef = useRef();

  const Exportreport=()=>{
    const input=pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData=canvas.toDataURL('image/png');
      const pdf=new jsPDF('p','mm','a4',true);
      const pdfWidth=pdf.internal.pageSize.getWidth();
      const pdfHeight=pdf.internal.pageSize.getHeight();
      const imgWidth=canvas.width;
      const imgHeight=canvas.height;
      const ratio=Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
      const imgX=(pdfWidth-imgWidth*ratio)/2;
      const imgY=30;
      pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
      pdf.save(`TaxReports.pdf`);
    })
  };

  return (
    <div style={{ marginLeft: "1%", marginRight: "10%", marginTop: "3%", height: "600px", width: "1150px", flexGrow: "1" }} className="card" >
      <div className='card-header'><h1 className="text-center">User Taxation Summary</h1></div>
      <div className='card-body'>
        <div key={user.taxId} ref={pdfRef} className='summary'>
          <h2>Bill for TaxId: {user.taxId}</h2>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Salary:</strong> {user.salary}</p>
          <p><strong>Hra:</strong> {user.hra}</p>
          <p><strong>AdditionalIncomeResource:</strong> {user.additionalIncomeResource}</p>
          <p><strong>AdditionalIncome:</strong> {user.additionalIncome}</p>
          <p><strong>PropertyTaxAmount:</strong> {user.propertyTaxAmount}</p>
          <p><strong>LoanAmount:</strong> {user.loanAmount}</p>
          <p><strong>CalculatedTax:</strong> {user.calculatedTax}</p>
          <p><strong>Status:</strong> {user.status}</p>
          
        </div>
        <button class='btn btn-success' onClick={Exportreport} style={{float:'right'}}>Download PDF</button>

      </div>
    </div>
  )
}

export default ViewSummary;
