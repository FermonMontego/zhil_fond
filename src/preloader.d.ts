import preloader from "./plugins/preloader.ts";

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $preloader: (value: any) => any
    }
}
