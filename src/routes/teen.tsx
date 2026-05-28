import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/teen")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
