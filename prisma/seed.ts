import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const user = await prisma.user.create({
    data: {
      login: 'super user',
      rating: 1111,
      passwordHash: "asdsad2314asdasd123"  
    }
  })   
  await prisma.game.create({
    data: {
      field: Array(9).fill(null),
      status: 'idle',
      players: {
        connect: {
          id: user.id,
        }
      }
    }
  })  
  await prisma.game.create({
    data: {
      field: Array(9).fill(null),
      status: 'idle',
      players: {
        connect: {
          id: user.id,
        }
      }
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