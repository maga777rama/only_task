import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildWebpack } from "./config/build/buildWebpack";
import {
    BuildMode,
    BuildPaths,
    BuildPlatform,
} from "./config/build/types/types";
import path from "path";

export interface IEnvVariables {
    mode?: BuildMode;
    port?: number;
    platform?: BuildPlatform;
}

export default (env: IEnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, "build"),
        entry: path.resolve(__dirname, "src", "main.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        public: path.resolve(__dirname, "public"),
        src: path.resolve(__dirname, "src"),
    };

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? "development",
        paths,
        platform: env.platform ?? "mobile",
    });

    return config;
};
