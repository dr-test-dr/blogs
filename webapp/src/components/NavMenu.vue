<template>
<div style="height:100%">
<el-menu
      class="el-menu-vertical-demo"
      style="width:200px; height:100%"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item  index="1">
          <i class="el-icon-edit"></i>
          <span>发布文章</span>
      </el-menu-item >

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">文章管理</span>
        </template>
        
        <el-menu-item index="2-1">
        <i class="el-icon-document"></i>
        <span slot="title">文章列表</span>
        </el-menu-item>
        <el-menu-item index="2-2">
        <i class="el-icon-s-management"></i>
        <span slot="title">分类管理</span>
        </el-menu-item>
        <el-menu-item index="2-3">
        <i class="el-icon-discount"></i>
        <span slot="title">标签管理</span>
        </el-menu-item>

      </el-submenu>
      
      <el-menu-item index="3">
        <i class="el-icon-s-data"></i>
        <span slot="title">数据统计</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-tools"></i>
        <span slot="title">系统设置</span>
      </el-menu-item>
    </el-menu>
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