const validateLanguage = (language) => {
  if (!language.Title || !language.Level) {
      throw new Error('Language title and level are required.');
  }
};

const addLanguage = (person, language) => {
  validateLanguage(language);
  person.Languages.push(language);
  console.log(`Language ${language.Title} with level${language.Level} added to ${person.FirstnName}`);
};

const removeLanguage = (person, languageTitle) => {
  person.Languages = person.Languages.filter(lang => lang.Title !== languageTitle);
  console.log(`Language ${language.Title} removed from ${person.FirstnName}`);
};

const listLanguages = (data) => {
  for (const [key, person] of Object.entries(data)) {
      console.log(`${person.FirstnName}'s languages:`);
      person.Languages.forEach(lang => {
          console.log(`- ${lang.Title}: ${lang.Level}`);
      });
  }
};

const readPerson = (data, personName) => {
  const person = data[personName];
  if (!person) {
      throw new Error('Person not found.');
  }
  console.log('Information about', personName + ':', person);
};


module.exports = {
  addLanguage,
  removeLanguage,
  listLanguages,
  readPerson
};

