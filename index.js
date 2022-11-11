import { createWriteStream, createReadStream } from "node:fs";
import Fastify from "fastify";
import formbody from "@fastify/formbody";
import PDFDocument from "pdfkit";

const fastify = Fastify({ logger: true });

fastify.register(formbody);

fastify.post("/", async (request, reply) => {
  const doc = new PDFDocument();
  doc.pipe(createWriteStream("output.pdf"))
  doc
    .fontSize(25)
    .text(JSON.stringify(request.body))
    .end();

  reply.type("application/pdf");
  return createReadStream("output.pdf");
});

try {
  fastify.listen({ port: process.env.PORT || 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
