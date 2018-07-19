/**
 * Created by Administrator on 2018/7/17.
 */
import wepy from 'wepy'

export default class getUserInfo extends wepy.mixin {
  data = {}
  getUserInfo() {
    // 查看是否授权
    wepy.getUserInfo().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    wepy.getSetting().then(res => {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
      }
    })
  }
}
