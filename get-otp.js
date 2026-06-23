const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findUnique({ where: { email: "dearsakirul@gmail.com" } });
  if (user) {
    console.log("CURRENT_OTP:" + user.resetOtp);
  } else {
    console.log("USER_NOT_FOUND");
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
