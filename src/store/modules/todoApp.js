const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length>0){
            for(var i=0; i<localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

                }
            }
        }
        return arr;
    }  
};

const state = {
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
};

const mutations = {
    addOneItem(state, todoItem) {
    // 텍스트가 체크되었는지 안 되었는지에 대한 boolean 값, item
    var obj = {completed: false, item: todoItem};
    // JSON.stringify API : JSON객체를 String으로 변경
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state .todoItems.push(obj);
    },
    removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        // 화면에 있는 삭제된 데이터 삭제
        //this.todoItems.splice(index, 1);
        state.todoItems.splice(payload.index, 1);
        
    },
    toggleOneItem(state, payload) {
        //todoItem.completed = !todoItem.completed;
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        // 로컬 스토리지에 데이터를 갱신하기 위해서는 삭제 후 재생성 해야 함
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state){
        localStorage.clear();
        state.todoItems = [];
    }
};

export default {
    state, 
    getters, 
    mutations
}