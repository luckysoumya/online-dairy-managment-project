import axios from 'axios';
const getAllDealersService = () => {
         console.log(`getAllDealersService`);
         return axios.get(`/dealer/all`);
     }
     const deleteDealerService = (dealerId) => {
            console.log(`deleteDealer`);
            return axios.post(`/dealer/delete/{ dealerId}/${dealerId}`);
         }
         const updateDealerService = (dealer) => {
                 console.log(`Service updateDealer`);
                 return axios.post(`/dealer/update`, dealer);
             }
             const insertDealerService = (dealer) => {
                     console.log(`addDealer`);
                     return axios.post(`/dealer/add`, dealer);
                 }
                 const getDealerService = (dealerId) => {
                         console.log(`getDealerId`);
                        return axios.get(`/dealer/get/${dealerId}`);
                     }
                     export {getAllDealersService,deleteDealerService,updateDealerService,insertDealerService,getDealerService};
     
































// import axios from 'axios';

// // Create services for other components in this way. 

// const getFarmerByIdService = (fid) => {
//     console.log(`getFarmerByIdService`);
//     return axios.get(`/farmer/get/${fid}`);
// }
// const getAllFarmerService = () => {
//     console.log(`getAllFarmerService`);
//     return axios.get(`/farmer/all`);
// }

// const addFarmerService = (farmer) => {
//     console.log(`addFarmer`);
//     return axios.post(`/farmer/add`, farmer);
// }

// const updateFarmerService = (farmer) => {
//     console.log(`getEmpByIdService`);
//     return axios.post(`/farmer/update`, farmer);
// }

// const deleteFarmerService = (fid) => {
//     console.log(`deleteFarmer`);
//     return axios.post(`/farmer/delete/{farmerId}/${fid}`);
// }




// export { getFarmerByIdService, getAllFarmerService, addFarmerService, updateFarmerService, deleteFarmerService};