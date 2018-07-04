// noinspection JSAnnotator
import wepy from 'wepy';
const host = 'https://coupon.test.mihutime.com';
// const host = 'http://itimego.com'
let token = wx.getStorageSync('token');
const wxRequest = (params = {}, url) => {
  let token = wepy.getStorageSync('token');
  return new Promise((resolve, reject) => {
    wx.request({
      url: url, // 仅为示例，并非真实的接口地址
      data: params.data || {},
      method: params.method || 'get',
      header: {
        'content-type': 'application/json',
        'X-Access-Token': token,
        'cityId': params.cityId || ''
      },
      success: function(res) {
        if (res.statusCode === 422) {
          // return resolve(res)
          return reject(res.data)
        } else {
          return resolve(res)
        }
      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (e) {
        wepy.hideToast()
      }
    })
  })
};


 //公共接口/子分类
const getCommonChildFour = (params) => wxRequest(params, host + '/common/v1/categories/'+ params.id+'/child-four');
const getCommonChilds = (params) => wxRequest(params, host + '/common/v1/categories/'+params.id+'/child');
//公共接口
const getCommonFiles = (params) => wxRequest(params, host + '/common/v1/files');
const getCommonCodes = (params) => wxRequest(params, host + '/common/v1/auth-codes');
const getCommonloginCoding = (params) => wxRequest(params, host + '/common/v1/login-codes');
const getCommonModify = (params) => wxRequest(params, host + '/common/v1/phones/modify-phone');
const getCommonBinging = (params) => wxRequest(params, host + '/common/v1/phones/binging-phone');
const getCommonLoginCodes = (params) => wxRequest(params, host + '/common/v1/accounts/login');
const getCommonCodeType = (params) => wxRequest(params, host + '/common/v1/auth-codes/types');
const getCommonBanner = (params) => wxRequest(params, host + '/common/v1/banners');
const getCommonCategories = (params) => wxRequest(params, host + '/common/v1/categories');
const getCommonLocation = (params) => wxRequest(params, host + '/common/v1/locations/ip-location');
const getCommonIs_open = (params) => wxRequest(params, host + '/common/v1/regions/is-open');
const getlogin = (params) => wxRequest(params, host + '/common/v1/accounts/weixin-mini-login');
const getProvince = (params) => wxRequest(params, host + '/common/v1/regions/province');
const getRegions = (params) => wxRequest(params, host + '/common/v1/regions/'+ params.id);
// 我的
const getVolById = (params) => wxRequest(params, host + '/shop/v1/users');
const getVolIdList = (params) => wxRequest(params, host + '/shop/v1/browse-logs');
const getVolIdClear = (params) => wxRequest(params, host + '/shop/v1/browse-logs/clear');
const getVolOrders = (params) => wxRequest(params, host + '/shop/v1/orders');
const getVolJoins = (params) => wxRequest(params, host + '/shop/v1/joins');
const getVolDraw = (params) => wxRequest(params, host + '/shop/v1/draw-logs');
const getVolProblems = (params) => wxRequest(params, host + '/shop/v1/problems');
// 首页+搜索店铺、福袋//
const getSearchStore = (params) => wxRequest(params, host + '/shop/v1/searches/store');
const getVolSearch = (params) => wxRequest(params, host + '/shop/v1/search-logs');
const getVolSearchClear = (params) => wxRequest(params, host + '/shop/v1/search-logs/clear');
const getVolRemaining = (params) => wxRequest(params, host + '/shop/v1/wallet-shows/remaining');
const getVolTotal = (params) => wxRequest(params, host + '/shop/v1/wallet-shows/total');
//设置//
const getVolNickname = (params) => wxRequest(params, host + '/shop/v1/users/nickname');
const getVolSex = (params) => wxRequest(params, host + '/shop/v1/users/sex');
const getVolSexType = (params) => wxRequest(params, host + '/shop/v1/users/sex-type');
const getVolBirthday = (params) => wxRequest(params, host + '/shop/v1/users/birthday');
const getVolArea = (params) => wxRequest(params, host + '/shop/v1/users/area');
const getVolAvatar = (params) => wxRequest(params, host + '/shop/v1/users/'+ params.id +'/avatar');

// 福袋,店铺详情,店铺福袋/数量  店铺banner//
const getStoreBanner = (params) => wxRequest(params, host + '/shop/v1/store-shows/'+params.id+'/banner');
const getCarousel = (params) => wxRequest(params, host + '/shop/v1/wallet-shows/'+ params.id);
const getDraw = (params) => wxRequest(params, host + '/shop/v1/wallets/'+ params.id + '/draw');
const getFindWallet = (params) => wxRequest(params, host + '/shop/v1/searches/find-wallet');
const getStoreShows = (params) => wxRequest(params, host + '/shop/v1/store-shows/' + params.id);
const getStoreWallet = (params) => wxRequest(params, host + '/shop/v1/store-shows/'+params.id + '/wallet');
const getStoreWalletCount = (params) => wxRequest(params, host + '/shop/v1/store-shows/'+params.id+'/wallet-count');
// 用户福袋/福袋统计
const getUserWallets = (params) => wxRequest(params, host + '/shop/v1/user-wallets');
const getUserWalletCount = (params) => wxRequest(params, host + '/shop/v1/user-wallets/count');
const getWalletId = (params) => wxRequest(params, host + '/shop/v1/user-wallets/'+ params.id);
const getNear = (params) => wxRequest(params, host + '/shop/v1/user-wallets/near');
const getNearNum = (params) => wxRequest(params, host + '/shop/v1/user-wallets/near-num');

// 创建订单，去买单/删除订单,订单详情,支付详情
const getSetOrder = (params) => wxRequest(params, host + '/shop/v1/orders');
const getOrderDetail = (params) => wxRequest(params, host + '/shop/v1/orders/'+ params.id);
const getOrders = (params) => wxRequest(params, host + '/shop/v1/orders/'+ params.id + '/wallet');
const getDelete = (params) => wxRequest(params, host + '/shop/v1/orders/'+ params.id+ '/delete');
const getPingparams = (params) => wxRequest(params, host + '/shop/v1/orders/' + params.id+ '/pay')
// 福袋展示/分享
const getDrawlogs = (params) => wxRequest(params, host + '/shop/v1/wallet-shows/draw-logs');
// 通知列表、详情
const getmessages = (params) => wxRequest(params, host + '/shop/v1/messages');
const getmessageDetail = (params) => wxRequest(params, host + '/shop/v1/messages/'+ params.id);

// 意见反馈
const getFeedbacksType = (params) => wxRequest(params, host + '/shop/v1/feedbacks/types');
const getVolsFeedbacked = (params) => wxRequest(params, host + '/shop/v1/feedbacks');

// 支付成功，关闭订单
const getOrderSuccess = (params) => wxRequest(params, host + '/shop/v1/orders/'+params.id+'/success');
const getOrderClose = (params) => wxRequest(params, host + '/shop/v1/orders/'+params.id+'/close');

module.exports = {
  getVolById,
  getVolIdList,
  getCommonBanner,
  getVolOrders,
  getCommonCodes,
  getCommonCategories,
  getCommonLocation,
  getCommonIs_open,
  getVolIdClear,
  getVolSearch,
  getVolSearchClear,
  getVolsFeedbacked,
  getVolJoins,
  getCarousel,
  getVolDraw,
  getVolProblems,
  getVolRemaining,
  getlogin,
  getCommonCodeType,
  getVolTotal,
  getCommonLoginCodes,
  getVolNickname,
  getFindWallet,
  getStoreShows,
  getDraw,
  getUserWallets,
  getNear,
  getNearNum,
  getVolSex,
  getVolSexType,
  getVolBirthday,
  getVolArea,
  getProvince,
  getRegions,
  getCommonModify,
  getCommonBinging,
  getOrders,
  getPingparams,
  getSetOrder,
  getSearchStore,
  getWalletId,
  getStoreWallet,
  getDrawlogs,
  getVolAvatar,
  getCommonFiles,
  getUserWalletCount,
  getCommonChildFour,
  getmessages,
  getmessageDetail,
  getCommonChilds,
  getFeedbacksType,
  getDelete,
  getStoreWalletCount,
  getCommonloginCoding,
  getStoreBanner,
  getOrderSuccess,
  getOrderClose,
  getOrderDetail
};
