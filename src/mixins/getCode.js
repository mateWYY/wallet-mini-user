import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    buttonText: '获取验证码',
    buttonDisable: false,
    number: 60,
    timers: ''
  }

  async getCode(getCodeApi) {
    await getCodeApi.then(res => {
      this.countDown()
      const {message} = res.data
      wepy.showToast({
        title: `${message}`,
        icon: 'none',
        duration: 1000
      })
    }).catch(err => {
      wepy.showToast({
        title: `${err.message}`,
        icon: 'none',
        duration: 1000
      })
    })
  }

  countDown() {
    this.timers = null
    clearInterval(this.timers)
    this.buttonText = `(${this.number}s)重新获取`
    this.buttonDisable = true
    if (!this.timers) {
      this.timers = setInterval(() => {
        this.number--
        if (this.number > 0) {
          this.buttonText = `(${this.number}s)重新获取`
          this.buttonDisable = true
        } else {
          this.buttonText = '获取验证码'
          this.buttonDisable = false
          clearInterval(this.timers)
          this.number = 60
        }
        this.$apply()
      }, 1000)
    }
  }
}
