import ajax from './ajax'
const proxy = './api'
// 获取首页数据
export const reqMorkHome =()=> ajax('/mock/home')

// 获取分类页数据
export const reqMorkCategory = () => ajax('/mock/category')

// 获取分类页列表数据
export const reqMorkCategoryList = () => ajax ('/mock/category/list')

// 搜索页显示热门搜索关键字
export const reqInitSearch = ()=>ajax.get(`${proxy}/xhr/search/init.json`)

// 搜索的结果
export const reqSearchKeyword = (data) => ajax.get(`${proxy}/xhr/search/searchAutoComplete.json?`,{data})

