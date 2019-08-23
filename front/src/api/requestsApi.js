import { HTTP } from "../common/http-common"
import store from "./../store"


function getConfig() {
  const token = store.state.accessToken
  if (!token) {
    throw "Token not found"
  }

  return {
    validateStatus: false,
    headers: { Authorization: `Bearer ${token}` }
  }
}

export async function getProductById(id) {
  try {
    const apiRes = await HTTP.get(`products/${id}`, getConfig())
    return apiRes.data
  } catch (err) {
    console.log(err.response.data.message)
  }
}

export async function updateProduct(id, product) {
  try {
    // product.price = product.price.replace(",", ".")
    product.price = parseFloat(product.price)
    product.weight = parseFloat(product.weight)
    const apiRes = await HTTP.put(`products/${id}`, product, getConfig())
    return apiRes
  } catch (err) {
    console.log(err)
  }
}

export async function removeProduct(id) {
  try {
    const apiRes = await HTTP.delete(`products/${id}`, getConfig())
    return apiRes
  } catch (err) {
    console.log(err.response.data.message)
  }
}

export async function reativeItem(id) {
  try {
    const apiRes = await HTTP.patch(`products/${id}`, {}, getConfig())
    return apiRes
  } catch (err) {
    console.log(err.response.data.message)
  }
}

export async function getAllProducts() {
  return await getProducts("products")
}

export async function getActiveProducts() {
  return await getProducts("products/active")
}

export async function getRemovedProducts() {
  return await getProducts("products/removed")
}

async function getProducts(url) {
  const data = await HTTP.get(url, getConfig())
  if (data.status === 200) {
    return data.data
  }
}

export async function createProduct(product) {
  try {
    product.price = product.price.replace(",", ".")
    product.price = parseFloat(product.price)
    product.weight = parseFloat(product.weight)
    const apiRes = await HTTP.post("products", product, getConfig())
    return apiRes
  } catch (err) {
    console.log(err.response.data.message)
  }
}

export async function getHistory() {
  try {

    const apiRes = await HTTP.get("history", getConfig())
    return apiRes
  } catch (err) {
    console.log(err.response.data.message)
  }
}

export async function getAllUsers() {
  try {
    const apiRes = await HTTP.get("auth/users", getConfig())
    return apiRes.data
  } catch (err) {
    console.log(err.response.data.message)
  }
}

export async function createUser(user) {
  try {
    user.isadmin = true
    const apiRes = await HTTP.post("auth/signup", user)
    return apiRes
  } catch (err) {
    console.log(err)
  }
}
export async function getResumes() {
  try {
    const apiRes = await HTTP.get("products/resume", getConfig())
    return apiRes
  } catch (err) {
    console.log(err.response.data.message)
  }
}
