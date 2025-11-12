exports.render = function (req, res) {
    const myName = 'William Vercetti';
    const listHeader = 'The MEAN Stack';

    // MEAN Stack definitions
    const definitions = [
        {
            term: 'MongoDB',
            description:
                'MongoDB is a NoSQL document database that stores data in flexible JSON-like documents.'
        },
        {
            term: 'Express',
            description:
                'Express is a minimal and flexible Node.js web framework used to build server-side applications.'
        },
        {
            term: 'Angular',
            description:
                'Angular is a front-end JavaScript framework for building dynamic, single-page client applications.'
        },
        {
            term: 'Node.js',
            description:
                'Node.js is a JavaScript runtime that lets developers run JavaScript code on the server side.'
        }
    ];
    res.render('index', {
        name: myName,
        headerTitle: listHeader,
        definitions: definitions
    });
};
