"use client"
import { useEffect, useState } from "react";
import SideNavbar from "./components/SideNavbar";

export default function Home() {
  const [data, setData] = useState(null); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api", {
          headers: {
            Accept: "application/json",
          },
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        setData(jsonData); 
      } catch (err) {
        throw err;
      }
    };

    fetchData();
  }, []); 


  return (
    <div>
      <SideNavbar/>
    </div>
  );
}
