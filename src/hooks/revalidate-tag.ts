import type { AfterChangeHook } from "payload/dist/collections/config/types";

export const revaildateTag = async ({ key, doc, req }) => {
  if (
    (process.env.PAYLOAD_PUBLIC_BASE_DNS as string) === "http://localhost:3000"
  )
    return doc;

  const revalidate = async (): Promise<void> => {
    const url = `${process.env.PAYLOAD_PUBLIC_APP_URL}/api/revalidate`;
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(key),
        headers: {
          secret: process.env.REVALIDATE_SECRET,
        },
      });

      if (res.ok) {
        req.payload.logger.info(`Revalidated tags ${key}`);
      } else {
        req.payload.logger.error(`Error revalidating tag ${key}`);
      }
    } catch (err: unknown) {
      req.payload.logger.error(
        `Error hitting revalidate route for tag: ${key}`
      );
    }
  };

  revalidate();

  return doc;
};
