<template>
<div>
<el-row class="tac">
<el-col :span="24">
<el-menu
      class="el-menu-vertical-demo"
      style="width:200px; "
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航一</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">选项1</template>
          <el-menu-item index="1-1-1">选项1-1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">选项2</template>
          <el-menu-item index="1-2-1">选项2-1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-3">
          <template slot="title">选项3</template>
          <el-menu-item index="1-3-1">选项3-1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
</el-col>
</el-row>
</div>
</template>

<script>
  export default {
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>