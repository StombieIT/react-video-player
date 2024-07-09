import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import type { UserConfig } from "vite";

const DEFAULT_BUILD_CONFIG: UserConfig["build"] = {
    outDir: path.resolve(__dirname, "build"),
        rollupOptions: {
            external: [
                "react",
                "react-dom"
            ],
            output: {
                entryFileNames: "[name].js"
            }
    },
};

export default defineConfig(({ mode }) => {
    const build: UserConfig["build"] = {};

    if (mode === "production") {
        build.lib = {
            entry: path.resolve(__dirname, "src", "index.ts"),
            formats: ["es"]
        };
    }

    return {
        build: {
            ...DEFAULT_BUILD_CONFIG,
            ...build
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src")
            }
        },
        plugins: [
            react(),
            dts({
                entryRoot: path.resolve(__dirname, "src"),
                exclude: path.resolve(__dirname, "src", "dev"),
                tsconfigPath: path.resolve(__dirname, "src", "tsconfig.json")
            })
        ],
    };
});