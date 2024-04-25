import router from "@/router/index";

class Jump {
    static async jumpToDetail(type, content){
        await router.push(
            {
                path:"detail",
                query:{type:type,content:content}
            }
        )
    }
}

export default Jump