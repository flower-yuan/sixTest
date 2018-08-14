<template>
    <div>
        home
    </div>
</template>

<script>
    import {userList} from '../api/index.js'

    export default {
        mounted(){
            const params = {
                params:{
                    pagenum: 1,
                    pagesize: 10
                }
            }
            userList(params).then(res=>{
                /*eslint-disable */
                console.log(res)
                /*eslint-disable */

            })
        }
    }
</script>

<style>
</style>
