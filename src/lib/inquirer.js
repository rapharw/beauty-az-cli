const inquirer = require('inquirer');

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your GitHub username or e-mail address:',
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your password.';
          }
        }
      }
    ];

    return inquirer.prompt(questions);
  },

  askIgnoreFiles: (filelist) => {

  },

  input: () => {

  },


  select: (name, message, choices) => {
    const questions = [{
      type: 'rawlist',
      name: name,
      message: message,
      choices: choices
    }
    ];
    return inquirer.prompt(questions);
  },


  selectMultiple: (name, message, choices) => {
    const questions = [{
      type: 'checkbox',
      name: name,
      message: message,
      choices: choices
    }
    ];
    return inquirer.prompt(questions);
  }
};