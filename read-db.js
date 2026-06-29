const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const invs = await prisma.investigation.findMany();
  console.log(JSON.stringify(invs, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
