import React, { Component } from "react";
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });


class Addemployee extends Component {

 
    constructor(props){
         super(props);
         this.state ={
             name:'',
             email:'',
             phone:'',
             nid_number:'',
             address:'',
             sallary:'',
             photo:''
         }
    }



    //working image
    ImageChange = (event) =>{
        Toast.fire({
            icon: 'error',
            title: 'Signed in successfully'
          })
    }

  


  render() {
    return (
      <div>
        <div className="">
          <div className="row">
            <div
              className="card pb-5"
              style={{ width: "100%", borderRadius: 0, marginBottom: 20,boxShadow:'0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)' }}
            >
              <div className="card-body">
                <h3 className="mb-3" style={{fontFamily: 'Amiri,serif'}}>Add New Employee here</h3>
                <div className="card pb-4" style={{borderRadius:0,boxShadow:'0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'}}>
                  <div className="card-body">
                    <form action="">
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="name"><b> Name : </b></label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Employee Name"
                            value={this.state.name}
                            onChange={(e)=>this.setState({name:e.target.value})}
                            style={{ borderRadius: 0 }}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email"> <b>Email :</b> </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Employee Email"
                            value={this.state.email}
                            onChange={(e)=>this.setState({email:e.target.value})}
                            style={{ borderRadius: 0 }}
                          />
                        </div>

                        
                      </div>
                        
                        <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="phone"> <b>Phone :</b> </label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="form-control"
                            placeholder="Employee phone"
                            value={this.state.phone}
                            onChange={(e)=>this.setState({phone:e.target.value})}
                            style={{ borderRadius: 0 }}
                          />
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="nid_number"> <b>Nid Number :</b> </label>
                          <input
                            type="text"
                            name="nid_number"
                            id="nid_number"
                            className="form-control"
                            placeholder="Employee nid_number"
                            value={this.state.nid_number}
                            onChange={(e)=>this.setState({nid_number:e.target.value})}
                            style={{ borderRadius: 0 }}
                          />
                        </div>
                        </div>

                        <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="sallary"> <b>Sallary :</b> </label>
                          <input
                            type="text"
                            name="sallary"
                            id="sallary"
                            className="form-control"
                            placeholder="Employee sallary"
                            value={this.state.sallary}
                            onChange={(e)=>this.setState({sallary:e.target.value})}
                            style={{ borderRadius: 0 }}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="address"> <b> Address :</b> </label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            className="form-control"
                            value={this.state.address}
                            onChange={(e)=>this.setState({address:e.target.value})}
                            placeholder="Employee address"
                            style={{ borderRadius: 0 }}
                          />
                        </div>
                        </div>

                        <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="photo"> <b>Photo :</b> </label>
                          <input
                            type="file"
                            name="photo"
                            id="photo"
                            className="form-control"
                            onChange={this.ImageChange}
                            style={{ borderRadius: 0 }}
                          />
                        </div>
                        
                        </div>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Addemployee;
