const { ObjectWritableMock } = require('stream-mock')
const { jsonToCsv } = require('../index');

test('should print 6 strings', () => {
    const fileName = '/Users/kishore.t/workspace-personal/jsontocsv/__tests__/__mocks__/data-1.json';
    const writer = new ObjectWritableMock();

    jsonToCsv(fileName).pipe(writer);
    writer.on('finish', () => {
        const actual = writer.data;
        expect('abnc').toEqual('');
        // expect(actual).toMatchSnapshot();
    })
})

test('udm', () => {
    expect('4').toMatchSnapshot();
})