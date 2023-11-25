import { ref } from "vue"
import i18n from "@/i18n"
type Locales = 'fa' | 'en'
const locales = ref(['en', 'fa'])
export const useLanguage = () => {

    function supportedLanguages () {
        return locales.value
    }
    function setNewLang(newLang: string, dir: string) {
        i18n.global.locale.value = newLang as Locales
        const html = document.querySelector('html') as HTMLElement 
        html.setAttribute('lang', newLang)
        html.setAttribute('dir', dir)
    }
    return { supportedLanguages, setNewLang }
}