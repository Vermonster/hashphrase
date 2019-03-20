const es = {
<<<<<<< HEAD

  createPassword: {
    title: 'AgiliKEY',
<<<<<<< HEAD
    newPassword: '¿Vas a crear una nueva contraseña?',
    message: 'Contraseña generada ha sido copiado al clipboard.',
    label: 'Etiqueta',
    password: 'Contraseña general',
    button: 'Cree una contraseña',
=======
    label: 'Etiqueta',
    password: 'Contraseña general',
    button: 'Crear una contraseña',
    newPassword: '¿Vas a crear una nueva contraseña?',
>>>>>>> add confirmationDialog text to i18n
    passwordLabel: '¿Qué es la etiqueta de la cuenta?',
    masterPassword: '¿Qué es la Contraseña Maestra?',
    confirmPassword: 'Vuelva a escribir la Contraseña Maestra',
    submitMessage: 'GENERAR CONTRASEÑA',
=======
  createPassword: {
    title: 'AgiliKEY',
    newPassword: '¿Vas a crear una nueva contraseña?',
  },
  flowScreen: {
>>>>>>> reorganize translations
    oldPasswordFlow: 'Contraseña Vieja',
    newPasswordFlow: 'Contraseña Nueva',
  },
  infoScreen: {},
  confirmationDialog: {
    completedStatus: '¡Completo!',
    completedClipboard: 'Contraseña generada ha sido copiado al clipboard.',
    accountPassword: 'Contraseña de la Cuenta:',
    nextSteps: '¿Qué le gusta hacer ahora?',
    clearClipboard: 'Borrar el clipboard',
    anotherPassword: 'Hacer otra contraseña',
    confirmOk: 'CONFIRMAR',
  },
<<<<<<< HEAD
  flowScreen: {
    oldPasswordFlow: 'Contraseña Vieja',
    newPasswordFlow: 'Contraseña Nueva',
  },
  infoScreen: {},
  confirmationDialog: {
    completedStatus: '¡Completo!',
    completedClipboard: 'Contraseña generada ha sido copiado al clipboard.',
    accountPassword: 'Contraseña de la Cuenta:',
    nextSteps: '¿Qué le gusta hacer ahora?',
    clearClipboard: 'Borrar el clipboard',
    anotherPassword: 'Hacer otra contraseña',
    confirmOk: 'CONFIRMAR',
  },
=======
>>>>>>> reorganize translations
  passwordGenerator: {
    label: 'Etiqueta',
    password: 'Contraseña general',
    passwordLabel: '¿Qué es la etiqueta de la cuenta?',
    masterPassword: '¿Qué es la Contraseña Maestra?',
    confirmPassword: 'Vuelva a escribir la Contraseña Maestra',
    submitMessage: 'GENERAR CONTRASEÑA',
  },
  tipsPage: {
    questions: {
      question_1: {
        title: '¿Qué es Loplop?',
        content: 'Mucha gente se usan la misma contraseña por servicios diferentes. Si esta contraseña fuera compremetida, todas las cuentas con la misma contraseña son comprometidas.\nLoplop reduce este riesgo mediante una estrategia que guarda secreto tu contraseña maestra. En vez de la contraseña que usas para entrar tus cuentas, tu contraseña se convierte en una ingrediente que se usa para crear una contraseña unica y segura.',
      },
      question_2: {
        title: '¿Qué es una etiqueta?',
        content: 'Una etiqueta tipica A typical nickname refers to the account the final password will be generated for, e.g. Google, Amazon, Facebook, etc. But if you are able to remember it, the nickname can be any string.\nIt will be used in combination with the master password to generate a unique account password. As long as you remember your nickname and master password, the unique account password can be reliably regenerated at any time using Loplop (or any OPLOP implementation).',
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
  },
};

export default es;
