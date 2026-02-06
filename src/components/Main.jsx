import React from 'react'
import Footer from './Footer'
import {Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div style={{ 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}