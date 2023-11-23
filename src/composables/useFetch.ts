import { ref, type Ref } from "vue"

const baseUrl = `http://api.openweathermap.org/data/2.5`
export const key = 'edc228562ac0a8aa3116d41c0687cf56' 
type Option = RequestInit & {method: 'post' | 'get' | 'put'}
export const useFetch = async <T>(url: string, option: Option) => {
    const data = ref(null)
    const res = await fetch(`${baseUrl}${url}`, {...option})
    data.value = await res.json()
    return data as Ref<T>
}