const en = {
  createPassword: {
    title: 'AgiliKEY',
<<<<<<< HEAD
<<<<<<< HEAD
    newPassword: 'Creating a new account password?',
  },
  flowScreen: {
    oldPasswordFlow: 'Old Password Flow',
    newPasswordFlow: 'New Password Flow',
  },
  infoScreen: {},
  confirmationDialog: {
    completedStatus: 'All done!',
    completedClipboard: 'Your account password is now on your clipboard.',
    accountPassword: 'Account Password:',
    nextSteps: 'What would you like to do next?',
    clearClipboard: 'Clear clipboard',
    anotherPassword: 'Make another password',
    confirmOk: 'OKAY',
  },
  passwordGenerator: {
=======
>>>>>>> add confirmationDialog text to i18n
    label: 'Nickname',
    password: 'Master Password',
<<<<<<< HEAD
=======
    button: 'Create account password',
    newPassword: 'Creating a new account password?',
>>>>>>> add english and spanish text
    passwordLabel: 'What is the account password\'s Nickname?',
    masterPassword: 'What is your Master Password?',
    confirmPassword: 'Retype your Master Password',
    submitMessage: 'CREATE ACCOUNT PASSWORD',
<<<<<<< HEAD
=======
    oldPasswordFlow: 'Old Password Flow',
    newPasswordFlow: 'New Password Flow',
<<<<<<< HEAD
>>>>>>> add english and spanish text
=======
=======
    newPassword: 'Creating a new account password?',
  },
  flowScreen: {
    oldPasswordFlow: 'Old Password Flow',
    newPasswordFlow: 'New Password Flow',
  },
  infoScreen: {},
  confirmationDialog: {
>>>>>>> reorganize translations
    completedStatus: 'All done!',
    completedClipboard: 'Your account password is now on your clipboard.',
    accountPassword: 'Account Password:',
    nextSteps: 'What would you like to do next?',
    clearClipboard: 'Clear clipboard',
    anotherPassword: 'Make another password',
    confirmOk: 'OKAY',
>>>>>>> add confirmationDialog text to i18n
  },
  passwordGenerator: {
    label: 'Nickname',
    password: 'Master Password',
    passwordLabel: 'What is the account password\'s Nickname?',
    masterPassword: 'What is your Master Password?',
    confirmPassword: 'Retype your Master Password',
    submitMessage: 'CREATE ACCOUNT PASSWORD',
  },
  tipsPage: {
    question_1: {
      title: 'What is Loplop?',
      content: 'Many people use the same password for many different services. If that password is exposed or hacked, all of that person’s accounts with the same password are compromised.\nLoplop reduces this risk by keeping your master password secret. Instead of being the password that you submit to enter your accounts, it becomes an ingredient that is used to create a unique, virtually unguessable password.',
    },
    question_2: {
      title: 'What is a nickname?',
      content: 'A typical nickname refers to the account the final password will be generated for, e.g. Google, Amazon, Facebook, etc. But if you are able to remember it, the nickname can be any string.\nIt will be used in combination with the master password to generate a unique account password. As long as you remember your nickname and master password, the unique account password can be reliably regenerated at any time using Loplop (or any OPLOP implementation).',
    },
    question_3: {
      title: 'How do I use Classic Oplop?',
      content: 'To generate a password that is 8 characters long, simply place an asterisk at the very beginning of your nickname. After you enter your master password and create your generated password, you will see that it is 8 characters long instead of the standard 16 characters.',
    },
    question_4: {
      title: 'What if I forget my master password?',
      content: 'The chief concern of this app is password security. Because of this, we do not save your master password in the app, ever. Loplop is used to create passwords, but not to store them.\nIf you forget your master password, we cannot retrieve it for you because this information is not saved. This means that you may need make a new Loplop password for the site or service and reset your password.\nIf you are worried that you will forget your master password, your first line of defense is to make it as memorable as possible.',
    },
    question_5: {
      title: 'What does Loplop mean?',
      content: 'Loplop is a mobile interface for the OPLOP password hashing algorithm: “One Password = Lots of Passwords.” Loplop is "Long Oplop" because it produces a 16 character password rather than Oplop\'s default 8 characters.',
    },
  },
};

export default en;
