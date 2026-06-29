const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const htmlPath = path.join(__dirname, 'planarticle', 'articledesign', 'ThePostmortem_Investigation2_V2 (1).html');
  let rawHtml = fs.readFileSync(htmlPath, 'utf8');
  
  const styleMatch = rawHtml.match(/<style>([\s\S]*?)<\/style>/);
  const styleContent = styleMatch ? `<style>${styleMatch[1]}</style>` : '';
  
  const bodyMatch = rawHtml.match(/<body>([\s\S]*?)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : rawHtml;

  const finalContent = '<!-- RAW_HTML_UPLOAD -->\n' + styleContent + '\n' + bodyContent;

  const author = await prisma.user.findFirst();
  if (!author) {
    console.error("No author found in DB!");
    return;
  }

  // Check if it already exists
  let investigation = await prisma.investigation.findUnique({
    where: { slug: 'the-last-chance-that-died' }
  });

  if (investigation) {
    investigation = await prisma.investigation.update({
      where: { slug: 'the-last-chance-that-died' },
      data: {
        title: 'The Last Chance That Died',
        excerpt: 'How Britain, Jinnah, Nehru, and Suhrawardy Together Made the Great Calcutta Killings — and Partition — Inevitable. The 80-Year Accounting No One Wanted to Hold.',
        content: finalContent,
        status: 'PUBLISHED',
        publishedAt: new Date(),
      }
    });
    console.log("Successfully updated:", investigation.title);
  } else {
    investigation = await prisma.investigation.create({
      data: {
        slug: 'the-last-chance-that-died',
        title: 'The Last Chance That Died',
        excerpt: 'How Britain, Jinnah, Nehru, and Suhrawardy Together Made the Great Calcutta Killings — and Partition — Inevitable. The 80-Year Accounting No One Wanted to Hold.',
        content: finalContent,
        status: 'PUBLISHED',
        authorId: author.id,
        publishedAt: new Date(),
        investigationCode: 'CAL-1946-002'
      }
    });
    console.log("Successfully inserted:", investigation.title);
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
