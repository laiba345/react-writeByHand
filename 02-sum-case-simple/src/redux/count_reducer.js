const initState = 0
// 因为此处被store调用了，通过createStore(countReducer)进行了相应的创建操作
export default function countReducer(preState = initState, action) {
    if (preState === undefined) preState = 0
    // store.dispatch({ type: "increment", data: value * 1 });
    // 组件在进行调用dispatch的时候，就是可以得到方法type， 以及数据data
    // 其中countReducer中状态就是perState以及action
    const { type, data } = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}