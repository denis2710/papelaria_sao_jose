import { AuthLayout, DefaultLayout, ChatLayout } from "@/components/layouts"

export const publicRoute = [
  { path: "*", component: () => import(/* webpackChunkName: "errors-404" */ "@/views/error/NotFound.vue") },
  {
    path: "/auth",
    component: AuthLayout,
    meta: { title: "Login" },
    hidden: true,
    redirect: "/login",
    children: [
      {
        path: "/auth/login",
        name: "login",
        meta: { title: "Login" },
        component: () => import("@/views/auth/Login.vue")
      },
      {
        path: "/auth/create",
        name: "create",
        meta: { title: "Create" },
        component: () => import("@/views/auth/Create.vue")
      }
    ]
  },


  {
    path: "/contacriada",
    component: () => import("@/views/auth/ContaCriada.vue")
  },

  {
    path: "/404",
    name: "404",
    meta: { title: "Not Found" },
    component: () => import(/* webpackChunkName: "errors-404" */ "@/views/error/NotFound.vue")
  },

  {
    path: "/500",
    name: "500",
    meta: { title: "Server Error" },
    component: () => import(/* webpackChunkName: "errors-500" */ "@/views/error/Error.vue")
  }
]

export const protectedRoute = [
  {
    path: "/",
    component: DefaultLayout,
    meta: { title: "Home", group: "apps", icon: "" },
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        meta: { title: "Home", group: "apps", icon: "dashboard" },
        component: () => import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
      },

      {
        path: "/403",
        name: "Forbidden",
        meta: { title: "Access Denied", hiddenInMenu: true },
        component: () => import(/* webpackChunkName: "error-403" */ "@/views/error/Deny.vue")
      }
    ]
  },

  //Products
  {
    path: "/products",
    component: DefaultLayout,
    meta: { title: "Produtos", icon: "widgets", group: "product" },
    redirect: "/products/all",
    children: [
      {
        path: "/products/all",
        name: "AllProducts",
        meta: { title: "Todos Produtos" },
        component: () => import( "@/views/products/ListAll.vue")
      },
      {
        path: "/products/active",
        name: "ActiveProducts",
        meta: { title: "Produtos Ativos" },
        component: () => import( "@/views/products/ListActives.vue")
      },
      {
        path: "/products/create",
        name: "CreateProduct",
        meta: { title: "Cadastrar Produto" },
        component: () => import("@/views/products/CreateProduct.vue")
      },
      {
        path: "/products/edit/:id",
        name: "EditProduct",
        meta: { title: "Editar Produto" },
        component: () => import("@/views/products/EditProdutcs.vue")
      },
      {
        path: "/products/removed",
        name: "RemovedProducts",
        meta: { title: "Produtos Removidos" },
        component: () => import("@/views/products/RemovedProducts.vue")
      },
      {
        path: "/products/active",
        name: "ActivesProducts",
        meta: { title: "Produtos Ativos" },
        component: () => import(/* webpackChunkName: "list-widget" */ "@/views/products/ActivesProducts.vue")
      },
    ]
  },

  //History
  {
    path: "/history",
    component: DefaultLayout,
    meta: { title: "History", icon: "widgets", group: "product" },
    redirect: "/history",
    children: [
      {
        path: "/history",
        name: "History",
        meta: { title: "Histórico" },
        component: () => import("@/views/history/History.vue")
      }
    ]
  },

  //Users
  {
    path: "/user",
    component: DefaultLayout,
    meta: { title: "Usuários", icon: "widgets", group: "product" },
    redirect: "/users/all",
    children: [
      {
        path: "/users/all",
        name: "ListUsers",
        meta: { title: "Usuários" },
        component: () => import("@/views/users/ListUsers.vue")
      },
      {
        path: "/users/create",
        name: "CreateUser",
        meta: { title: "Usuários" },
        component: () => import("@/views/users/CreateUser.vue")
      }
    ]
  }
]
