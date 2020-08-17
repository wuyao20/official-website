<template>
  <div class="container-fluid">
    <div class="navigation">
      <span>当前位置：</span><span><router-link to="/home">首页>></router-link></span><span>详细信息</span>
    </div>
    <div class="title">
      <h1>
        集聚优势资源  服务企业关工——宜兴市创新成立企业关工委综合服务团
      </h1>
    </div>
    <div class="content">
      <p class="explain">
        <span> </span>
        时间：<span>2020-08-17
        </span>
        [ <font onclick="Zoom.style.fontSize='16px';" style="cursor:pointer;">大</font>
        <font onclick="Zoom.style.fontSize='14px';" style="cursor:pointer;">中</font>
        <font onclick="Zoom.style.fontSize='12px';" style="cursor:pointer;">小</font> ]
        浏览次数： <span id="clickCount">6</span>
        [ <a href="#" onclick="javascript:window.print()" title="打印">打印</a> ]
        [ <a href="#" onclick="window.close()" title="关闭">关闭</a> ]
        [ <a href="#" onclick="window.external.AddFavorite(location.href,document.title)" title="收藏">收藏</a> ]
      </p>
      <div id="Zoom">
        <!--<$[CONTENT]>start-->
        <p>　　为进一步加强企业关工委工作，有效指导和服务企业关工委切实履行好“关心青年职工成才、关爱职工子女成长、关注社会公益事业”的职能，宜兴市关工委创新组建成立了各有关方面专家组成的企业关工委综合服务团。8月12日专门召开了服务团成立会议，市关工委主任张伯宏，副主任黄浩南、杨南华和服务团全体成员参加了会议。</p>

        <p>　　长期以来，宜兴市关工委从履行职能出发，组建成立了青少年思想道德教育报告团、法治教育报告团、老农业科技服务团等专业工作团队。这几支队伍汇集了一批专业性较强的“五老”精英，一直都在推动关心下一代各项工作中发挥着重要作用。相比较而言，企业关工委工作的专业队伍建设是一块短板。企业关工委工作中，通常的精力是用在组建扩面多，下达目标任务多，宏观要求或督导也比较多。各企业只是依靠自身资源条件去抓落实和推进，乡下锣鼓乡下敲，做成啥样算啥样，其成效自然不大理想。今年以来，宜兴市关工委在认真调研的基础上，决定通过组建成立企业关工委综合服务团，凝聚一批以“五老”为主，擅长开展各类青工教育以及活跃职工生活等方面的精英和专家，有组织有计划地为企业提供服务和指导。这次服务团成员的物色得到了市机关有关部门和单位大力支持，首批精选了相关方面的专家及部门老领导16位同志，涵盖了思想道德、遵纪守法、安全生产、爱岗敬业、身心健康教育以及科学家教、职工文体活动等9个方面的专业服务项目。初期的推进手段将以企业“点菜”、给各镇（街道）下达对接服务任务、典型示范等方式引导面上企业的跟进和全面推开。争取这项工作在年内有一个良好的开局。</p>

        <p>　　会上，市关工委副主任杨南华宣读了《关于成立企业关工委综合服务团的通知》。副主任黄浩南简要介绍了关工委组织的性质任务尤其是企业关工委工作的基本情况，市企业关工委综合服务团的前期筹备过程，并就服务团下阶段的启动运行作了初步的部署安排。新任服务团团长戴占梅表示，我市率先成立企业关工委综合服务团是新时代创新关心下一代工作新的举措和重要实践,作为该团主要负责人，深感责任重大。下一步将在市关工委和各相关单位的领导和支持下，充分发挥服务团各成员的业务优势、资源优势和团队优势，加强成员间经验交流和资源共享，紧扣企业需求，全力组织团队开展服务活动。市关工委主任张伯宏对综合服务团的成立表示祝贺，向志愿加入服务团的成员致以崇高的敬意和衷心的感谢！他指出：要提升政治站位，充分认清组建成立企业关工委综合服务团的重要性和必要性。要以企业满意为最高准绳，谋思路、定方案都要从有利于企业正常运行的需要出发，尊重和理解企业，不添麻烦不添乱。要坚持循序渐进和典型导向，积小胜为大胜。要摆正角色定位，不期望对企业的事大包大揽，着眼为企业发展添砖加瓦、拾遗补缺。服务团要切实加强团队建设，互帮互助、和衷共济，努力实现企业关工委综合服务工作行稳致远。</p>

        <p>　　各位服务团成员在会上作了简要的自我介绍，不少同志还提出了建设性意见建议。会场气氛热烈，情绪高涨。这次会议既是服务团成立会，还是一个以创新举措推进企业关工委工作的动员会、推进会。</p>

        <p style="text-align: right">（宜兴市关工办）</p>
        <!--<$[CONTENT]>end-->
        <p class="others">本篇文章共有 <span>1</span>页 当前为第<span>1</span>页</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Item',

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .container-fluid
    padding-left 80px;
    padding-right 80px;
    .title
      margin: 20px 0 10px;
      color: #0064AF;
      font-size: 15px;
      text-align: center;
    .content
      text-align center
      #Zoom
        text-align left
        overflow-x: auto;
        overflow-y: hidden;
        margin: 10px auto;
        line-height: 24px;
        font-size: 14px;
        color: #333333;
</style>
