const en = {
  createPassword: {
    clipboardCleared: 'Your clipboard has been cleared.',
    clearClipboardButton: 'CLEAR CLIPBOARD',
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
    nicknameLabel: 'What is the account\'s Nickname?',
    masterPassword: 'What is your Master Password?',
    submitMessage: 'GET PASSWORD',
    warning: 'Password does not match',
    confirmSwitch: 'Confirm Password',
  },
  tipsPage: {
    FAQs: 'FAQs',
    questions: {
      question_1: {
        title: 'What is Hashphrase?',
        content: {
          paragraph_1: 'Hashphrase makes it easy to manage unique passwords.',
          paragraph_2: 'Online security best practices include using a unique password for each account.',
          paragraph_3: 'Advantages of Hashphrase include:\n'
          + '  1. You don’t have to memorize or write down all of your passwords\n'
          + '  2. You don’t have to back up any files\n'
          + '  3. You only have to remember two things— your master password and the rule (designed by you) to determine account nicknames\n'
          + '  4. Multiple open source implementations make it free forever and easy to use on any device or platform',
        },
      },
      question_2: {
        title: 'What nickname do I use?',
        content: {
          paragraph_1: 'Hashphrase wouldn’t be as useful if you had to remember random nicknames for every account you sign into. Instead, you’re encouraged to come up with a simple rule that determines the nickname for an arbitrary account. For example, the rule could be “the name of the website or app, all lowercase” (e.g., “gmail”, “facebook”). Or it could be “the domain name associated with the account” (e.g. “gmail.com”, “facebook.com”).',
          paragraph_2: 'What’s important is that you can remember the rule and conveniently apply it to any account that you want to manage with Hashphrase. And, of course, the rule should produce different values for different accounts.',
        },
      },
      question_3: {
        title: 'Does it remember my passwords?',
        content: {
          paragraph_1: 'No, the app does not remember or store your passwords. However, at the end of the normal Hashphrase workflow, the app will copy the password you generated into the system clipboard so that you can paste it into whatever sign-in form you are using. The main app screen does provide a button to clear the device clipboard for your convenience.',
        },
      },
      question_4: {
        title: 'I forgot my password or nickname.',
        content: {
          paragraph_1: 'Your master password and nickname are not stored by this application and cannot be retrieved. If you lose or forget them, you will have to pursue alternate account recovery procedures.',
          paragraph_2: 'One way to reduce the chance of forgetting is to always use Hashphrase instead of having your browser or app remember your signin, which should reinforce your memory regularly.',
        },
      },
      question_5: {
        title: 'How do I change my password?',
        content: {
          paragraph_1: 'If you have to change your password, you will have to use a different nickname (or master password), but then you no longer have a simple rule for all accounts. Some users end up maintaining a document where they can make notes about the nickname for special cases. Such a document can also be used for notes about cases where you have to modify the final password output in order to make it satisfy some extra constraint, such as a required symbol.',
        },
      },
      question_6: {
        title: 'What is Confirm Password?',
        content: {
          paragraph_1: 'When you first set a password using Hashphrase, you might want to be extra careful to avoid typos in your master password. Enabling this switch requires you to enter the master password twice in order to generate the password.',
        },
      },
    },
  },
  policyPage: {
    title: 'Privacy Policy',
    update: 'Last Updated: April 19, 2019',
    creator: 'Vermonster LLC (“we”, “us”, “our”, “company”) is the creator and maintainer of the Hashphrase application (“app”). Any reference to “you”, “your”, or “user” refers to the user who installs and uses the App.',
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
