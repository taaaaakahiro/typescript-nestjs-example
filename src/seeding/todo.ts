import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const users = [
    {id: 1, mail: 'test1@gmail.com' },
    {id: 2, mail: 'test2@gmail.com' },
    {id: 3, mail: 'test3@gmail.com' },
  ];

  const profiles = [
    { name: 'name1', userId: 1 },
    { name: 'name2', userId: 2 },
    { name: 'name3', userId: 3 },
  ];

  const todo = [
    { name: 'name1', userId: 1 },
    { name: 'name2', userId: 2 },
    { name: 'name3', userId: 3 },
  ];

  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  await Promise.all(
    users.map((u) => {
      return prisma.user.create({
        data: {
          id: u.id,
          email: u.mail,
        },
      });
    }),
  );

  await Promise.all(
    profiles.map((p) => {
      return prisma.profile.create({
        data: {
          name: p.name,
          userId: p.userId,
        },
      });
    }),
  );
}

main()
  .then(async () => {
    // 実行後に接続を切る
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // エラーハンドリング
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
