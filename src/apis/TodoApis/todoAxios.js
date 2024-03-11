import api from "./todoAuthAxios";


// TodoList를 가져오는 방법
export const getTodo = async () => {
    try{
        const res = await api.get("/todos");
        console.log(res);
        console.log(res.data);
        return res.data;
    } catch(error) {
        console.log(error);
        return error.message;
    }
}
// Todolist 추가하기 방법
export const createTodo = async (newTodo) => {
    console.log(newTodo);
    try {
        const res = await api.post("/todos", newTodo)
        return res.data;
    } catch (error) {
        console.log(error);
        return error.message;
    } 
}

// Todolist 삭제하는 방법
export const deleteTodo = async (id) => {
    try{
        const res = await api.delete(`/todos/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

// Todolist 수정
export const updateTodo = async (item) => {
    console.log(item);
    try {
        const res = await api.put(`/todos/${item.id}`, {...item, isDone: !item.isDone});
        return res.data;
    } catch (error) {
        console.log(error);
        return error.message;
    }
};

// Todolist 상세보기 정보 받아오기
export const detailTodo = async (id) => {
    try{
        const res = await api.get(`/todos/${id}`)
        console.log(res.data)
        return res.data;
    }catch(error){
        return error.message;
    }
}

