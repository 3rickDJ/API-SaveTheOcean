const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        const seaTurtle = await prisma.animal.upsert({
            where: { name: 'SEA TURTLE' },
            update: {},
            create: {
                name: 'SEA TURTLE',
                scientificName: 'Cheloniidae and Dermochelyidae families',
                type: 'null',
                amountAlive: 10,
                info: 'Over the last 200 years, human activities have tipped the scales against the survival of these ancient mariners. Slaughtered for their eggs, meat, skin, and shells, sea turtles suffer from poaching and over-exploitation',
                location: 'Open water and coasts',
                image: 'url'
            },
        });

        const animal2 = await prisma.animal.upsert({
            where: { name: 'animal2' },
            update: {},
            create: {
                name: 'animal2',
                scientificName: 'cientific_name',
                type: 'show_type',
                amountAlive: 9,
                info: 'info_text',
                location: 'location_text',
                image: 'url'
            },
        });

        const animal3 = await prisma.animal.upsert({
            where: { name: 'animal3' },
            update: {},
            create: {
                name: 'animal3',
                scientificName: 'cientific_name',
                type: 'show_type',
                amountAlive: 9,
                info: 'info_text',
                location: 'location_text',
                image: 'url'
            },
        });

        const animal4 = await prisma.animal.upsert({
            where: { name: 'animal4' },
            update: {},
            create: {
                name: 'animal4',
                scientificName: 'cientific_name',
                type: 'show_type',
                amountAlive: 9,
                info: 'info_text',
                location: 'location_text',
                image: 'url'
            },
        });


        // console.log('Created (added)  5 animals');
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();
