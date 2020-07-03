<template>
    <div>
        <form @submit.prevent="fetchResponse">
            <input type="text" class="form-control py-4 my-3" placeholder="Type in your Favorite Movie ... " 
            v-model="inputvalue"
            @keypress="addSearchItem"
            >
        </form>
       
    </div>
</template>

<script>

import {mapMutations,mapActions} from 'vuex';
export default {
    name:"Search",
    data(){
        return {
            inputvalue:""
        }
    },
    
    methods:{
        ...mapMutations([
            'ADD_SEARCHITEM'
        ]),
        addSearchItem(){
            this.ADD_SEARCHITEM(this.inputvalue)
        },
        ...mapActions([
            'fetchAPIResponse'
        ]),
        fetchResponse(){
            this.fetchAPIResponse();
            this.inputvalue = ''
        }
    }
    
}

</script>

<style scoped>
input{
    border:none;
    padding:20px;
    width:calc(100%-40px);
    box-shadow: 0 5px 5px #1f242c;
    margin-bottom: 50px;
    outline: none;
}
</style>