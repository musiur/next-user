import React from "react";
import { Button } from "antd";
import Link from "next/link";

const Home = () => (
  <div className="container py-32">
    <Link href="/dashboard">
      <Button type="primary">Go to dashboard</Button>
    </Link>
  </div>
);

export default Home;
