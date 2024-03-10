import store from "../stores/store.ts";

const preloader = {
    install(app: any) {
        app.config.globalProperties.$preloader = (value: boolean) => {
            store.dispatch('setPreloader', value).then((res) => console.log(res));
        }
    }
}

export default preloader;
