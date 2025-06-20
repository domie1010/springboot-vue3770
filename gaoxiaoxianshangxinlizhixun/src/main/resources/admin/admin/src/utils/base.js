const base = {
    get() {
        return {
            url : "http://localhost:8080/gaoxiaoxianshangxinlizhixun/",
            name: "gaoxiaoxianshangxinlizhixun",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gaoxiaoxianshangxinlizhixun/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校线上心理咨询室"
        } 
    }
}
export default base
