import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        sidebar: {
            dashboard: 'dashboard',
            weather: 'weather',
            todos: 'todos',
            profile: 'profile',
            logout: 'logout',
        },
        profile: {
            hello: 'Hi'
        },
        dashboard: {
            welcome: 'welcome to dashboard'
        },
        todo: {
            title: 'Todos',
            inputTitle: 'Task Name',
            buttonTitle: 'add task',
            notFound: 'no data'
        },        
        weather: {
            title: 'Weather',
            inputTitle: 'City Name',
            buttonTitle: 'submit',
            notFound: 'no data'
        },

    },
    fa: {
        sidebar: {
            dashboard: 'داشبورد',
            weather: 'آب و هوا',
            todos: 'تسک ها',
            profile: 'حساب کاربری',
            logout: 'خروج',
        },
        dashboard: {
            welcome: 'به داشبورد خوش آمدید'
        },
        todo: {
            title: 'تسک ها',
            inputTitle: 'اسم تسک',
            buttonTitle: 'افزودن',
            notFound: 'اطلاعاتی موجود نیست'
        },        
        weather: {
            title: 'آب و هوا',
            inputTitle: 'اسم شهر',
            buttonTitle: 'ارسال',
            notFound: 'اطلاعاتی موجود نیست'
        },
        profile: {
            hello: 'سلام'
        },

    }
}

// Create VueI18n instance with options
export default createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    legacy: false,
    messages,
    globalInjection: true
})