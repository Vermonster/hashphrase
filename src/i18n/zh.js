const zh = {
  createPassword: {
    clipboardCleared: '剪贴板已清空',
    clearClipboardButton: '清除剪贴板',
  },
  confirmationDialog: {
    completedStatus: '完成！',
    completedClipboard: '你的密码已被保存到剪贴板',
    button: '返回',
  },
  passwordGenerator: {
    nickname: '账户昵称',
    password: '主密码',
    confirmPassword: '确认主密码',
    nicknameLabel: '你的账户昵称是什么？',
    masterPassword: '你的主密码是什么？',
    submitMessage: '获取密码',
    warning: '密码不匹配',
    confirmSwitch: '确认主密码',
  },
  tipsPage: {
    FAQs: 'FAQs',
    questions: {
      question_1: {
        title: '什么是Hashphrase',
        content: {
          paragraph_1: 'Hashphrase可以让你轻松的管理你的账户密码。',
          paragraph_2: '从网络安全性方面来考虑，每个账户都应该用不同的密码。',
          paragraph_3: '使用Hashphrase给你带来的好处包括：',
          listContent: {
            listItem_1: '你不用再记住或者记录下每一个账户的密码',
            listItem_2: '无须备份密码',
            listItem_3: '你只需记住 -主密码，以及每个账户昵称的规律',
            listItem_4: '开源技术的使用，永久免费',
          },
        },
      },
      question_2: {
        title: '怎么起账户昵称？',
        content: {
          paragraph_1: '我们建议你，用一种你可以记住的规律，来给每个账户起昵称。比如说，你的规律可以是“网站的名称，全部小写（e.g., "gmail", "facebook"），或者也可以是网站的全名（e.g., "gmail.com", "facebook.com"）。',
          paragraph_2: '最重要的是，记住昵称的规律，当然，每个账户的昵称应该是不同的。',
        },
      },
      question_3: {
        title: '这个软件保存了我的密码吗？',
        content: {
          paragraph_1: '本软件不会保存你的密码，在你生成账户密码后，我们会把这个生成的密码保存在你的剪贴板里，你可以用来复制和登陆。你可以在主页里选择清除剪贴板的选项。',
        },
      },
      question_4: {
        title: '忘了密码或昵称',
        content: {
          paragraph_1: '因为我们没有用任何方法储存你的昵称和密码信息，如果你遗忘了密码或昵称，你必须重置帐户密码。',
          paragraph_2: '如果你频繁利用Hashphrase，这也会帮助你加强密码和昵称的记忆。',
        },
      },
      question_5: {
        title: '修改密码',
        content: {
          paragraph_1: '如果你想要修改某个帐户的密码，你必须要使用一个新的帐户昵称（或者修改主密码），但凡事你的账户昵称和主密码相同，生成密码也不会改变。部分用户会把特殊帐户的信息写下来，以便查看。',
        },
      },
      question_6: {
        title: '为什么要确认主密码？',
        content: {
          paragraph_1: '如果你是用Hashphrase第一次设置某个帐户的密码，你可以重复确认主密码的准确性，以保证初次设置的密码有效。',
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

export default zh;
