import axios from "axios";

export const getMypage = async () => {
    const access=localStorage.getItem('access');
    const result = await axios.get('http://3.38.191.164/login/mypage',{
        Headers:{
            authorization: access,
        },
    });
    return result.data;
};

// export const login = async (id, password) => {
//     const result = await axios.post('http://3.38.191.164/login', { id, password });
//     return result.data;
// }