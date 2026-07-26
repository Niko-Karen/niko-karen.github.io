var posts=["article/19bd25b6/","article/632f5ce3/","article/e9ee3cf1/","article/b1493ad4/","article/811ab690/","article/6dh83ks9/","article/cce073e6/","article/2176063644/","article/b36ca1c8/","article/2fe613e2/","article/d79ce326/","article/db9907b/","article/bfdf9e97/","article/cdd581d8/","article/8b97978b/","article/5ce5d338/","article/744616242/","article/d2e38f15/","article/783094e0/","article/cead5788/","article/1087b3cf/","article/c858df02/","article/2604ea40/","article/53dd9c3d/","article/8cbf9cd6/","article/bf68f277/","article/c516fa23/","article/491b90e5/","article/759379402/","article/1f266fbf/","article/2118472832/","article/c56463d3/","article/cfb6ad12/","article/549a398b/","article/6508a98a/","article/eb558c72/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"安知鱼","link":"https://hexo.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/hexo.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","siteshot":"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"欢迎光临糖果屋"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://img.zhheo.com/i/67d8fa75943e4.webp","descr":"分享设计与科技生活"},{"name":"轻笑Chuckle","link":"https://www.qcqx.cn","avatar":"https://www.qcqx.cn/head.webp","descr":"漫天倾尘,风中轻笑","siteshot":"https://www.qcqx.cn/qcqx.webp"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。"},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://cdn.jsdelivr.net/npm/@kmar/fonts/avatar/own.png","siteshot":"https://cdn.jsdelivr.net/npm/@kmar/fonts/sc/own.jpg","descr":"开发学习启发性二刺螈"},{"name":"张时贰","link":"https://zhsher.cn","avatar":"https://q1.qlogo.cn/g?b=qq&nk=1310446718&s=5","descr":"环转码，爱敲代码的小张！"},{"name":"安知鱼","link":"https://hexo.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"摄影爱好者团伙","link":"https://www.mz521.cn/","avatar":"https://www.mz521.cn/tp/8.png","descr":"好摄之徒"},{"site":"字节君","link":"https://space.lvbye.tk","avatar":"https://c2.im5i.com/2022/12/30/Y18D2.jpeg","descr":"热爱漫无边际，生活自有分寸"},{"name":"小李同学 Coding","link":"https://blog.xxfer.cn/","avatar":"https://cdn.jsdelivr.net/gh/LJJbyZJU/pic_bed/img/badge/boji.jpg","descr":"一支努力变强的小彩笔","siteshot":"https://cdn.jsdelivr.net/gh/LJJbyZJU/pic_bed/img/badge/siteshoot.png"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };