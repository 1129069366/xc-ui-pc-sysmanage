<template>
 <div>
   <el-button type="primary" size="small" v-on:click="changePage">查询</el-button>
  <el-table
    :data="list"
    style="width: 100%">
    <el-table-column type="index" width="60">
    </el-table-column>
    <el-table-column prop="pageName" label="页面名称" width="120">
    </el-table-column>
    <el-table-column prop="pageAliase" label="别名" width="120">
    </el-table-column>
    <el-table-column prop="pageType" label="页面类型" width="150">
    </el-table-column>
    <el-table-column prop="pageWebPath" label="访问路径" width="250">
    </el-table-column>
    <el-table-column prop="pagePhysicalPath" label="物理路径" width="250">
    </el-table-column>
    <el-table-column prop="pageCreateTime" label="创建时间" width="300" >
    </el-table-column>
  </el-table>
   <el-pagination
     layout="prev, pager, next"
     :total="this.total"
     style="float:right;"
     :page-size="this.params.size"
     :current-page="this.params.page"
     v-on:current-change="changePage"
     v-on:prev-click="prePage"
     @next-click="nextPage"
   >
   </el-pagination>
 </div>
</template>

<script>
  import * as cmsApi from  "../api/cms"
  export default {
    data() {
      return {
        list: [],
        total:0,
        params: {
          page: 1,
          size:10
        }
      }
    },
    methods: {
      changePage: function(page){
        this.params.page = page
        this.query()
      },
      query: function () {
        cmsApi.page_list(this.params.page,this.params.size).then((result => {
          this.list = result.queryResult.list
          this.total=result.queryResult.total
          this.list = result.queryResult.list
        }))
      },
      prePage:function () {
        this.params.page = this.params.page-1
        this.changePage(this.params.page)
      },
      nextPage: function () {
        this.params.page = this.params.page+1
        this.changePage(this.params.page)
      }
    },
    created(){
      this.query()
    }
  }
</script>


<style scoped>
</style>
