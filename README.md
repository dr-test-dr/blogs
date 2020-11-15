### 博客功能：
    * 展示界面：  
        登录： 游客登录，博主登录  
        首页： 文章标签，轮播图，搜索功能和排序功能（按照发表排序，热点排序，标签排序）   
        文章详情： 点赞和评论功能  

    * 后台管理：  
        登录： 博主登录和管理员登录     管理员有权限来发布和删除文章 发布分文章展示页面才能显示。博主只能增加修改查看文章。  
        文章管理： 文章的增删改查和发布   
        分类管理： 文章类别的增删改查  
        轮播图： 博客的广告或者一些其他图片展示的增删改查  
        评论点赞： 对一篇文章或者某个评论的点赞或回复  

### 博客数据库：
    user： id userName password createTime statu     (admin admin 默认为管理员)
    blogs: id title categoryId createTime userId commentsId 
    category: id categoryName
    banner: id title src href order
    comments: id likes comments topCommentsId preCommentsId 

### gitlab：
    是搞一个两个人都有权限的git还是？
