type SidebarMenu = {
    icon ?: string
    title : string
    children ?: [SidebarMenu]
}

const sidebarMenu:[SidebarMenu] = [
    {
        title: "Dashboard",
    },
]

export default sidebarMenu