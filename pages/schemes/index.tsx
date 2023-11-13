import React, { lazy, Suspense } from "react";
import { Skeleton } from "antd";
const LazySchemes = lazy(() => import("../../components/Schemes"));

export default function index() {
  return (
    <Suspense fallback={<Skeleton active />}>
      <LazySchemes />
    </Suspense>
  );
}
