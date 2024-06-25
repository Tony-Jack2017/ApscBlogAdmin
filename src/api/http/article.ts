import instance from "../config/http";

export function getArticleList() {
   return instance.get("/article/list")
}

export function createArticle(data: any) {
    return instance.post("/article/create", data)
}

export function getArticleTagList() {
    return instance.get("/article/tag/list")
}

export function createArticleTag(data: any) {
    return instance.post("/article/tag/create", data)
}