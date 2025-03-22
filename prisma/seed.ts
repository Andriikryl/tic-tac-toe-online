import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.game.create({
    data: {
        naem: "game-1"
    }
  })
  await prisma.game.create({
    data: {
        naem: "game-2"
    }
  })
  
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })