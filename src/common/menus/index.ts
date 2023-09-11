type SidebarMenu = {
    icon ?: string
    title : string
    children ?: [SidebarMenu]
}

const sidebarMenu:[SidebarMenu] = [
    {
        title: "测试"
    }
]

export default sidebarMenu