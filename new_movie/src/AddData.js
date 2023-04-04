import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';


function AddData(props) {

const [email, setEmail] = useState('')
const [name, setName] = useState('')
const [message, setMessage] = useState('')

     const history = useHistory(); 

     const addDataInfo = async (e) => { 
          e.preventDefault();            
          let formField = new FormData()
          formField.append('email', email)
          formField.append('name', name)
          formField.append('message', message)  
          await axios({
               method: 'post',
               url: 'http://localhost:8000/podaci/',
               data: formField
          }).then((response) => {
               console.log(response.data);
               history('/')          
          })

     }

     

     return (
          <div className=" p-3 m-3">
               <div className="set-form position- form-group m-2 p-2" style={{width:'50%'}}>
                    <input
                         type='text'
                         className="form-control form-control-lg"
                         placeholder="email"
                         name="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                    />
               </div> 
               <div className="set-form form-group m-2 p-2" style={{width:'50%' }}>
                    <input
                         type='text'
                         className="form-control form-control-lg"
                         placeholder="name"
                         name="name"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                    />
               </div> 
               <div className="set-form position- form-group m-2 p-2" style={{width:'50%' }}>
                    <textarea
                         type='text'
                         className="form-control form-control-lg"
                         placeholder="message"
                         name="message"
                         value={message}
                         onChange={(e) => setMessage(e.target.value)}
                    />
               </div> 
               <div className="p-3" >
                   <button type="button" className="btn btn-secondary m-3" onClick={addDataInfo}>Send Message</button>
               </div>
              
          </div>
     );
}

export default AddData;