const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        const totoaba = await prisma.animal.upsert({
            where: { name: 'Totoaba' },
            update: {},
            create: {
                name: 'Totoaba',
                scientificName: 'Totoaba macdonaldi',
                type: 'Sciaenidae',
                amountAlive: 2300,
                info: 'también es conocida como corvina blanca, curvinas, roncadores o tambores por su habilidad de producir sonidos con su vejiga natatoria. Es un pez muy longevo, pues llega a vivir de los 25 hasta los 50 años de edad.',
                location: 'Alto Golfo de California',
                image:'../../../../../assets/img/01.png'

            },
        });

        const tortugaCarey = await prisma.animal.upsert({
            where: { name: 'Tortuga carey' },
            update: {},
            create: {
                name: 'Tortuga carey',
                scientificName: 'Eretmochelys imbricata',
                type: 'Reptil',
                amountAlive: 8000,
                info: 'Las tortugas carey, que no son particularmente grandes comparadas con otras tortugas marinas, llegan a medir hasta 114 centímetros respecto del tamaño de su caparazón y a pesar 68 kilogramos.',
                location: 'Aguas tropicales de los océanos Atlántico, Pacífico e Índico.',
                image:'../../../../../assets/img/02.png'

            },
        });

        const vaquitaMarina = await prisma.animal.upsert({
            where: { name: 'Vaquita marina' },
            update: {},
            create: {
                name: 'Vaquita marina',
                scientificName: 'Phocoena sinus',
                type: 'Cetáceo',
                amountAlive: 30,
                info: 'Mide 150 cm de largo y pesa hasta 50 kg. Tiene una distribución muy restringida.',
                location: 'Norte del Golfo de California',
                image:'../../../../../assets/img/03.png'

            },
        });

        const BallenaAzul = await prisma.animal.upsert({
            where: { name: 'Ballena azul' },
            update: {},
            create: {
                name: 'Ballena azul',
                scientificName: 'Balaenoptera musculus',
                type: 'Cetáceo',
                amountAlive: 2000,
                info: 'Su tamaño medio es de entre 24 y 27 metros de longitud y pesan entre 100 y 120 toneladas, aunque hay registros de ejemplares de más de 30 m de longitud y 170 t de peso.',
                location: 'Atlantico Norte, Pasifico, Indico y Antartico',
                image:'../../../../../assets/img/04.png'
            },
        });

        const tiburónMartilloGigante = await prisma.animal.upsert({
            where: { name: 'Tiburón Martillo Gigante' },
            update: {},
            create: {
                name: 'Tiburón Martillo Gigante',
                scientificName: 'Sphyrna mokarran',
                type: 'Carcharhiniformes',
                amountAlive: 2000,
                info: 'Llega a medir de 0.9 hasta 6 metros y pesa cerca de 580 kg. Es conocido como uno de los depredadores más agresivos del planeta.',
                location: 'Zonas del Golfo de México.',
                image:'../../../../../assets/img/05.png'
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
