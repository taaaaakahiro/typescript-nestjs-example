import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const users = [
    { id: 1, mail: 'test1@gmail.com' },
    { id: 2, mail: 'test2@gmail.com' },
    { id: 3, mail: 'test3@gmail.com' },
  ];

  const profiles = [
    { id: 1, name: 'name1', userId: 1 },
    { id: 2, name: 'name2', userId: 2 },
    { id: 3, name: 'name3', userId: 3 },
  ];

  const todo = [
    { id: 1, text: 'text1', userId: 1 },
    { id: 2, text: 'text2', userId: 2 },
    { id: 3, text: 'text3', userId: 3 },
  ];
  // Cleanup
  await prisma.profile.deleteMany();
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  //Start Seeding
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
          id: p.id,
          name: p.name,
          userId: p.userId,
        },
      });
    }),
  );

  await Promise.all(
    todo.map((t) => {
      return prisma.todo.create({
        data: {
          id: t.id,
          text: t.text,
          userId: t.userId,
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
