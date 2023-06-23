
import axios from "axios"
export const getList =  async ()=>{

    const modifiedData={};

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        response.data.forEach(item => {
          const userId = item.userId;
          if (modifiedData[userId]) {
            modifiedData[userId].push(item);
          } else {
            modifiedData[userId] = [item];
          }
        });
        return modifiedData;
        
  
      } catch (error) {
        console.error(error);
      } 
    

       

 }