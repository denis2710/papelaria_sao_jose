const Menu = [
  {
    title: "Dashboard",
    group: "dashboard",
    icon: "dashboard",
    name: "Dashboard"
  },
  // { header: "Produtos" },
  {
    title: "Produtos",
    group: "produtos",
    component: "widgets",
    icon: "view_carousel",
    items: [
      { name: "list_produtos", title: "Listar Produtos", component: "AllProducts" },
      { name: "create_product", title: "Cadastrar Produtos", component: "CreateProduct" },
      { name: "active_products", title: "Produtos Ativos", component: "ActiveProducts" },
      { name: "removed_products", title: "Produtos Removidos", component: "RemovedProducts" }
    ]
  },
  {
    title: "Histórico",
    group: "historico",
    icon: "timeline",
    name: "historico",
    items: [{ name: "history", title: "Histórico de Alterações", component: "History" }]
  },
  {
    title: "Usuários",
    group: "usuarios",
    icon: "people",
    name: "usuarios",
    items: [
      { name: "list_user", title: "Listar usuários", component: "ListUsers" },
      { name: "create_user", title: "Criar Usuários", component: "CreateUser" },
    ]
  }
]
// reorder menu
Menu.forEach(item => {
  // if (item.items) {
  //   item.items.sort((x, y) => {
  //     let textA = x.title.toUpperCase()
  //     let textB = y.title.toUpperCase()
  //     return textA < textB ? -1 : textA > textB ? 1 : 0
  //   })
  // }
})

export default Menu
