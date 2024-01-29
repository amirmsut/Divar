import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { paths } from "./src/constants/paths";

// const paths = [
//     "src",
//     "assets",
//     "components",
//     "configs",
//     "pages",
//     "router",
//     "services",
//     "styles",
//     "utils",
// ];

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        // alias: {
        //     src: "/src",
        //     services: "/src/services",
        //     utils: "/src/utils",
        // },
        alias: {
            ...paths.reduce(
                (acc, cur) => ({
                    ...acc,
                    [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
                }),
                ""
            ),
        },
    },
});
