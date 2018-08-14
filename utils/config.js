/*
 * 
 * WordPres版微信小程序
 * author: jianbo
 * organization: 守望轩  www.watch-life.net
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * 开源协议：MIT
 * Copyright (c) 2017 https://www.watch-life.net All rights reserved.
 */



//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.watch-life.net/blog"
var DOMAIN = "www.unear.top";
var MINAPPTYPE="1";//小程序的类型，如果是企业小程序请填：0 ，如果是个人小程序请填：1
var WEBSITENAME="U-Near"; //网站名称
var ABOUTID = 51507; //wordpress网站"页面"的id,注意这个"页面"是wordpress的"页面"，不是"文章"
var PAGECOUNT='10'; //每页文章数目
var CATEGORIESID ='1,17,18,22'  //专题页显示全部的分类
//var CATEGORIESID = '1,17,18,22';//指定专题页显示的分类的id
var INDEXLISTTYPE="all" //首页显示所有分类
//var INDEXLISTTYPE ="1,17,18,22,23,24,25,26,27,101,105" //指定首页显示分类的id
var PAYTEMPPLATEID = 'I1E0KvFHyLIX2rFhZgoykl3Wx6VTxpk8cVc5Qa7aldE';//赞赏消息模版id
var REPLAYTEMPPLATEID = 'LNrCNf_fOmf8ErSk4En1qTCb-FyGG8LR3wL3L7YcYVg';//回复评论消息模版id
var ZANIMAGEURL = 'http://unear1.oss-cn-hangzhou.aliyuncs.com/2018/05/2018052309370539.png';//微信赞赏的图片链接，用于个人小程序的赞赏
var LOGO = "../../images/logo-icon.png"; // 网站的logo图片
var POSTERIMGURL ="../../images/logo700.png"; //生成海报如果没有首图，使用此处设置的图片作为海报图片。
//设置downloadFile合法域名,不带https ,在中括号([])里增加域名，格式：{id=**,domain:'www.**.com'}，用英文逗号分隔。
//此处设置的域名和小程序与小程序后台设置的downloadFile合法域名要一致。
var DOWNLOADFILEDOMAIN = [
    { id: 1, domain: 'www.unear.top' },
    { id: 2, domain: 'oss.unear.top' },
    { id: 3, domain: 'unear.top' }
]
 //首页图标导航
 //参数说明：'name'为名称，'image'为图标路径，'url'为跳转的页面，'redirecttype'为跳转的类型，apppage为本小程序的页面，miniapp为其他微信小程序,webpage为web-view的页面
 //        'appid' 当redirecttype为miniapp时，这个值为其他微信小程序的appid，如果redirecttype为apppage，webpage时，这个值设置为空。
 //         'extraData'当redirecttype为miniapp时，这个值为提交到其他微信小程序的参数，如果redirecttype为apppage，webpage时，这个值设置为空。
var INDEXNAV = [
    { id: '1', name: '热评文章', image: '../../images/ranking.png', url: '../hot/hot', redirecttype: 'apppage', appid: '', extraData:''},     
   ]

export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,
  getAboutId: ABOUTID,
  getPayTemplateId: PAYTEMPPLATEID,
  getPageCount: PAGECOUNT,
  getCategoriesID :CATEGORIESID,
  getIndexNav: INDEXNAV,
  getReplayTemplateId: REPLAYTEMPPLATEID,
  getMinAppType: MINAPPTYPE,
  getZanImageUrl: ZANIMAGEURL,
  getIndexListType: INDEXLISTTYPE,
  getLogo: LOGO,
  getPostImageUrl: POSTERIMGURL,
  getDownloadFileDomain: DOWNLOADFILEDOMAIN
}