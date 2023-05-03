const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({name : "Beatles", genre : "rock"});
        expect(testBand.name).toBe("Beatles");
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({name : "Paul", instrument : "guitar"})
        expect(testMusician.instrument).toBe('guitar');
    })
    test('can create a Song', async () => {
        // TODO - test creating a song
        const testSong = await Song.create({title : "Hey Jude", year : 1968, length : 432})
        expect(testSong.title).toBe('Hey Jude');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const testBand = await Band.create({name : "Beatles", genre : "rock"});
        const updateBand = await testBand.update({name : "The Beatles"});
        expect(testBand.name).toBe('The Beatles');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const testMusician = await Musician.create({name : "Paul", instrument : "guitar"})
        const updateMusician = await testMusician.update({name : "Paul McCartney"})
        expect(updateMusician.name).toBe('Paul McCartney');
    })
    test('can update a Song', async () => {
        // TODO - test updating a song
        const testSong = await Song.create({title : "Hey Jude", year : 1968, length : 432})
        const updateSong = await testSong.update({length : 433})
        expect(updateSong.length).toEqual(433);
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const testBand = await Band.create({name : "Beatles", genre : "rock"});
        const deleteBand = await testBand.destroy({where : {name : "Beatles"}});

        expect(deleteBand.name).toBe('Beatles');
        //expect(testBand.name).toBe(null);
    })

    // test('can delete a Musician', async () => {
    //     // TODO - test deleting a musician
    //     expect('NO TEST').toBe('EXPECTED VALUE HERE');
    // })
})
