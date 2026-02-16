import type { NextConfig } from "next";

// @ts-ignore: ライブラリの型定義の問題を回避
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // 開発中はPWA機能を無効化
});

const nextConfig: NextConfig = {
  /* config options here */

  // ★追加: PWAプラグインによるWebpack設定との競合エラーを回避する
  // (もし型エラーが出る場合は // @ts-ignore を上の行に追加してください)
  turbopack: {},
};

export default withPWA(nextConfig);