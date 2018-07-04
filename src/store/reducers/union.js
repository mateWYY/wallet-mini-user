import {handleActions} from 'redux-actions'
import {SET_WEIXINID, SET_PHONE, SET_USER, SET_PORTRIANT} from '../types/index'
export default handleActions({
  [SET_PORTRIANT](state, action) {
    console.log(action);
    return {
      ...state,
      headName: action.headName
    }
  },
  [SET_WEIXINID](state, action) {
    console.log(action);
    return {
      ...state,
      weixinUserId: action.weixinUserId,
    }
  },
  [SET_USER](state, action) {
    console.log(action);
    return {
      ...state,
      avatarUrl: action.avatarUrl,
      Tphone: action.Tphone,
      nickname: action.nickname,
    }
  },
  [SET_PHONE](state, action) {
    console.log(action);
    return {
      ...state,
      phone: action.phone
    }
  },
}, {
  weixinUserId: {},
  phone: '',
  avatarUrl: '',
  Tphone: '',
  nickname: '',
  headName: {},
  store_name: '',
  province_id: '',
  city_id: '',
  region_id: '',
  phones: '',
  category_id: ''
})
