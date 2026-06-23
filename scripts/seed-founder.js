const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = "dearsakirul@gmail.com";
  const password = "founder-temp-password";

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log("Founder already exists.");
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: {
      email,
      passwordHash,
      name: "Founder",
      role: "ADMIN"
    }
  });
  console.log("Created Founder account: " + email + " with temporary password: " + password);
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
