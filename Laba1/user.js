const yargs = require('yargs');
const { addLanguage, removeLanguage, listLanguages } = require('./user');
const data = require('./user.json');


yargs.command({
    command: 'add',
    describe: 'Add a language to a person',
    builder: {
        person: {
            describe: 'Person to add language to',
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'Title of the language',
            demandOption: true,
            type: 'string'
        },
        level: {
            describe: 'Level of proficiency',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const person = data[argv.person];
        const language = {
            Title: argv.title,
            Level: argv.level
        };

        try {
            addLanguage(person, language);
            console.log(`Language ${argv.title} with level${argv.level} added to ${person.FirstnName}`);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
});


yargs.command({
    command: 'remove',
    describe: 'Remove a language from a person',
    builder: {
        person: {
            describe: 'Person to remove language from',
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'Title of the language to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const person = data[argv.person];

        try {
            removeLanguage(person, argv.title);
            console.log(`Language ${argv.title} removed from ${person.FirstnName}`);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
});

yargs.command({
    command: 'list',
    describe: 'List languages for each person',
    handler() {
        try {
            listLanguages(data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
});

yargs.command({
  command: 'read',
  describe: 'Read information about a person',
  builder: {
      person: {
          describe: 'Person to read information about',
          demandOption: true,
          type: 'string'
      }
  },
  handler(argv) {
      try {
          const personInfo = readPerson(data, argv.person);
          console.log('Information about', argv.person + ':', personInfo);
      } catch (error) {
          console.error('Error:', error.message);
      }
  }
});

yargs.parse();