const en = {
  createPassword: {
    newPassword: 'New password',
    clipboardCleared: 'Your account password has been cleared from clipboard.',
  },
  confirmationDialog: {
    completedStatus: 'All done!',
    completedClipboard: 'The password is on your clipboard.',
    button: 'START OVER',
  },
  passwordGenerator: {
    nickname: 'Nickname',
    password: 'Master Password',
    confirmPassword: 'Confirm Master Password',
    firstNickname: 'Case sensitive, E.g. MyAmazon',
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
  policyPage: {
    title: 'Privacy Policy',
    update: 'Last Updated: April 19, 2019',
    creator: 'Vermonster Inc. (“we”, “us”, “our”, “company”) is the creator and maintainer of the HashPhrase application (“app”). Any reference to “you”, “your”, or “user” refers to the user who installs and uses the App.',
    privacy_policy: [
      {
        id: 1,
        subheading: 'Privacy Policy Acceptance',
        content: 'Please read this Privacy Policy before using the app. By installing and making use of the app’s services, You give consent to the policies and practices outlined here.',
      },
      {
        id: 2,
        subheading: 'Amendments to this Privacy Policy',
        content: 'We reserve the right to modify and update this Privacy Policy at any time. We will indicate that the policy has been edited by changing the “Last Updated” date at the top of this document. You are advised to review this document periodically. Any changes will be effective when posted on this page.',
      },
      {
        id: 3,
        subheading: 'Information Collection and Processing',
        content: 'We do not collect or store any information that users enter into this application. Generated passwords are stored on the user’s own device clipboard and are never sent to us. User entries into input fields for Nicknames and Master Passwords are not stored at all. We do not intentionally collect any personally identifiable information (such as name, email address, phone number, etc.) and users are not required to provide us with any such information in order to use this app. Users may choose to provide the company with personally identifiable information if they contact us with questions or support requests.',
      },
      {
        id: 4,
        subheading: 'Enquiry Information Collection',
        content: 'In response to support requests or other communications initiated by users, we will collect your name, the content of your message, as well as the email address or other contact information to which we will direct our response. Support requests may be submitted via email to info@vermonster.com. Since this project is open source on Github, users may also submit issues or pull requests there.',
      },
      {
        id: 5,
        subheading: 'Purpose of Processing',
        content: 'We only process users’ personal information from enquiries in order to respond to your request and maintain a record of your past communication with the company. We may use this information to follow up, particularly in the case of support requests.',
      },
      {
        id: 6,
        subheading: 'Legal Basis for Processing',
        content: 'We are unable to respond effectively to user requests if we do not process the basic personally identifiable information from enquiries. We maintain the bare minimum of such information in order to fulfil our obligations towards you.',
      },
      {
        id: 7,
        subheading: 'Sharing Your Information',
        content: 'We do not share or sell your personal information to any third-party. We may disclose your personal information upon reasonable requests from law enforcement authorities, or if we are legally required to do so. We may disclose your personal identification to our employees so that they may respond to enquiries from you.',
      },
    ],
  },
};

export default en;
