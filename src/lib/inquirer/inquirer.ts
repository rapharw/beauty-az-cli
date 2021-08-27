import inquirer from 'inquirer';
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
