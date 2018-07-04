import wepy from 'wepy'
import pingpp from '../util/pingpp'

export default class payMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    payMent () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }
  payMent(charge) {
    return new Promise((resolve, reject) => {
      pingpp.createPayment(charge, function(result, err) {
        if (result=="success") {
          resolve(result + '支付成功')
        } else {
          reject(result+" "+err.msg+" "+err.extra);
        }
      });
    })
  }
}
