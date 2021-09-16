
/**
 * 获取所有模版组件
 * @returns 模版组件列表
 */
function getComponent() {
    const componentConfig = [];
    const requireConfig = require.context(
        '../components',
        // 是否查询其子目录
        true,
        /package.json$/
    );
    requireConfig.keys().forEach(fileName => {
        const config = requireConfig(fileName);
        componentConfig.push(config);
    });
  
    return componentConfig;
}

let config = {
    componentConfig: getComponent(),
    // pageConfig: getPageConfig()
};
  
  
export {
    config
}

/**
 * 模版间通信 (iframe通信)
 * @param {*} message 
 */
export function postMsgToParent (message) {
    window.parent.postMessage(
        message,
        '*'
    );
}