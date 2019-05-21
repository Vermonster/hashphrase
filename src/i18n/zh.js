const zh = {
  createPassword: {
    clipboardCleared: '剪贴板已清空',
    clearClipboardButton: '清除剪贴板',
  },
  confirmationDialog: {
    completedStatus: '完成！',
    completedClipboard: '你的密码已被保存到剪贴板',
    passwordAccessibilityLabel: '账户密码',
    button: '返回',
    buttonAccessibilityLabel: '按下返回',
  },
  passwordGenerator: {
    nickname: '账户昵称',
    password: '主密码',
    confirmPassword: '确认主密码',
    nicknameLabel: '你的账户昵称是什么？',
    masterPassword: '你的主密码是什么？',
    getPassword: '获取密码',
    warning: '密码不匹配',
    confirmSwitch: '确认主密码',
    nicknameAccessibilityLabel: '输入账户昵称',
    passwordAccessibilityLabel: '输入主密码',
    masterpassAccessibilityLabel: '确认住密码',
  },
  footer: {
    version: 'Version 1.0.0',
    privacyPolicy: '安全与隐私',
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
    title: '安全与隐私',
    update: '上次更新: April 19, 2019',
    creator: 'Vermonster LLC(以下简称"我们")是Hashphrase的开发者（以下简称"本软件"）, "你们"将指代所有的用户。', 
    privacy_policy: [
      {
        id: 1,
        subheading: '安全与隐私标准',
        content: '请在使用本软件前阅读安全与隐私条款，安装和应用本软件，代表你同意我们这里所写的条款。',
      },
      {
        id: 2,
        subheading: '安全与隐私政策修订',
        content: '我们保留随时修改和更新本隐私政策的权利。我们将通过更改本文档顶部的“上次更新”日期来指示已对策略进行了编辑。建议您定期查看本文档。任何更改将在此页面上发布时生效。',
      },
      {
        id: 3,
        subheading: '信息收集和处理',
        content: '我们不会收集或存储用户输入本软件的任何信息。生成的密码存储在用户自己设备的剪贴板上，永远不会发送给我们。用户输入到昵称和主密码完全不被存储。我们不会故意收集任何个人身份信息（如姓名，电子邮件地址，电话号码等），并且用户无需向我们提供任何此类信息即可使用本软件。如果用户在提出问题或支持请求时与我们联系，他们可以选择向公司提供个人身份信息。',
      },
      {
        id: 4,
        subheading: '查询信息收集',
        content: '为回答用户发起的支持请求或其他问题，我们将收集您的姓名，问题内容，以及我们回复的电子邮件地址或其他联系信息。支持请求可通过电子邮件提交至info@vermonster.com。由于该项目在Github上是开源的，因此用户也可以在那里提交问题或提出请求。',
      },
      {
        id: 5,
        subheading: '处理信息的目的',
        content: '我们仅处理用户的个人信息，以便回复您的请求并保留您过去与公司沟通的记录。我们可能会使用此信息进行跟进，尤其是在支持请求的情况下。',
      },
      {
        id: 6,
        subheading: '处理的法律依据',
        content: '如果我们不处理查询中的基本个人身份信息，我们无法有效回应用户请求。我们会最低限度地保留这些信息，以履行我们对您的义务。',
      },
      {
        id: 7,
        subheading: '分享你的信息',
        content: '我们不会将您的个人信息分享或出售给任何第三方。我们可能会根据执法机构的合理地透露您的个人信息，或者我们在法律上要求这样做。我们也可能会向员工透露您的个人身份，以便他们回复您的询问。',
      },
    ],
  },
};

export default zh;
