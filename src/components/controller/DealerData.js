// import { getFarmerByIdService } from "../services/FarmService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteDealerService,updateDealerService,insertDealerService,getDealerService,getAllDealersService } from "../services/DealerServices";
import axios from "axios";

import {getDealer,getAllDealers} from "../../redux/DealerSlice";
import Dealer from "../models/Dealer";

const DealerData = () => {


    const [newDealerObj, setNewDealerObj] = useState(new Dealer());
    const [updtDealerObj, setUpdtDealerObj] = useState(new Dealer());
    const [displayDealerObj, setDisplayDealerObj] = useState(new Dealer());
    const [updateDealerObj, setUpdateDealerObj] = useState(new Dealer());
    const [dealerId, setdealerId] = useState('');
    const [deleteDealer, setDeleteDealer] = useState('');
    const dispatch = useDispatch();
    const dealerDataFromStore = useSelector((state) => state.dealer.dealerState);
    const dealerList = useSelector((state) => state.dealer.dealerList);
    const dealerDelete = useSelector((state) => state.dealer.dealerDelete);

    const handleDealer = (d) => {
        console.log('handleDealer');
        setdealerId(d.target.value);
    }

    const handleAddDealer = (d) => {
        console.log(d.target.value);
        setNewDealerObj({
            ...newDealerObj,
            [d.target.name]: d.target.value,
        });
    }
    const handleUpdateDealer = (d) => {
        console.log(d.target.value);
        setUpdtDealerObj({
            ...updtDealerObj,
            [d.target.name]: d.target.value,
        });
    }
    const handleDeleteDealer = (ev) => {
        console.log('handleDeleteDealer');
        setDeleteDealer(ev.target.value);
    }

    const submitGetDealer = (evt) => {
        evt.preventDefault();
        console.log('submitGetDealerservice');
        getDealerService(dealerId)
            .then((response) => { dispatch(getDealerService(response.data)) })
            .catch(() => {
                alert(`Dealer with ${dealerId} not found.`);
            });
        console.log(Object.keys(dealerList));
        setdealerId('');
    }

    const submitGetAllDealer = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllDealer');
        getAllDealersService()
            .then((response) => {
                dispatch(getAllDealersService(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitinsertDealer = (evt) => {
        evt.preventDefault();
        console.log('addDealer');
        axios.post(`http://localhost:8082/Dealer/add`, newDealerObj)
            .then((response) => {
                setDisplayDealerObj(response.data);
                alert('dealer added successfully.');
                setNewDealerObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Dealer could not be added.");
            });
    }

    const submitUpdateDealer = (evt) => {
        evt.preventDefault();
        console.log('addDealer');
        axios.put(`http://localhost:8082/Dealer/update`, updtDealerObj)
            .then((response) => {
                setUpdateDealerObj(response.data);
                alert('Dealer details updated successfully.');
                setNewDealerObj({ firstName:'', lastName:'',mobileNumber:'',email:'',password:''})
            
            })
            .catch(() => {
                alert("Dealer could not be found.");
            });
    }

    const submitDeleteDealer = (evt) => {
        evt.preventDefault();
        console.log('deleteDealerDetails');
        axios.delete(`http://localhost:8082/farmer/delete/${deleteDealer}`)
            .then((response) => {
                alert(`Dealer details deleted successfully.`)
                dispatch(deleteDealer(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Dealer not found.`);
            });

    }

    return (
        <div>
            <h1 className="display-4 text-primary mt-3 mb-3" >Dealer Component</h1>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Find Dealer by id</p>
                <form className="form form-group form-primary" onSubmit={submitGetDealer}>
                    <input className="form-control mt-3" type="number" id="dealerId" name="dealerId" value={dealerId} onChange={handleDealer} placeholder="Enter dealer id to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Search dealer" />
                </form>
                <p>Dealer details: {dealerDataFromStore.dealerId} {dealerDataFromStore.firstName} {dealerDataFromStore.lastName} </p>
            </div>

            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>List of all Dealers</p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllDealer} value="Find All Dealers" />
                        </form>
                    </div >
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>Dealerid</th>
                                <th>Name</th>
                                <th>lastname</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dealerList.map((dealer, k) => {
                                return (
                                    <tr k={k}> <td>{dealer.farmerId}</td> <td>{dealer.firstName}</td><td>{dealer.lastName}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
                <p>Add New Dealer</p>
                {/* <form onSubmit={submitAddEmp}> */}
                <div id="addNewDealerDiv">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={newDealerObj.firstName}
                        onChange={handleAddDealer}
                        placeholder="Enter First Name" />
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={newDealerObj.lastName}
                        onChange={handleAddDealer}
                        placeholder="Enter Last Name" />
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={newDealerObj.mobileNumber}
                        onChange={handleAddDealer}
                        placeholder="Enter Mobile Number" />
                     <input
                        type="text"
                        id="email"
                        name="email"
                        value={newDealerObj.email}
                        onChange={handleAddDealer}
                        placeholder="Enter Email" />   
                     <input
                        type="text"
                        id="password"
                        name="password"
                        value={newDealerObj.password}
                        onChange={handleAddDealer}
                        placeholder="Enter password" />   
                    <input
                        type="submit"
                        // type="button"
                        value="Add Dealer"
                        onClick={submitinsertDealer}
                    />
                </div>
                <p>New Dealer Data: {displayDealerObj.DealerId} {displayDealerObj.firstName} {displayDealerObj.lastName}{displayDealerObj.mobileNumber}{displayDealerObj.email}</p>
            </div>
            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            
            <p>Update New Dealer</p>
            {/* <form onSubmit={submitAddEmp}> */}
            <div id="addNewDealerDiv">
            <input
                    type="text"
                    id="dealerId"
                    name="dealerId"
                    value={updtDealerObj.dealerId}
                    onChange={handleUpdateDealer}
                    placeholder="Enter Dealer Id" />
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={updtDealerObj.firstName}
                    onChange={handleUpdateDealer}
                    placeholder="Enter First Name" />
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={updtDealerObj.lastName}
                    onChange={handleUpdateDealer}
                    placeholder="Enter Last Name" />
                <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={updtDealerObj.mobileNumber}
                    onChange={handleUpdateDealer}
                    placeholder="Enter Mobile Number" />
                 <input
                    type="text"
                    id="email"
                    name="email"
                    value={updtDealerObj.email}
                    onChange={handleUpdateDealer}
                    placeholder="Enter Email" />   
                 <input
                    type="text"
                    id="password"
                    name="password"
                    value={updtDealerObj.password}
                    onChange={handleUpdateDealer}
                    placeholder="Enter password" />   
                <input
                    type="submit"
                    // type="button"
                    value="update Dealer"
                    onClick={submitUpdateDealer}
                />
            </div>
            <p>Updated Dealer Data: {updateDealerObj.DealerId} {updateDealerObj.firstName} {updateDealerObj.lastName} {updateDealerObj.mobileNumber} {updateDealerObj.email}</p>
        </div>
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Delete Dealer by id</p>
                <form className="form form-group form-primary" onSubmit={submitDeleteDealer}>
                    <input className="form-control mt-3" type="number" id="deleteDealer" name="deleteDealer" value={deleteDealer} onChange={handleDeleteDealer} placeholder="Enter Dealer Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Dealer" />
                </form>
                {/* <p>Deleted Farmer details: {farmerDataFromStore.farmerId} {farmerDataFromStore.firstName} {farmerDataFromStore.lastName} </p> */}
            </div>

        </div>
    );
}
export default DealerData;