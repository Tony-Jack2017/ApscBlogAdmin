import instance from "./config/http";

export function getArticleList() {
   return instance.get("/article/list")
}

export function createArticle(data: any) {
    return instance.post("/article/create", data)
}