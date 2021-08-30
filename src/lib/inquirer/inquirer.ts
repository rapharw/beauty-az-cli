import inquirer from 'inquirer';
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

import Choice from "../../lib/inquirer/choice";

export default {

  templateInput: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your username or e-mail address:',
        validate: function (value: any) {
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
        validate: function (value: any) {
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


  inputText: (name: string, message: string, validation: Function) => {
    const questions = [
      {
        name: name,
        type: 'input',
        message: message,
        validate: validation
      }
    ];

    return inquirer.prompt(questions);
  },


  inputPassword: (name: string, message: string, validation: Function) => {
    const questions = [
      {
        name: name,
        type: 'password',
        message: message,
        validate: validation
      }
    ];
    return inquirer.prompt(questions);
  },


  inputTextAutocomplete: (name: string, message: string, choices: Choice[]) => {
    const questions = [
      {
        name: name,
        type: 'autocomplete',
        message: message,
        default: 'a',
        suggestOnly: false,
        pageSize: 15,
        source: function (answersSoFar: [], input: string) {
          input = input || '';
          return choices.filter((choice: Choice) => choice.name.toLowerCase().startsWith(input.toLowerCase()));
        }
      }
    ];

    return inquirer.prompt(questions);

  },

  select: (name: string, message: string, choices: Choice[]) => {
    const questions = [{
      type: 'rawlist',
      name: name,
      message: message,
      choices: choices
    }
    ];
    return inquirer.prompt(questions);
  },


  selectMultiple: (name: string, message: string, choices: Choice[]) => {
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
