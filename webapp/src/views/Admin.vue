<template>
    <div id="admin">
    <el-container>
      <el-header class="header">
        <vheader></vheader>
      </el-header>
      <el-container>
          <navmenu></navmenu>
      </el-container>
    </el-container>

  </div>
</template>


<script>
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'

export default {
  name: 'Admin',
  data(){
      return{
          msg: 'hello element-ui'
      }
  },
  components: {
    'navmenu': NavMenu,
    'vheader': Header
  }

}
</script>
<style scoped>
.header{
  background-color: #545c64;
  color: #fff;
  line-height: 60px;
}
</style>
