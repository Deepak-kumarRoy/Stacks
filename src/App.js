import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [emp_name,setEmp_name]=useState('');
  const [emp_id,setEmp_id]=useState('');
  const [designation,setDesignation]=useState('');
  const [department,setDepartment]=useState('');
  const [doj,setDoj]=useState('');
  const [esi_num,setEsi_num]=useState('');
  const [pf_no,setPf_no]=useState('');
  const [uan,setUan]=useState('');
  const [location,setLocation]=useState('');
  const [lop,setLop]=useState('');
  const [workdays,setWorkdays]=useState('');
  const [ac_no,setAc_no]=useState('');

  const submit = (e) => {
    e.preventDefault();
    if(!emp_name||!emp_id||!designation||!department||!doj||!esi_num||!pf_no||!uan||!location||!lop||!workdays||!ac_no){
      alert("fields cannot be empty");
    }else{
      const postData = {emp_name,emp_id,designation,department,doj,esi_num,pf_no,uan,location,lop,workdays,ac_no};
      fetch(
        'http://localhost:8080/public/serverscript/scriptapiforemp/postemp',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        }
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    setEmp_name('');
    setEmp_id('');
    setDesignation('');
    setDepartment('');
    setDoj('');
    setEsi_num('');
    setPf_no('');
    setUan('');
    setLocation('');
    setLop('');
    setWorkdays('');
    setAc_no('');
  }}

  return (
    <>
        <div className="container">
          <div className="text-center my-3"><h1> Employee Details</h1></div>
          <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="name" className="form-label"><h3>Employee Name</h3></label>
            <input type="text" className="form-control" id="title" value={emp_name} onChange={(e)=>{setEmp_name(e.target.value)}} required/>
          </div>
          <div className="col-md-4 mb-3 ">
            <label htmlFor="title" className="form-label"><h3>Employee Id</h3></label>
            <input type="text" min='1' className="form-control" id="title" value={emp_id} onChange={(e)=>{setEmp_id(e.target.value)}} required/>
          </div>
          <div className="col-md-4 mb-3 ">
            <label htmlFor="body" className="form-label"><h3>Designation</h3></label>
            <input type="text" className="form-control" id="body" value={designation} onChange={(e)=>{setDesignation(e.target.value)}} required/>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="body" className="form-label"><h3>Department</h3></label>
            <input type="text" className="form-control" id="body" value={department} onChange={(e)=>{setDepartment(e.target.value)}} required/>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="name" className="form-label"><h3>Date of Joining</h3></label>
            <input type="date" className="form-control" id="title" value={doj} onChange={(e)=>{setDoj(e.target.value)}} required/>
          </div>
          <div className="col-md-4 mb-3 ">
            <label htmlFor="title" className="form-label"><h3>ESI Number</h3></label>
            <input type="text" min='1' className="form-control" id="title" value={esi_num} onChange={(e)=>{setEsi_num(e.target.value)}} required/>
          </div>
          <div className="col-md-4 mb-3 ">
            <label htmlFor="body" className="form-label"><h3>PF NO.</h3></label>
            <input type="text" className="form-control" id="body" value={pf_no} onChange={(e)=>{setPf_no(e.target.value)}} required/>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="body" className="form-label"><h3>UAN</h3></label>
            <input type="number" className="form-control" id="body" value={uan} onChange={(e)=>{setUan(e.target.value)}} required/>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="name" className="form-label"><h3>Location</h3></label>
            <input type="text" className="form-control" id="title" value={location} onChange={(e)=>{setLocation(e.target.value)}} required/>
          </div>
          <div className="col-md-4 mb-3 ">
            <label htmlFor="title" className="form-label"><h3>L.O.P</h3></label>
            <input type="number" min='1' className="form-control" id="title" value={lop} onChange={(e)=>{setLop(e.target.value)}} required/>
          </div>
          <div className="col-md-4 mb-3 ">
            <label htmlFor="body" className="form-label"><h3>Work Days</h3></label>
            <input type="number" className="form-control" id="body" value={workdays} onChange={(e)=>{setWorkdays(e.target.value)}} required/>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="body" className="form-label"><h3>A/C No.</h3></label>
            <input type="number" className="form-control" id="body" value={ac_no} onChange={(e)=>{setAc_no(e.target.value)}} required/>
          </div>
        </div>
        <center><button type="submit" className="btn btn-primary text-center" onClick={submit}>Submit</button></center>
      </div>
    </>
  );
}
