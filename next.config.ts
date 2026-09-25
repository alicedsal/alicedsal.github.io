import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // build to plain static files in out/, which github pages can serve
  output: "export",
};

export default nextConfig;
