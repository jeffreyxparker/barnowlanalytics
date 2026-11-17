import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Archived DTC site: a frozen static export in public/dtc, reachable only by
  // direct URL. Not linked, not in the sitemap, and marked noindex.
  async rewrites() {
    return [
      { source: "/dtc", destination: "/dtc/index.html" },
      { source: "/dtc/", destination: "/dtc/index.html" },
    ];
  },
  async headers() {
    return [
      {
        source: "/dtc/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      { source: "/dtc", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
    ];
  },
};

export default nextConfig;
