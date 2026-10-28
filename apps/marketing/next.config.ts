import type { NextConfig } from "next";
import { fireweaveDefine } from "@fireweaveai/web-sdk/define";

const define = fireweaveDefine();

const nextConfig: NextConfig = {
  transpilePackages: ["@clinic/ui"],
  eslint: { ignoreDuringBuilds: true },
  webpack(config, { webpack }) {
    config.plugins.push(new webpack.DefinePlugin(define));
    return config;
  },
};

export default nextConfig;
