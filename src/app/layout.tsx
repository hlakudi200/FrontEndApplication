"use client";

import ToastProvider from "@/providers/ToastProvider/toast";
import "./globals.css";
import { ConfigProvider, theme } from "antd";
import React from "react";
import CustomFooter from "@/_components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { darkAlgorithm } = theme; 

  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#f5222d",
            colorInfo: "#f5222d",
            sizeStep: 6,
            borderRadius: 5,
            wireframe: false,
            fontSize: 17,
          },
          components: {
            Button: {
              contentFontSize: 14,
              contentFontSizeLG: 15,
              contentFontSizeSM: 0,
              contentLineHeightLG: 7.5,
              paddingBlock: 4,
              controlHeight: 49,
              algorithm: true,
            },
            Input: {
              controlHeight: 48,
              lineWidth: 2,
              borderRadius: 15,
              activeBg: "rgb(33,32,32)"
            },
            Layout: {
              headerHeight: 55,
              headerBg: "rgb(34,36,38)",
            },
            Spin: {
              dotSize: 57,
              fontSize: 25,
              motionDurationMid: "0.1s",
            },
            Carousel: {
              dotHeight: 12,
            },
            Select: {
              controlHeight: 49,
              borderRadius: 15,
            }
          },
          algorithm: darkAlgorithm,
        }}
      >
        <ToastProvider/>
        <body>{children}
          <CustomFooter/>
        </body>
      </ConfigProvider>
    </html>
  );
}
