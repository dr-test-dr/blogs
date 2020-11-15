### 博客功能：
#### 展示界面：  
+ 登录： 游客登录，博主登录  
+ 首页： 博主信息、轮播图、文章列表（搜索功能和排序功能，包括按照发表排序，热点排序，标签排序）、文章标签
+ 文章详情： Markdown排版、点赞、分享、评论

#### 后台管理：  
+ 登录： 博主登录和管理员登录
    + 管理员有权限来发布和删除文章 发布分文章展示页面才能显示
    + 博主只能增加修改查看文章
+ 发布管理：文章内容的增删改查、Markdown编辑
+ 分类管理：文章分类的增删改查
+ 标签管理：文章标签的增删改查
+ 轮播图： 博客的广告或者一些其他图片展示的增删改查  
+ 评论点赞： 管理文章评论和点赞 

### 博客数据库：
    user： id userName password createTime status     (admin默认为管理员)
    post: id title categoryId createTime userId commentsId 
    category: id categoryName
    tag: id tagName
    tag_relationships id postId tagId
    banner: id title src href order
    comments: id likes comments topCommentsId preCommentsId
