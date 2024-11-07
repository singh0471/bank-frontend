import axios from "axios";

export const getAllusers = async (limit) => {
        try {
            let token = localStorage.getItem("token");
            // console.log(headerObj);
            if(!token){
                throw new Error("unAuthorized error")
            }
            console.log("token of user",token);
            let res = await axios.get("http://localhost:4000/api/v1/user/getAll" , {
                    headers: {
                        auth: `Bearer ${token}`,
                        
                    },
                    params:{
                        limit:limit
                    }
                
            })
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
        }
}