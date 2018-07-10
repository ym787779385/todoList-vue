<template>
  <v-app>
    <v-toolbar color="indigo lighten-1" dark elevation="2" style="position: fixed; z-index: 900;">
      <v-toolbar-title  style="width: 100%; text-align: center" >{{sum+"个任务 / "+complete+"个已完成"}}</v-toolbar-title>
    </v-toolbar>
    <v-content style="margin-top:80px">
<<<<<<< HEAD
      <router-view @listItemCount="receiveCount"></router-view>
=======
      <router-view ></router-view>
>>>>>>> 6411d3f6945177db484350964a82fdec35c127fd
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
<<<<<<< HEAD
@Component
export default class App extends Vue  {
  private sum: number = 0;
  private complete: number = 0;
  private receiveCount(n: any) {
    this.sum = n[0];
    this.complete = n[1];
    console.log(n);
=======
import { State, Action, Getter } from "vuex-class";
interface ITodoItem {
  id: any,
  title: string,
  detailconent: string,
  isChecked: boolean,
}
@Component
export default class App extends Vue  {
  @Getter todoListNumber !: Array<ITodoItem>;
  @Getter donetodoList !: Array<ITodoItem>;
  private sum: number = 0;
  private complete: number = 0;
  @Watch('todoListNumber')
    private onTodoListChanged(n:Array<ITodoItem>, o:Array<ITodoItem>) {
      this.complete = n.length;
      console.log(this.complete);
      this.$emit('sendMsg',[this.sum,this.complete]);
  }
  @Watch('donetodoList')
    private onTodoListsChanged(n:Array<ITodoItem>, o:Array<ITodoItem>) {
      this.sum = n.length;
      this.$emit('sendMsg',[this.sum,this.complete]);
  }
  mounted() {
    this.sum = this.donetodoList.length;
    this.complete = this.todoListNumber.length;
    this.$emit('sendMsg',[this.sum,this.complete]);
>>>>>>> 6411d3f6945177db484350964a82fdec35c127fd
  }
}
</script>

<style lang="less">

</style>
