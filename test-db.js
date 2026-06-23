const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const count = await prisma.user.count();
    console.log("SUCCESS: Can connect to DB. User count:", count);
  } catch (e) {
    console.error("FAILED to connect:", e.message);
  } finally {
    await prisma.$disconnect();
  }
}
main();
