import axiosApiMain from "../../../scripts/api";


// const content = (typeContent) => {
//     return `https://jwt-test-79584-default-rtdb.europe-west1.firebasedatabase.app/${typeContent}.json`;
// }

// export const getAllCard = async (typeContent)=>{
//   try{
//     const response = await axiosApiMain.get(content(typeContent))
//     return response;
//   }catch(e){
//     console.log(e.response)
//   }
// }

export const getAllCard = async ()=>{
  try{
    const response = await axiosApiMain.get(
      'https://jwt-test-79584-default-rtdb.europe-west1.firebasedatabase.app/0.json'
    )
    return response.data;
  }
  catch(e){
    console.log(e.response);
  }
}