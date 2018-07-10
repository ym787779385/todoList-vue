<template>
  <v-list subheader style="padding: 0; margin-bottom: 50px;">
<<<<<<< HEAD
    <template v-for="(stu,index) in todoList">
      <v-list-tile avatar :key="index" >
=======
    <template v-for="(stu,index) in todoItemList">
      <v-list-tile avatar  :key="index" >
>>>>>>> 6411d3f6945177db484350964a82fdec35c127fd
        <v-list-tile-action>
          <v-checkbox v-model="stu.isChecked" @change="checkedItem"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title :class="{myLabel: stu.isChecked}">{{stu.title}}</v-list-tile-title>
        <v-list-tile-sub-title>{{stu.detailConent}}</v-list-tile-sub-title>
          </v-list-tile-content>
        <v-list-tile-action>
        <v-icon @click="controlDialog(index)">more_vert</v-icon>
        </v-list-tile-action>
      </v-list-tile>  
      <v-divider :key="'d' + index"></v-divider>
    </template>
  </v-list>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { mount } from '@vue/test-utils';
import { State, Action, Getter } from "vuex-class";

interface ITodoItem {
  id: any,
  title: string,
  detailConent: string,
  isChecked: boolean,
}

@Component
export default class TodoList extends Vue {
<<<<<<< HEAD
=======
  @Getter donetodoList !: Array<ITodoItem>;
>>>>>>> 6411d3f6945177db484350964a82fdec35c127fd
  private isDialogShow: boolean = false;
  private title: string = '';
  private detailConent: string = '';
  private btnText: string = '';
<<<<<<< HEAD
  
  @Prop() private todoList!: ITodoItem[];
  private checkedItem( ){
   this.$store.dispatch("checkedListAction",this.todoList);
  }
  private controlDialog(n: number) {
    this.$emit('sendItemId', n);
=======
  private todoItemList: ITodoItem[] = [];
  
  @Prop() private msg!: string;
  @Watch('donetodoList')
  private onTodoListsChanged(n:Array<ITodoItem>, o:Array<ITodoItem>) {
      this.todoItemList = n
  }

  mounted() {
    this.todoItemList = this.$store.getters.donetodoList;
    console.log(this.$store.getters. donetodoList); 
  }
  private checkedItem( ){
    localStorage.setItem('list', JSON.stringify(this.todoItemList));
  }
  private controlDialog(n: number) {
    var m = this.todoItemList.length;
    var id = (m>0? this.todoItemList[m-1].id : 0);
    console.log('id'+ id);
    this.$emit('sendMsg',{
      title: this.todoItemList[n].title,
      cont: this.todoItemList[n].detailConent,
      index: n,
      insertID: id,
    });
>>>>>>> 6411d3f6945177db484350964a82fdec35c127fd
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.myLabel{
  text-decoration: line-through;
}

</style>
