const en = {
  createPassword: {
    newPassword: 'New password',
    clipboardCleared: 'Your password has been cleared from clipboard.',
  },
  infoScreen: {},
  confirmationDialog: {
    completedStatus: 'All done!',
    completedClipboard: 'Your Hashphrase is now on your clipboard.',
    accountPassword: 'Hashphrase:',
    button: 'I\'M DONE, CLEAR CLIPBOARD',
  },
  passwordGenerator: {
    nickname: 'Nickname',
    password: 'Master Password',
    confirmPassword: 'Confirm Master Password',
    firstNickname: 'E.g. MyAmazon, Work Email',
    firstPassword: 'Make it memorable',
    nicknameLabel: 'What is the account\'s Nickname?',
    masterPassword: 'What is your Master Password?',
    retypePassword: 'Retype your Master Password',
    submitMessage: 'CREATE HASHPHRASE',
    warning: 'Password does not match',
  },
  tipsPage: {
    title: 'FAQs',
    questions: {
      question_1: {
        title: 'What is Hashphrase?',
        content: 'Many people use the same password for many different services. If that password is exposed or hacked, all of that person’s accounts with the same password are compromised.\nHashphrase reduces this risk by keeping your master password secret. Instead of being the password that you submit to enter your accounts, it becomes an ingredient that is used to create a unique, virtually unguessable password.',
      },
      question_2: {
        title: 'What is a nickname?',
        content: 'A typical nickname refers to the account the final password will be generated for, e.g. Google, Amazon, Facebook, etc. But if you are able to remember it, the nickname can be any string.\nIt will be used in combination with the master password to generate a unique account password. As long as you remember your nickname and master password, the unique account password can be reliably regenerated at any time using HashPhrase (or any OPLOP algorithm implementation).',
      },
      question_3: {
        title: 'How do I use Classic Oplop?',
        content: 'To generate a password that is 8 characters long, simply place an asterisk at the very beginning of your nickname. After you enter your master password and create your generated password, you will see that it is 8 characters long instead of the standard 16 characters.',
      },
      question_4: {
        title: 'I forgot my master password.',
        content: 'The chief concern of this app is password security. Because of this, we do not save your information in the app, ever. HashPhrase is used to create passwords, but not to store them.\nIf you forget your master password, we cannot retrieve it for you because this information is not saved. This means that you may need make a new Loplop password for the site or service and reset your password.\nIf you are worried that you will forget your master password, your first line of defense is to make it as memorable as possible.',
      },
      question_5: {
        title: 'What does Loplop mean?',
        content: 'Loplop is derived from the OPLOP password hashing algorithm: “One Password = Lots of Passwords.” Loplop is "Long Oplop" because it produces a 16 character password rather than OPLOP\'s default 8 characters.',
      },
    },
  },
};

export default en;
