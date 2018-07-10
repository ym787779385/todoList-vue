import Vue from 'vue';
import Vuex, {StoreOptions, MutationTree, ActionTree, GetterTree} from 'vuex';

Vue.use(Vuex);

interface ITodoListItem {
  id: any;
  title: string;
  detailConent: string;
  isChecked: boolean;
}

type ITodoList = ITodoListItem[];
interface IBaseStore {
  todoList: ITodoList;
}

function getList(): ITodoList {
  let s = JSON.parse(JSON.stringify(localStorage.getItem('list')));
  s = JSON.parse(s);
  return (s === null ? [] : s);
}

const mutations: MutationTree<IBaseStore> = {
<<<<<<< HEAD
  checkedTodoList: (state: IBaseStore, list: any) =>{
    state.todoList = list;
    localStorage.setItem('list',JSON.stringify(state.todoList));
  },
=======
>>>>>>> 6411d3f6945177db484350964a82fdec35c127fd
  deleteTodoList: (state: IBaseStore, index: any) => {
    state.todoList.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(state.todoList));
  },
  updateTodoList: (state: IBaseStore, obj: any) =>{
    state.todoList[obj.index].title = obj.title;
    state.todoList[obj.index].detailConent = obj.detailConent;
    localStorage.setItem('list', JSON.stringify(state.todoList));
  },
  insertTodoList: (state: IBaseStore, list: any) => {
    state.todoList = [...state.todoList, list];
    localStorage.setItem('list', JSON.stringify(state.todoList));
  },
};

const actions: ActionTree<IBaseStore, IBaseStore> = {
  deleteListAction: ({commit}: any, index: any ) => {
    commit('deleteTodoList', index);
<<<<<<< HEAD
  },
  updateListAction: ({commit}: any, obj: any) => {
    commit('updateTodoList', obj);
  },
  insertListAction: ({commit}: any, list: any) => {
    commit('insertTodoList', list);
  },
  checkedListAction: ({commit}: any, list: any) => {
    commit('checkedTodoList', list);
  }
};

const getters: GetterTree<IBaseStore, IBaseStore> = {
  doneTodoList: (state: IBaseStore) => {
=======
  },
  updateListAction: ({commit}: any, obj: any) => {
    commit('updateTodoList', obj);
  },
  insertListAction: ({commit}: any, list: any) => {
    commit('insertTodoList', list);
  }


};

const getters: GetterTree<IBaseStore, IBaseStore> = {
  donetodoList: (state: IBaseStore) => {
>>>>>>> 6411d3f6945177db484350964a82fdec35c127fd
    return state.todoList;
  },
  todoListNumber: (state: any) => {
    if (Array.isArray(state.todoList)) {
      localStorage.setItem('todoList',JSON.stringify(state.todoList));
      return state.todoList.filter((todo: ITodoListItem) => todo.isChecked);
    }
  },
};

const store: StoreOptions<IBaseStore> = {
  state: {
    todoList: getList(),
  },
  mutations,
  actions,
  getters,
};




export default new Vuex.Store(store);
