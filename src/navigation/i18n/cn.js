const cn = {
  createPassword: {
    newPassword: '创建新密码',
    clipboardCleared: '你的密码已从剪贴板中移除',
  },
  confirmationDialog: {
    completedStatus: '完成！',
    completedClipboard: '你的密码已经保存到剪贴板',
    accountPassword: '密码串：',
    button: '清空剪贴板',
  },
  passwordGenerator: {
    label: '账户昵称',
    password: '主密码',
    passwordLabel: '你的账户昵称是什么？',
    masterPassword: '你的主密码是什么？',
    retypePassword: '重复输入主密码',
    confirmPassword: '确认主密码',
    submitMessage: '创建密码串',
    warning: '密码不匹配',
  },
  tipsPage: {
    title: 'FAQs',
    questions: {
      question_1: {
        title: '什么是Loplop?',
        content: '许多人在创建不同的账户时，会使用同样的密码，但一旦这个密码被盗取，所有的账户都会存在风险。使用Loplop的话，你只需记住你的主密码，Loplop会利用你的主密码和账户昵称来生成一个特殊的，别人无法猜到的密码。',
      },
      question_2: {
        title: '什么是账户昵称？',
        content: '账户昵称指的是你需要登陆的账户的别名，例如：谷歌，亚马逊，淘宝等，你可以给这些账户任意一个特别的名称。我们利用账户昵称和主密码来帮你生成账户密码。',
      },
      question_3: {
        title: '我怎么使用经典版的Oplop？',
        content: '如果你只想生成8位数密码，请在你的账户昵称前加上*号，输入主密码，然后按生成密码的按钮，这样我们会帮你生成8位字符的密码（而不是16位）。',
      },
      question_4: {
        title: '忘记主密码怎么办？',
        content: '从安全的角度出发，我们不会在任何的服务器上储存用户的主密码，因为我们的目的是“生成”密码，而非“储存”密码。所以，如果你忘记主密码，你会需要分别重置所有账户的密码。为了避免忘记主密码，请在一开始就设置一个能够记住的密码作为主密码。',
      },
      question_5: {
        title: 'Loplop是什么意思？',
        content: 'Loplop是一个手机版本的密码生成软件，利用了OPLOP的密码计算原理：“一个密码=很多密码”。Loplop意思是“Long Oplop”，因为我们生成16位密码，而不是8位密码。',
      },
    },
  },
};

export default cn;
