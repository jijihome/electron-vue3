<template>
  <el-container>
    <el-header>
      <h1>Element Plus Hello World</h1>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="12" :offset="6">
          <el-card>
            <el-input
              v-model="name"
              placeholder="请输入你的名字"
              clearable
            ></el-input>
            <el-button
              type="primary"
              @click="sayHello"
              style="margin-top: 20px"
            >
              打招呼
            </el-button>
            <el-alert
              v-if="greeting"
              :title="greeting"
              type="success"
              :closable="false"
              style="margin-top: 20px"
            ></el-alert>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const greeting = ref("");

const sayHello = () => {
  if (name.value) {
    greeting.value = `你好, ${name.value}! 欢迎来到Element Plus世界!`;
  } else {
    greeting.value = "你好, 世界! 欢迎来到Element Plus!";
  }
};
</script>

<style>
.el-header {
  background-color: #409eff;
  color: white;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 20px;
}

.el-card {
  margin-top: 20px;
  padding: 20px;
}
</style>
